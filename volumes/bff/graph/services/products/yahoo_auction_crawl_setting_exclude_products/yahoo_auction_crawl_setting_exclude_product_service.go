package yahoo_auction_crawl_setting_exclude_products

type IYahooAuctionCrawlSettingExcludeProductService interface {
	IFindYahooAuctionCrawlSettingExcludeProductService
	ICreateYahooAuctionCrawlSettingExcludeProductService
	IUpdateYahooAuctionCrawlSettingExcludeProductService
	IDeleteYahooAuctionCrawlSettingExcludeProductService
}

type YahooAuctionCrawlSettingExcludeProductService struct {
	*FindYahooAuctionCrawlSettingExcludeProductService
	*CreateYahooAuctionCrawlSettingExcludeProductService
	*UpdateYahooAuctionCrawlSettingExcludeProductService
	*DeleteYahooAuctionCrawlSettingExcludeProductService
}
