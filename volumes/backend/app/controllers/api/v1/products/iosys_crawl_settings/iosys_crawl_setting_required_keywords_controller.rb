module Api
  module V1
    module Products
      module IosysCrawlSettings
        class IosysCrawlSettingRequiredKeywordsController < ApplicationController
          def index
            render json: {
              iosys_crawl_setting_required_keywords:
                product.iosys_crawl_setting.iosys_crawl_setting_required_keywords
            }, status: 200
          end

          def create
            iosys_crawl_setting_required_keyword =
              product
              .iosys_crawl_setting
              .iosys_crawl_setting_required_keywords
              .create!(iosys_crawl_setting_required_keyword_params)

            inspect
            render json: iosys_crawl_setting_required_keyword.as_json, status: 200
          rescue ActiveRecord::RecordInvalid
            render json: { error: "Bad Request.", status: 400 }, status: 400
          end

          def update
            iosys_crawl_setting_required_keyword.update!(iosys_crawl_setting_required_keyword_params)
            inspect
            render json: iosys_crawl_setting_required_keyword.as_json, status: 200
          rescue ActiveRecord::RecordInvalid
            render json: { error: "Bad Request.", status: 400 }, status: 400
          end

          def destroy
            if iosys_crawl_setting_required_keyword.destroy
              head 200
            else
              render json: { error: "Bad Request.", status: 400 }, status: 400
            end
          end

          private

          def product
            @product ||= Product.find(params[:product_id])
          end

          def iosys_crawl_setting_required_keyword
            @iosys_crawl_setting_required_keyword ||=
              product
              .iosys_crawl_setting
              .iosys_crawl_setting_required_keywords
              .find(params[:id])
          end

          def iosys_crawl_setting_required_keyword_attributes
            %i[keyword]
          end

          def iosys_crawl_setting_required_keyword_params
            params.permit(iosys_crawl_setting_required_keyword_attributes)
          end

          def inspect
            ::Products::Inspect::DeleteIosysProducts.call(product:)
          end
        end
      end
    end
  end
end
