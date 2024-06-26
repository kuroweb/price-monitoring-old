package pc_koubou_crawl_setting_exclude_keywords

type IPcKoubouCrawlSettingExcludeKeywordService interface {
	IFindPcKoubouCrawlSettingExcludeKeywordService
	ICreatePcKoubouCrawlSettingExcludeKeywordService
	IUpdatePcKoubouCrawlSettingExcludeKeywordService
	IDeletePcKoubouCrawlSettingExcludeKeywordService
}

type PcKoubouCrawlSettingExcludeKeywordService struct {
	*FindPcKoubouCrawlSettingExcludeKeywordService
	*CreatePcKoubouCrawlSettingExcludeKeywordService
	*UpdatePcKoubouCrawlSettingExcludeKeywordService
	*DeletePcKoubouCrawlSettingExcludeKeywordService
}
