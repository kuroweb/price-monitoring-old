package janpara_crawl_setting_exclude_products

type IJanparaCrawlSettingExcludeProductService interface {
	IFindJanparaCrawlSettingExcludeProductService
	ICreateJanparaCrawlSettingExcludeProductService
	IUpdateJanparaCrawlSettingExcludeProductService
	IDeleteJanparaCrawlSettingExcludeProductService
}

type JanparaCrawlSettingExcludeProductService struct {
	*FindJanparaCrawlSettingExcludeProductService
	*CreateJanparaCrawlSettingExcludeProductService
	*UpdateJanparaCrawlSettingExcludeProductService
	*DeleteJanparaCrawlSettingExcludeProductService
}
