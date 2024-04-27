# クロール結果クラス
module Crawl
  module YahooAuction
    module SyncProducts
      class CrawlResult
        include ActiveModel::Model
        include ActiveModel::Attributes

        attribute :yahoo_auction_id, :string
        attribute :seller_id, :string
        attribute :name, :string
        attribute :price, :integer
        attribute :buyout_price, :integer
        attribute :thumbnail_url, :string
        attribute :published, :boolean
        attribute :bought_date, :datetime
        attribute :end_date, :datetime

        validates :published, inclusion: { in: [true, false] }
        validates_presence_of :yahoo_auction_id, :seller_id, :name, :price, :thumbnail_url
      end
    end
  end
end