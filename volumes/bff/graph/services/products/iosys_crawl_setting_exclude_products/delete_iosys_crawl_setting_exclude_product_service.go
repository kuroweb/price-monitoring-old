package iosys_crawl_setting_exclude_products

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/kuroweb/price-monitoring/volumes/bff/config"
	"github.com/kuroweb/price-monitoring/volumes/bff/graph/model"
)

type IDeleteIosysCrawlSettingExcludeProductService interface {
	DeleteIosysCrawlSettingExcludeProduct(ctx context.Context, id string, productID string) (model.DeleteIosysCrawlSettingExcludeProductResult, error)
}

type DeleteIosysCrawlSettingExcludeProductService struct{}

func (d *DeleteIosysCrawlSettingExcludeProductService) DeleteIosysCrawlSettingExcludeProduct(ctx context.Context, id string, productID string) (model.DeleteIosysCrawlSettingExcludeProductResult, error) {
	cfg := config.NewConfig()
	url := fmt.Sprintf("%s/api/v1/products/%s/iosys_crawl_settings/iosys_crawl_setting_exclude_products/%s", cfg.BackendUrl, productID, id)
	client := &http.Client{}

	req, err := http.NewRequest("DELETE", url, nil)
	if err != nil {
		result := model.DeleteIosysCrawlSettingExcludeProductResultError{
			Ok: false,
			Error: model.DeleteIosysCrawlSettingExcludeProductResultValidationFailed{
				Code:    "503",
				Message: "Service is currently unavailable.",
				Details: []*model.ErrorDetail{},
			},
		}

		return result, nil
	}

	resp, err := client.Do(req)
	if err != nil {
		return d.handleServerError(), nil
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return d.handleApiError(resp), nil
	}

	return model.DeleteIosysCrawlSettingExcludeProductResultSuccess{Ok: true}, nil
}

func (d *DeleteIosysCrawlSettingExcludeProductService) handleServerError() model.DeleteIosysCrawlSettingExcludeProductResultError {
	return model.DeleteIosysCrawlSettingExcludeProductResultError{
		Ok: false,
		Error: model.DeleteIosysCrawlSettingExcludeProductResultValidationFailed{
			Code:    "503",
			Message: "Internal Server Error.",
			Details: []*model.ErrorDetail{},
		},
	}
}

func (d *DeleteIosysCrawlSettingExcludeProductService) handleApiError(resp *http.Response) model.DeleteIosysCrawlSettingExcludeProductResultError {
	var errorResponse struct {
		Error  string `json:"error"`
		Status int    `json:"status"`
	}

	decoder := json.NewDecoder(resp.Body)
	if err := decoder.Decode(&errorResponse); err == nil {
		return model.DeleteIosysCrawlSettingExcludeProductResultError{
			Ok: false,
			Error: model.DeleteIosysCrawlSettingExcludeProductResultValidationFailed{
				Code:    strconv.Itoa(errorResponse.Status),
				Message: errorResponse.Error,
				Details: []*model.ErrorDetail{},
			},
		}
	}

	return d.handleServerError()
}
