module Crawl
  module YahooAuction
    class Crawler
      def initialize(product:)
        @product = product
      end

      def execute
        Crawl::Client.execute do |browser|
          page = browser.new_page

          start = 1
          loop do
            page.goto(url(start))
            append_results(page)

            break unless exists_next_page?(page)
            break if loop_safe(start)

            start += 100
          end
        end

        crawl_results
      end

      private

      attr_reader :product

      def append_results(page)
        product_doms = page.query_selector_all("li.Product")
        results = product_doms.map do |dom|
          CrawlResult.new(
            yahoo_auction_id: yahoo_auction_id(dom),
            name: name(dom),
            price: price(dom),
            thumbnail_url: thumbnail_url(dom),
            published: true
          )
        end

        @crawl_results = CrawlResults.new(crawl_results.results + results)
      end

      def url(start)
        Crawl::YahooAuction::UrlGenerator.new(product:, start:).generate
      end

      def exists_next_page?(page)
        page.query_selector(".Pager__list.Pager__list--next > a.Pager__link")
      end

      def loop_safe(start)
        start > 100_000
      end

      def yahoo_auction_id(dom)
        dom.query_selector(".Product__titleLink").get_attribute("data-auction-id")
      end

      def name(dom)
        dom.query_selector(".Product__titleLink").inner_text
      end

      def price(dom)
        dom.query_selector(".Product__priceValue").inner_text.gsub(/,|円/, "")
      end

      def thumbnail_url(dom)
        dom.eval_on_selector(".Product__imageData", "el => el.src")
      end

      def crawl_results
        @crawl_results ||= CrawlResults.new
      end
    end
  end
end
