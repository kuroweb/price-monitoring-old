package products

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/kuroweb/price-monitoring/volumes/bff/config"
	"github.com/kuroweb/price-monitoring/volumes/bff/graph/model"
)

type IUpdateProductService interface {
	UpdateProduct(ctx context.Context, id string, input model.UpdateProductInput) (model.UpdateProductResult, error)
}

type UpdateProductService struct{}

func (u *UpdateProductService) UpdateProduct(ctx context.Context, id string, input model.UpdateProductInput) (model.UpdateProductResult, error) {
	cfg := config.NewConfig()
	url := fmt.Sprintf("%s/api/v1/products/%s", cfg.BackendUrl, id)

	// NOTE: ネストした構造体の構築がstructだと辛かったので代替案として実施
	body := map[string]interface{}{
		"name": input.Name,
		"yahoo_auction_crawl_setting": map[string]interface{}{
			"keyword":     input.YahooAuctionCrawlSetting.Keyword,
			"category_id": input.YahooAuctionCrawlSetting.CategoryID,
			"min_price":   input.YahooAuctionCrawlSetting.MinPrice,
			"max_price":   input.YahooAuctionCrawlSetting.MaxPrice,
			"enabled":     input.YahooAuctionCrawlSetting.Enabled,
		},
		"mercari_crawl_setting": map[string]interface{}{
			"keyword":     input.MercariCrawlSetting.Keyword,
			"category_id": input.MercariCrawlSetting.CategoryID,
			"min_price":   input.MercariCrawlSetting.MinPrice,
			"max_price":   input.MercariCrawlSetting.MaxPrice,
			"enabled":     input.MercariCrawlSetting.Enabled,
		},
		"janpara_crawl_setting": map[string]interface{}{
			"keyword":   input.JanparaCrawlSetting.Keyword,
			"min_price": input.JanparaCrawlSetting.MinPrice,
			"max_price": input.JanparaCrawlSetting.MaxPrice,
			"enabled":   input.JanparaCrawlSetting.Enabled,
		},
		"iosys_crawl_setting": map[string]interface{}{
			"keyword":   input.IosysCrawlSetting.Keyword,
			"min_price": input.IosysCrawlSetting.MinPrice,
			"max_price": input.IosysCrawlSetting.MaxPrice,
			"enabled":   input.IosysCrawlSetting.Enabled,
		},
		"pc_koubou_crawl_setting": map[string]interface{}{
			"keyword":   input.PcKoubouCrawlSetting.Keyword,
			"min_price": input.PcKoubouCrawlSetting.MinPrice,
			"max_price": input.PcKoubouCrawlSetting.MaxPrice,
			"enabled":   input.PcKoubouCrawlSetting.Enabled,
		},
		"used_sofmap_crawl_setting": map[string]interface{}{
			"keyword":   input.UsedSofmapCrawlSetting.Keyword,
			"min_price": input.UsedSofmapCrawlSetting.MinPrice,
			"max_price": input.UsedSofmapCrawlSetting.MaxPrice,
			"enabled":   input.UsedSofmapCrawlSetting.Enabled,
		},
	}

	requestBody, err := json.Marshal(body)
	if err != nil {
		return u.handleServerError(), nil
	}

	req, err := http.NewRequest(http.MethodPatch, url, bytes.NewBuffer(requestBody))
	if err != nil {
		return u.handleServerError(), nil
	}

	req.Header.Set("Content-Type", "application/json")

	client := http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return u.handleServerError(), nil
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return u.handleServerError(), nil
	}

	var response struct {
		ID   int    `json:"id"`
		Name string `json:"name"`
	}

	decoder := json.NewDecoder(resp.Body)
	if err := decoder.Decode(&response); err != nil {
		return u.handleServerError(), nil
	}

	result := model.UpdateProductResultSuccess{
		Ok: true,
		Product: &model.Product{
			ID:   strconv.Itoa(response.ID),
			Name: response.Name,
		},
	}

	return result, nil
}

func (u *UpdateProductService) handleServerError() model.UpdateProductResultError {
	return model.UpdateProductResultError{
		Ok: false,
		Error: model.UpdateProductResultValidationFailed{
			Code:    "503",
			Message: "Service is currently unavailable.",
			Details: []*model.ErrorDetail{},
		},
	}
}
