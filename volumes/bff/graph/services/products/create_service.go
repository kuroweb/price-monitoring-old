package products

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"net/http"
	"strconv"

	"github.com/kuroweb/price-monitoring/volumes/bff/config"
	"github.com/kuroweb/price-monitoring/volumes/bff/graph/model"
)

type ICreateService interface {
	Create(ctx context.Context, input model.CreateProductInput) (*model.CreateProductResult, error)
}

type CreateService struct{}

func (c *CreateService) Create(ctx context.Context, input model.CreateProductInput) (*model.CreateProductResult, error) {
	cfg := config.NewConfig()
	url := fmt.Sprintf("%s/api/v1/products", cfg.BackendUrl)

	// NewProduct 構造体をJSONに変換
	requestBody, err := json.Marshal(input)
	if err != nil {
		fmt.Println("JSON変換エラー:", err)
		return nil, err
	}

	// POSTリクエストの作成
	resp, err := http.Post(url, "application/json", bytes.NewBuffer(requestBody))
	if err != nil {
		fmt.Println("POSTリクエストの送信に失敗しました:", err)
		return nil, err
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return nil, errors.New("Failed to post product data")
	}

	var response struct {
		ID   int    `json:"id"`
		Name string `json:"name"`
	}

	decoder := json.NewDecoder(resp.Body)
	if err := decoder.Decode(&response); err != nil {
		return nil, err
	}

	result := &model.CreateProductResult{
		ID:   strconv.Itoa(response.ID),
		Name: response.Name,
	}

	return result, nil
}
