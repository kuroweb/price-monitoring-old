# クロール結果クラス
module Crawl
  module YahooFleamarket
    module SyncProduct
      class CrawlResult
        include ActiveModel::Model
        include ActiveModel::Attributes

        attribute :external_id, :string
        attribute :seller_id, :string
        attribute :name, :string
        attribute :price, :integer
        attribute :thumbnail_url, :string
        attribute :published, :boolean
        attribute :bought_date, :datetime
        attribute :deleted, :boolean

        validates :published, inclusion: { in: [true, false] }
        validates :deleted, inclusion: { in: [true, false] }
        validates_presence_of :external_id, :name, :price, :thumbnail_url
      end
    end
  end
end
