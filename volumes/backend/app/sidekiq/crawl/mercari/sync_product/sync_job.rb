module Crawl
  module Mercari
    module SyncProduct
      class SyncJob
        include Sidekiq::Job
        include Utils::TimeoutHandler

        sidekiq_options queue: :crawl_mercari_sync_product_sync_job,
                        retry: 0, lock: :until_executed

        def perform(mercari_product_id)
          mercari_product = MercariProduct.find_by(id: mercari_product_id)
          return if mercari_product.nil?

          handle_timeout { Crawl::Mercari::SyncProduct::Syncer.call(mercari_product:) }
        end
      end
    end
  end
end
