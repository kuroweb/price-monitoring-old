module Api
  module V1
    module Products
      module PcKoubouCrawlSettings
        class PcKoubouCrawlSettingRequiredKeywordsController < ApplicationController
          def index
            render json: {
              pc_koubou_crawl_setting_required_keywords:
                product.pc_koubou_crawl_setting.pc_koubou_crawl_setting_required_keywords
            }, status: 200
          end

          def create
            pc_koubou_crawl_setting_required_keyword =
              product
              .pc_koubou_crawl_setting
              .pc_koubou_crawl_setting_required_keywords
              .create!(pc_koubou_crawl_setting_required_keyword_params)

            inspect
            render json: pc_koubou_crawl_setting_required_keyword.as_json, status: 200
          rescue ActiveRecord::RecordInvalid => e
            Rails.logger.error("Bad Request. exception: #{e.full_message}")
            render json: { error: "Bad Request.", status: 400 }, status: 400
          end

          def update
            pc_koubou_crawl_setting_required_keyword.update!(pc_koubou_crawl_setting_required_keyword_params)

            inspect
            render json: pc_koubou_crawl_setting_required_keyword.as_json, status: 200
          rescue ActiveRecord::RecordInvalid => e
            Rails.logger.error("Bad Request. exception: #{e.full_message}")
            render json: { error: "Bad Request.", status: 400 }, status: 400
          end

          def destroy
            if pc_koubou_crawl_setting_required_keyword.destroy
              head 200
            else
              render json: { error: "Bad Request.", status: 400 }, status: 400
            end
          end

          private

          def product
            @product ||= Product.find(params[:product_id])
          end

          def pc_koubou_crawl_setting_required_keyword
            @pc_koubou_crawl_setting_required_keyword ||=
              product
              .pc_koubou_crawl_setting
              .pc_koubou_crawl_setting_required_keywords
              .find(params[:id])
          end

          def pc_koubou_crawl_setting_required_keyword_attributes
            %i[keyword]
          end

          def pc_koubou_crawl_setting_required_keyword_params
            params.permit(pc_koubou_crawl_setting_required_keyword_attributes)
          end

          def inspect
            ::Products::Inspect::DeletePcKoubouProducts.call(product:)
          end
        end
      end
    end
  end
end
