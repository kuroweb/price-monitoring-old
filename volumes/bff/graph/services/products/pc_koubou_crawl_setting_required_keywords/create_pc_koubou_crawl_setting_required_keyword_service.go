package pc_koubou_crawl_setting_required_keywords

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

type ICreatePcKoubouCrawlSettingRequiredKeywordService interface {
	CreatePcKoubouCrawlSettingRequiredKeyword(ctx context.Context, input model.CreatePcKoubouCrawlSettingRequiredKeywordInput) (model.CreatePcKoubouCrawlSettingRequiredKeywordResult, error)
}

type CreatePcKoubouCrawlSettingRequiredKeywordService struct{}

func (c *CreatePcKoubouCrawlSettingRequiredKeywordService) CreatePcKoubouCrawlSettingRequiredKeyword(ctx context.Context, input model.CreatePcKoubouCrawlSettingRequiredKeywordInput) (model.CreatePcKoubouCrawlSettingRequiredKeywordResult, error) {
	cfg := config.NewConfig()
	url := fmt.Sprintf("%s/api/v1/products/%s/pc_koubou_crawl_settings/pc_koubou_crawl_setting_required_keywords", cfg.BackendUrl, input.ProductID)

	body := map[string]interface{}{
		"keyword": input.Keyword,
	}

	requestBody, err := json.Marshal(body)
	if err != nil {
		return c.handleServerError(), nil
	}

	resp, err := http.Post(url, "application/json", bytes.NewBuffer(requestBody))
	if err != nil {
		return c.handleApiError(resp), nil
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return c.handleApiError(resp), nil
	}

	var response struct {
		ID      int    `json:"id"`
		Keyword string `json:"keyword"`
	}

	decoder := json.NewDecoder(resp.Body)
	if err := decoder.Decode(&response); err != nil {
		return c.handleServerError(), nil
	}

	result := model.CreatePcKoubouCrawlSettingRequiredKeywordResultSuccess{
		Ok: true,
		PcKoubouCrawlSettingRequiredKeyword: &model.PcKoubouCrawlSettingRequiredKeyword{
			ID:      strconv.Itoa(response.ID),
			Keyword: &response.Keyword,
		},
	}

	return result, nil
}

func (c *CreatePcKoubouCrawlSettingRequiredKeywordService) handleServerError() model.CreatePcKoubouCrawlSettingRequiredKeywordResultError {
	return model.CreatePcKoubouCrawlSettingRequiredKeywordResultError{
		Ok: false,
		Error: model.CreatePcKoubouCrawlSettingRequiredKeywordResultValidationFailed{
			Code:    "503",
			Message: "Internal Server Error.",
			Details: []*model.ErrorDetail{},
		},
	}
}

func (c *CreatePcKoubouCrawlSettingRequiredKeywordService) handleApiError(resp *http.Response) model.CreatePcKoubouCrawlSettingRequiredKeywordResultError {
	var errorResponse struct {
		Error  string `json:"error"`
		Status int    `json:"status"`
	}

	decoder := json.NewDecoder(resp.Body)
	if err := decoder.Decode(&errorResponse); err == nil {
		return model.CreatePcKoubouCrawlSettingRequiredKeywordResultError{
			Ok: false,
			Error: model.CreatePcKoubouCrawlSettingRequiredKeywordResultValidationFailed{
				Code:    strconv.Itoa(errorResponse.Status),
				Message: errorResponse.Error,
				Details: []*model.ErrorDetail{},
			},
		}
	}

	return c.handleServerError()
}
