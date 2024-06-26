package iosys_crawl_setting_exclude_products

type IIosysCrawlSettingExcludeProductService interface {
	IFindIosysCrawlSettingExcludeProductService
	ICreateIosysCrawlSettingExcludeProductService
	IUpdateIosysCrawlSettingExcludeProductService
	IDeleteIosysCrawlSettingExcludeProductService
}

type IosysCrawlSettingExcludeProductService struct {
	*FindIosysCrawlSettingExcludeProductService
	*CreateIosysCrawlSettingExcludeProductService
	*UpdateIosysCrawlSettingExcludeProductService
	*DeleteIosysCrawlSettingExcludeProductService
}
