import { GraphQLClient, RequestOptions } from 'graphql-request'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders']
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type CreateIosysCrawlSettingExcludeKeywordInput = {
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type CreateIosysCrawlSettingExcludeKeywordResult =
  | CreateIosysCrawlSettingExcludeKeywordResultError
  | CreateIosysCrawlSettingExcludeKeywordResultSuccess

export type CreateIosysCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'CreateIosysCrawlSettingExcludeKeywordResultError'
  error: CreateIosysCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreateIosysCrawlSettingExcludeKeywordResultErrors =
  CreateIosysCrawlSettingExcludeKeywordResultValidationFailed

export type CreateIosysCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'CreateIosysCrawlSettingExcludeKeywordResultSuccess'
  iosysCrawlSettingExcludeKeyword: IosysCrawlSettingExcludeKeyword
  ok: Scalars['Boolean']['output']
}

export type CreateIosysCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'CreateIosysCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreateIosysCrawlSettingExcludeProductInput = {
  externalId: Scalars['String']['input']
  productId: Scalars['ID']['input']
}

export type CreateIosysCrawlSettingExcludeProductResult =
  | CreateIosysCrawlSettingExcludeProductResultError
  | CreateIosysCrawlSettingExcludeProductResultSuccess

export type CreateIosysCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'CreateIosysCrawlSettingExcludeProductResultError'
  error: CreateIosysCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreateIosysCrawlSettingExcludeProductResultErrors =
  CreateIosysCrawlSettingExcludeProductResultValidationFailed

export type CreateIosysCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'CreateIosysCrawlSettingExcludeProductResultSuccess'
  iosysCrawlSettingExcludeProduct: IosysCrawlSettingExcludeProduct
  ok: Scalars['Boolean']['output']
}

export type CreateIosysCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'CreateIosysCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreateIosysCrawlSettingInput = {
  enabled: Scalars['Boolean']['input']
  keyword: Scalars['String']['input']
  max_price: Scalars['Int']['input']
  min_price: Scalars['Int']['input']
}

export type CreateIosysCrawlSettingRequiredKeywordInput = {
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type CreateIosysCrawlSettingRequiredKeywordResult =
  | CreateIosysCrawlSettingRequiredKeywordResultError
  | CreateIosysCrawlSettingRequiredKeywordResultSuccess

export type CreateIosysCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'CreateIosysCrawlSettingRequiredKeywordResultError'
  error: CreateIosysCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreateIosysCrawlSettingRequiredKeywordResultErrors =
  CreateIosysCrawlSettingRequiredKeywordResultValidationFailed

export type CreateIosysCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'CreateIosysCrawlSettingRequiredKeywordResultSuccess'
  iosysCrawlSettingRequiredKeyword: IosysCrawlSettingRequiredKeyword
  ok: Scalars['Boolean']['output']
}

export type CreateIosysCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'CreateIosysCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreateJanparaCrawlSettingExcludeKeywordInput = {
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type CreateJanparaCrawlSettingExcludeKeywordResult =
  | CreateJanparaCrawlSettingExcludeKeywordResultError
  | CreateJanparaCrawlSettingExcludeKeywordResultSuccess

export type CreateJanparaCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'CreateJanparaCrawlSettingExcludeKeywordResultError'
  error: CreateJanparaCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreateJanparaCrawlSettingExcludeKeywordResultErrors =
  CreateJanparaCrawlSettingExcludeKeywordResultValidationFailed

export type CreateJanparaCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'CreateJanparaCrawlSettingExcludeKeywordResultSuccess'
  janparaCrawlSettingExcludeKeyword: JanparaCrawlSettingExcludeKeyword
  ok: Scalars['Boolean']['output']
}

export type CreateJanparaCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'CreateJanparaCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreateJanparaCrawlSettingExcludeProductInput = {
  externalId: Scalars['String']['input']
  productId: Scalars['ID']['input']
}

export type CreateJanparaCrawlSettingExcludeProductResult =
  | CreateJanparaCrawlSettingExcludeProductResultError
  | CreateJanparaCrawlSettingExcludeProductResultSuccess

export type CreateJanparaCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'CreateJanparaCrawlSettingExcludeProductResultError'
  error: CreateJanparaCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreateJanparaCrawlSettingExcludeProductResultErrors =
  CreateJanparaCrawlSettingExcludeProductResultValidationFailed

export type CreateJanparaCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'CreateJanparaCrawlSettingExcludeProductResultSuccess'
  janparaCrawlSettingExcludeProduct: JanparaCrawlSettingExcludeProduct
  ok: Scalars['Boolean']['output']
}

export type CreateJanparaCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'CreateJanparaCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreateJanparaCrawlSettingInput = {
  enabled: Scalars['Boolean']['input']
  keyword: Scalars['String']['input']
  max_price: Scalars['Int']['input']
  min_price: Scalars['Int']['input']
}

export type CreateJanparaCrawlSettingRequiredKeywordInput = {
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type CreateJanparaCrawlSettingRequiredKeywordResult =
  | CreateJanparaCrawlSettingRequiredKeywordResultError
  | CreateJanparaCrawlSettingRequiredKeywordResultSuccess

export type CreateJanparaCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'CreateJanparaCrawlSettingRequiredKeywordResultError'
  error: CreateJanparaCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreateJanparaCrawlSettingRequiredKeywordResultErrors =
  CreateJanparaCrawlSettingRequiredKeywordResultValidationFailed

export type CreateJanparaCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'CreateJanparaCrawlSettingRequiredKeywordResultSuccess'
  janparaCrawlSettingRequiredKeyword: JanparaCrawlSettingRequiredKeyword
  ok: Scalars['Boolean']['output']
}

export type CreateJanparaCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'CreateJanparaCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreateMercariCrawlSettingExcludeKeywordInput = {
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type CreateMercariCrawlSettingExcludeKeywordResult =
  | CreateMercariCrawlSettingExcludeKeywordResultError
  | CreateMercariCrawlSettingExcludeKeywordResultSuccess

export type CreateMercariCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'CreateMercariCrawlSettingExcludeKeywordResultError'
  error: CreateMercariCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreateMercariCrawlSettingExcludeKeywordResultErrors =
  CreateMercariCrawlSettingExcludeKeywordResultValidationFailed

export type CreateMercariCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'CreateMercariCrawlSettingExcludeKeywordResultSuccess'
  mercariCrawlSettingExcludeKeyword: MercariCrawlSettingExcludeKeyword
  ok: Scalars['Boolean']['output']
}

export type CreateMercariCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'CreateMercariCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreateMercariCrawlSettingExcludeProductInput = {
  externalId: Scalars['String']['input']
  productId: Scalars['ID']['input']
}

export type CreateMercariCrawlSettingExcludeProductResult =
  | CreateMercariCrawlSettingExcludeProductResultError
  | CreateMercariCrawlSettingExcludeProductResultSuccess

export type CreateMercariCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'CreateMercariCrawlSettingExcludeProductResultError'
  error: CreateMercariCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreateMercariCrawlSettingExcludeProductResultErrors =
  CreateMercariCrawlSettingExcludeProductResultValidationFailed

export type CreateMercariCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'CreateMercariCrawlSettingExcludeProductResultSuccess'
  mercariCrawlSettingExcludeProduct: MercariCrawlSettingExcludeProduct
  ok: Scalars['Boolean']['output']
}

export type CreateMercariCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'CreateMercariCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreateMercariCrawlSettingInput = {
  category_id?: InputMaybe<Scalars['Int']['input']>
  enabled: Scalars['Boolean']['input']
  keyword: Scalars['String']['input']
  max_price: Scalars['Int']['input']
  min_price: Scalars['Int']['input']
}

export type CreateMercariCrawlSettingRequiredKeywordInput = {
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type CreateMercariCrawlSettingRequiredKeywordResult =
  | CreateMercariCrawlSettingRequiredKeywordResultError
  | CreateMercariCrawlSettingRequiredKeywordResultSuccess

export type CreateMercariCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'CreateMercariCrawlSettingRequiredKeywordResultError'
  error: CreateMercariCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreateMercariCrawlSettingRequiredKeywordResultErrors =
  CreateMercariCrawlSettingRequiredKeywordResultValidationFailed

export type CreateMercariCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'CreateMercariCrawlSettingRequiredKeywordResultSuccess'
  mercariCrawlSettingRequiredKeyword: MercariCrawlSettingRequiredKeyword
  ok: Scalars['Boolean']['output']
}

export type CreateMercariCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'CreateMercariCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreatePcKoubouCrawlSettingExcludeKeywordInput = {
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type CreatePcKoubouCrawlSettingExcludeKeywordResult =
  | CreatePcKoubouCrawlSettingExcludeKeywordResultError
  | CreatePcKoubouCrawlSettingExcludeKeywordResultSuccess

export type CreatePcKoubouCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'CreatePcKoubouCrawlSettingExcludeKeywordResultError'
  error: CreatePcKoubouCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreatePcKoubouCrawlSettingExcludeKeywordResultErrors =
  CreatePcKoubouCrawlSettingExcludeKeywordResultValidationFailed

export type CreatePcKoubouCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'CreatePcKoubouCrawlSettingExcludeKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
  pcKoubouCrawlSettingExcludeKeyword: PcKoubouCrawlSettingExcludeKeyword
}

export type CreatePcKoubouCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'CreatePcKoubouCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreatePcKoubouCrawlSettingExcludeProductInput = {
  externalId: Scalars['String']['input']
  productId: Scalars['ID']['input']
}

export type CreatePcKoubouCrawlSettingExcludeProductResult =
  | CreatePcKoubouCrawlSettingExcludeProductResultError
  | CreatePcKoubouCrawlSettingExcludeProductResultSuccess

export type CreatePcKoubouCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'CreatePcKoubouCrawlSettingExcludeProductResultError'
  error: CreatePcKoubouCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreatePcKoubouCrawlSettingExcludeProductResultErrors =
  CreatePcKoubouCrawlSettingExcludeProductResultValidationFailed

export type CreatePcKoubouCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'CreatePcKoubouCrawlSettingExcludeProductResultSuccess'
  ok: Scalars['Boolean']['output']
  pcKoubouCrawlSettingExcludeProduct: PcKoubouCrawlSettingExcludeProduct
}

export type CreatePcKoubouCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'CreatePcKoubouCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreatePcKoubouCrawlSettingInput = {
  enabled: Scalars['Boolean']['input']
  keyword: Scalars['String']['input']
  max_price: Scalars['Int']['input']
  min_price: Scalars['Int']['input']
}

export type CreatePcKoubouCrawlSettingRequiredKeywordInput = {
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type CreatePcKoubouCrawlSettingRequiredKeywordResult =
  | CreatePcKoubouCrawlSettingRequiredKeywordResultError
  | CreatePcKoubouCrawlSettingRequiredKeywordResultSuccess

export type CreatePcKoubouCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'CreatePcKoubouCrawlSettingRequiredKeywordResultError'
  error: CreatePcKoubouCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreatePcKoubouCrawlSettingRequiredKeywordResultErrors =
  CreatePcKoubouCrawlSettingRequiredKeywordResultValidationFailed

export type CreatePcKoubouCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'CreatePcKoubouCrawlSettingRequiredKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
  pcKoubouCrawlSettingRequiredKeyword: PcKoubouCrawlSettingRequiredKeyword
}

export type CreatePcKoubouCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'CreatePcKoubouCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreateProductInput = {
  iosys_crawl_setting: CreateIosysCrawlSettingInput
  janpara_crawl_setting: CreateJanparaCrawlSettingInput
  mercari_crawl_setting: CreateMercariCrawlSettingInput
  name: Scalars['String']['input']
  pc_koubou_crawl_setting: CreatePcKoubouCrawlSettingInput
  used_sofmap_crawl_setting: CreateUsedSofmapCrawlSettingInput
  yahoo_auction_crawl_setting: CreateYahooAuctionCrawlSettingInput
}

export type CreateProductResult = CreateProductResultError | CreateProductResultSuccess

export type CreateProductResultError = ResultBase & {
  __typename?: 'CreateProductResultError'
  error: CreateProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreateProductResultErrors = CreateProductResultValidationFailed

export type CreateProductResultSuccess = ResultBase & {
  __typename?: 'CreateProductResultSuccess'
  ok: Scalars['Boolean']['output']
  product: Product
}

export type CreateProductResultValidationFailed = UserError & {
  __typename?: 'CreateProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreateUsedSofmapCrawlSettingExcludeKeywordInput = {
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type CreateUsedSofmapCrawlSettingExcludeKeywordResult =
  | CreateUsedSofmapCrawlSettingExcludeKeywordResultError
  | CreateUsedSofmapCrawlSettingExcludeKeywordResultSuccess

export type CreateUsedSofmapCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'CreateUsedSofmapCrawlSettingExcludeKeywordResultError'
  error: CreateUsedSofmapCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreateUsedSofmapCrawlSettingExcludeKeywordResultErrors =
  CreateUsedSofmapCrawlSettingExcludeKeywordResultValidationFailed

export type CreateUsedSofmapCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'CreateUsedSofmapCrawlSettingExcludeKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
  usedSofmapCrawlSettingExcludeKeyword: UsedSofmapCrawlSettingExcludeKeyword
}

export type CreateUsedSofmapCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'CreateUsedSofmapCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreateUsedSofmapCrawlSettingExcludeProductInput = {
  externalId: Scalars['String']['input']
  productId: Scalars['ID']['input']
}

export type CreateUsedSofmapCrawlSettingExcludeProductResult =
  | CreateUsedSofmapCrawlSettingExcludeProductResultError
  | CreateUsedSofmapCrawlSettingExcludeProductResultSuccess

export type CreateUsedSofmapCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'CreateUsedSofmapCrawlSettingExcludeProductResultError'
  error: CreateUsedSofmapCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreateUsedSofmapCrawlSettingExcludeProductResultErrors =
  CreateUsedSofmapCrawlSettingExcludeProductResultValidationFailed

export type CreateUsedSofmapCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'CreateUsedSofmapCrawlSettingExcludeProductResultSuccess'
  ok: Scalars['Boolean']['output']
  usedSofmapCrawlSettingExcludeProduct: UsedSofmapCrawlSettingExcludeProduct
}

export type CreateUsedSofmapCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'CreateUsedSofmapCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreateUsedSofmapCrawlSettingInput = {
  enabled: Scalars['Boolean']['input']
  keyword: Scalars['String']['input']
  max_price: Scalars['Int']['input']
  min_price: Scalars['Int']['input']
}

export type CreateUsedSofmapCrawlSettingRequiredKeywordInput = {
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type CreateUsedSofmapCrawlSettingRequiredKeywordResult =
  | CreateUsedSofmapCrawlSettingRequiredKeywordResultError
  | CreateUsedSofmapCrawlSettingRequiredKeywordResultSuccess

export type CreateUsedSofmapCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'CreateUsedSofmapCrawlSettingRequiredKeywordResultError'
  error: CreateUsedSofmapCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreateUsedSofmapCrawlSettingRequiredKeywordResultErrors =
  CreateUsedSofmapCrawlSettingRequiredKeywordResultValidationFailed

export type CreateUsedSofmapCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'CreateUsedSofmapCrawlSettingRequiredKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
  usedSofmapCrawlSettingRequiredKeyword: UsedSofmapCrawlSettingRequiredKeyword
}

export type CreateUsedSofmapCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'CreateUsedSofmapCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreateYahooAuctionCrawlSettingExcludeKeywordInput = {
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type CreateYahooAuctionCrawlSettingExcludeKeywordResult =
  | CreateYahooAuctionCrawlSettingExcludeKeywordResultError
  | CreateYahooAuctionCrawlSettingExcludeKeywordResultSuccess

export type CreateYahooAuctionCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'CreateYahooAuctionCrawlSettingExcludeKeywordResultError'
  error: CreateYahooAuctionCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreateYahooAuctionCrawlSettingExcludeKeywordResultErrors =
  CreateYahooAuctionCrawlSettingExcludeKeywordResultValidationFailed

export type CreateYahooAuctionCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'CreateYahooAuctionCrawlSettingExcludeKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
  yahooAuctionCrawlSettingExcludeKeyword: YahooAuctionCrawlSettingExcludeKeyword
}

export type CreateYahooAuctionCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'CreateYahooAuctionCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreateYahooAuctionCrawlSettingExcludeProductInput = {
  externalId: Scalars['String']['input']
  productId: Scalars['ID']['input']
}

export type CreateYahooAuctionCrawlSettingExcludeProductResult =
  | CreateYahooAuctionCrawlSettingExcludeProductResultError
  | CreateYahooAuctionCrawlSettingExcludeProductResultSuccess

export type CreateYahooAuctionCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'CreateYahooAuctionCrawlSettingExcludeProductResultError'
  error: CreateYahooAuctionCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreateYahooAuctionCrawlSettingExcludeProductResultErrors =
  CreateYahooAuctionCrawlSettingExcludeProductResultValidationFailed

export type CreateYahooAuctionCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'CreateYahooAuctionCrawlSettingExcludeProductResultSuccess'
  ok: Scalars['Boolean']['output']
  yahooAuctionCrawlSettingExcludeProduct: YahooAuctionCrawlSettingExcludeProduct
}

export type CreateYahooAuctionCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'CreateYahooAuctionCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type CreateYahooAuctionCrawlSettingInput = {
  category_id?: InputMaybe<Scalars['Int']['input']>
  enabled: Scalars['Boolean']['input']
  keyword: Scalars['String']['input']
  max_price: Scalars['Int']['input']
  min_price: Scalars['Int']['input']
}

export type CreateYahooAuctionCrawlSettingRequiredKeywordInput = {
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type CreateYahooAuctionCrawlSettingRequiredKeywordResult =
  | CreateYahooAuctionCrawlSettingRequiredKeywordResultError
  | CreateYahooAuctionCrawlSettingRequiredKeywordResultSuccess

export type CreateYahooAuctionCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'CreateYahooAuctionCrawlSettingRequiredKeywordResultError'
  error: CreateYahooAuctionCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type CreateYahooAuctionCrawlSettingRequiredKeywordResultErrors =
  CreateYahooAuctionCrawlSettingRequiredKeywordResultValidationFailed

export type CreateYahooAuctionCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'CreateYahooAuctionCrawlSettingRequiredKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
  yahooAuctionCrawlSettingRequiredKeyword: YahooAuctionCrawlSettingRequiredKeyword
}

export type CreateYahooAuctionCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'CreateYahooAuctionCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeleteIosysCrawlSettingExcludeKeywordResult =
  | DeleteIosysCrawlSettingExcludeKeywordResultError
  | DeleteIosysCrawlSettingExcludeKeywordResultSuccess

export type DeleteIosysCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'DeleteIosysCrawlSettingExcludeKeywordResultError'
  error: DeleteIosysCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeleteIosysCrawlSettingExcludeKeywordResultErrors =
  DeleteIosysCrawlSettingExcludeKeywordResultValidationFailed

export type DeleteIosysCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'DeleteIosysCrawlSettingExcludeKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeleteIosysCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'DeleteIosysCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeleteIosysCrawlSettingExcludeProductResult =
  | DeleteIosysCrawlSettingExcludeProductResultError
  | DeleteIosysCrawlSettingExcludeProductResultSuccess

export type DeleteIosysCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'DeleteIosysCrawlSettingExcludeProductResultError'
  error: DeleteIosysCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeleteIosysCrawlSettingExcludeProductResultErrors =
  DeleteIosysCrawlSettingExcludeProductResultValidationFailed

export type DeleteIosysCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'DeleteIosysCrawlSettingExcludeProductResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeleteIosysCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'DeleteIosysCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeleteIosysCrawlSettingRequiredKeywordResult =
  | DeleteIosysCrawlSettingRequiredKeywordResultError
  | DeleteIosysCrawlSettingRequiredKeywordResultSuccess

export type DeleteIosysCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'DeleteIosysCrawlSettingRequiredKeywordResultError'
  error: DeleteIosysCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeleteIosysCrawlSettingRequiredKeywordResultErrors =
  DeleteIosysCrawlSettingRequiredKeywordResultValidationFailed

export type DeleteIosysCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'DeleteIosysCrawlSettingRequiredKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeleteIosysCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'DeleteIosysCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeleteJanparaCrawlSettingExcludeKeywordResult =
  | DeleteJanparaCrawlSettingExcludeKeywordResultError
  | DeleteJanparaCrawlSettingExcludeKeywordResultSuccess

export type DeleteJanparaCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'DeleteJanparaCrawlSettingExcludeKeywordResultError'
  error: DeleteJanparaCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeleteJanparaCrawlSettingExcludeKeywordResultErrors =
  DeleteJanparaCrawlSettingExcludeKeywordResultValidationFailed

export type DeleteJanparaCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'DeleteJanparaCrawlSettingExcludeKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeleteJanparaCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'DeleteJanparaCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeleteJanparaCrawlSettingExcludeProductResult =
  | DeleteJanparaCrawlSettingExcludeProductResultError
  | DeleteJanparaCrawlSettingExcludeProductResultSuccess

export type DeleteJanparaCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'DeleteJanparaCrawlSettingExcludeProductResultError'
  error: DeleteJanparaCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeleteJanparaCrawlSettingExcludeProductResultErrors =
  DeleteJanparaCrawlSettingExcludeProductResultValidationFailed

export type DeleteJanparaCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'DeleteJanparaCrawlSettingExcludeProductResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeleteJanparaCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'DeleteJanparaCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeleteJanparaCrawlSettingRequiredKeywordResult =
  | DeleteJanparaCrawlSettingRequiredKeywordResultError
  | DeleteJanparaCrawlSettingRequiredKeywordResultSuccess

export type DeleteJanparaCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'DeleteJanparaCrawlSettingRequiredKeywordResultError'
  error: DeleteJanparaCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeleteJanparaCrawlSettingRequiredKeywordResultErrors =
  DeleteJanparaCrawlSettingRequiredKeywordResultValidationFailed

export type DeleteJanparaCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'DeleteJanparaCrawlSettingRequiredKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeleteJanparaCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'DeleteJanparaCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeleteMercariCrawlSettingExcludeKeywordResult =
  | DeleteMercariCrawlSettingExcludeKeywordResultError
  | DeleteMercariCrawlSettingExcludeKeywordResultSuccess

export type DeleteMercariCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'DeleteMercariCrawlSettingExcludeKeywordResultError'
  error: DeleteMercariCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeleteMercariCrawlSettingExcludeKeywordResultErrors =
  DeleteMercariCrawlSettingExcludeKeywordResultValidationFailed

export type DeleteMercariCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'DeleteMercariCrawlSettingExcludeKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeleteMercariCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'DeleteMercariCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeleteMercariCrawlSettingExcludeProductResult =
  | DeleteMercariCrawlSettingExcludeProductResultError
  | DeleteMercariCrawlSettingExcludeProductResultSuccess

export type DeleteMercariCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'DeleteMercariCrawlSettingExcludeProductResultError'
  error: DeleteMercariCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeleteMercariCrawlSettingExcludeProductResultErrors =
  DeleteMercariCrawlSettingExcludeProductResultValidationFailed

export type DeleteMercariCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'DeleteMercariCrawlSettingExcludeProductResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeleteMercariCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'DeleteMercariCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeleteMercariCrawlSettingRequiredKeywordResult =
  | DeleteMercariCrawlSettingRequiredKeywordResultError
  | DeleteMercariCrawlSettingRequiredKeywordResultSuccess

export type DeleteMercariCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'DeleteMercariCrawlSettingRequiredKeywordResultError'
  error: DeleteMercariCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeleteMercariCrawlSettingRequiredKeywordResultErrors =
  DeleteMercariCrawlSettingRequiredKeywordResultValidationFailed

export type DeleteMercariCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'DeleteMercariCrawlSettingRequiredKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeleteMercariCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'DeleteMercariCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeletePcKoubouCrawlSettingExcludeKeywordResult =
  | DeletePcKoubouCrawlSettingExcludeKeywordResultError
  | DeletePcKoubouCrawlSettingExcludeKeywordResultSuccess

export type DeletePcKoubouCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'DeletePcKoubouCrawlSettingExcludeKeywordResultError'
  error: DeletePcKoubouCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeletePcKoubouCrawlSettingExcludeKeywordResultErrors =
  DeletePcKoubouCrawlSettingExcludeKeywordResultValidationFailed

export type DeletePcKoubouCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'DeletePcKoubouCrawlSettingExcludeKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeletePcKoubouCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'DeletePcKoubouCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeletePcKoubouCrawlSettingExcludeProductResult =
  | DeletePcKoubouCrawlSettingExcludeProductResultError
  | DeletePcKoubouCrawlSettingExcludeProductResultSuccess

export type DeletePcKoubouCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'DeletePcKoubouCrawlSettingExcludeProductResultError'
  error: DeletePcKoubouCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeletePcKoubouCrawlSettingExcludeProductResultErrors =
  DeletePcKoubouCrawlSettingExcludeProductResultValidationFailed

export type DeletePcKoubouCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'DeletePcKoubouCrawlSettingExcludeProductResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeletePcKoubouCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'DeletePcKoubouCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeletePcKoubouCrawlSettingRequiredKeywordResult =
  | DeletePcKoubouCrawlSettingRequiredKeywordResultError
  | DeletePcKoubouCrawlSettingRequiredKeywordResultSuccess

export type DeletePcKoubouCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'DeletePcKoubouCrawlSettingRequiredKeywordResultError'
  error: DeletePcKoubouCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeletePcKoubouCrawlSettingRequiredKeywordResultErrors =
  DeletePcKoubouCrawlSettingRequiredKeywordResultValidationFailed

export type DeletePcKoubouCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'DeletePcKoubouCrawlSettingRequiredKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeletePcKoubouCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'DeletePcKoubouCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeleteProductResult = DeleteProductResultError | DeleteProductResultSuccess

export type DeleteProductResultError = ResultBase & {
  __typename?: 'DeleteProductResultError'
  error: DeleteProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeleteProductResultErrors = DeleteProductResultValidationFailed

export type DeleteProductResultSuccess = ResultBase & {
  __typename?: 'DeleteProductResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeleteProductResultValidationFailed = UserError & {
  __typename?: 'DeleteProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeleteUsedSofmapCrawlSettingExcludeKeywordResult =
  | DeleteUsedSofmapCrawlSettingExcludeKeywordResultError
  | DeleteUsedSofmapCrawlSettingExcludeKeywordResultSuccess

export type DeleteUsedSofmapCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'DeleteUsedSofmapCrawlSettingExcludeKeywordResultError'
  error: DeleteUsedSofmapCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeleteUsedSofmapCrawlSettingExcludeKeywordResultErrors =
  DeleteUsedSofmapCrawlSettingExcludeKeywordResultValidationFailed

export type DeleteUsedSofmapCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'DeleteUsedSofmapCrawlSettingExcludeKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeleteUsedSofmapCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'DeleteUsedSofmapCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeleteUsedSofmapCrawlSettingExcludeProductResult =
  | DeleteUsedSofmapCrawlSettingExcludeProductResultError
  | DeleteUsedSofmapCrawlSettingExcludeProductResultSuccess

export type DeleteUsedSofmapCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'DeleteUsedSofmapCrawlSettingExcludeProductResultError'
  error: DeleteUsedSofmapCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeleteUsedSofmapCrawlSettingExcludeProductResultErrors =
  DeleteUsedSofmapCrawlSettingExcludeProductResultValidationFailed

export type DeleteUsedSofmapCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'DeleteUsedSofmapCrawlSettingExcludeProductResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeleteUsedSofmapCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'DeleteUsedSofmapCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeleteUsedSofmapCrawlSettingRequiredKeywordResult =
  | DeleteUsedSofmapCrawlSettingRequiredKeywordResultError
  | DeleteUsedSofmapCrawlSettingRequiredKeywordResultSuccess

export type DeleteUsedSofmapCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'DeleteUsedSofmapCrawlSettingRequiredKeywordResultError'
  error: DeleteUsedSofmapCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeleteUsedSofmapCrawlSettingRequiredKeywordResultErrors =
  DeleteUsedSofmapCrawlSettingRequiredKeywordResultValidationFailed

export type DeleteUsedSofmapCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'DeleteUsedSofmapCrawlSettingRequiredKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeleteUsedSofmapCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'DeleteUsedSofmapCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeleteYahooAuctionCrawlSettingExcludeKeywordResult =
  | DeleteYahooAuctionCrawlSettingExcludeKeywordResultError
  | DeleteYahooAuctionCrawlSettingExcludeKeywordResultSuccess

export type DeleteYahooAuctionCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'DeleteYahooAuctionCrawlSettingExcludeKeywordResultError'
  error: DeleteYahooAuctionCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeleteYahooAuctionCrawlSettingExcludeKeywordResultErrors =
  DeleteYahooAuctionCrawlSettingExcludeKeywordResultValidationFailed

export type DeleteYahooAuctionCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'DeleteYahooAuctionCrawlSettingExcludeKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeleteYahooAuctionCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'DeleteYahooAuctionCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeleteYahooAuctionCrawlSettingExcludeProductResult =
  | DeleteYahooAuctionCrawlSettingExcludeProductResultError
  | DeleteYahooAuctionCrawlSettingExcludeProductResultSuccess

export type DeleteYahooAuctionCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'DeleteYahooAuctionCrawlSettingExcludeProductResultError'
  error: DeleteYahooAuctionCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeleteYahooAuctionCrawlSettingExcludeProductResultErrors =
  DeleteYahooAuctionCrawlSettingExcludeProductResultValidationFailed

export type DeleteYahooAuctionCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'DeleteYahooAuctionCrawlSettingExcludeProductResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeleteYahooAuctionCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'DeleteYahooAuctionCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type DeleteYahooAuctionCrawlSettingRequiredKeywordResult =
  | DeleteYahooAuctionCrawlSettingRequiredKeywordResultError
  | DeleteYahooAuctionCrawlSettingRequiredKeywordResultSuccess

export type DeleteYahooAuctionCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'DeleteYahooAuctionCrawlSettingRequiredKeywordResultError'
  error: DeleteYahooAuctionCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type DeleteYahooAuctionCrawlSettingRequiredKeywordResultErrors =
  DeleteYahooAuctionCrawlSettingRequiredKeywordResultValidationFailed

export type DeleteYahooAuctionCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'DeleteYahooAuctionCrawlSettingRequiredKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
}

export type DeleteYahooAuctionCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'DeleteYahooAuctionCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type ErrorDetail = {
  __typename?: 'ErrorDetail'
  field: Scalars['String']['output']
  message: Scalars['String']['output']
}

export type IosysCrawlSetting = Node & {
  __typename?: 'IosysCrawlSetting'
  createdAt: Scalars['String']['output']
  enabled: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  iosysCrawlSettingExcludeKeywords: Array<IosysCrawlSettingExcludeKeyword>
  iosysCrawlSettingExcludeProducts: Array<IosysCrawlSettingExcludeProduct>
  iosysCrawlSettingRequiredKeywords: Array<IosysCrawlSettingRequiredKeyword>
  keyword: Scalars['String']['output']
  maxPrice: Scalars['Int']['output']
  minPrice: Scalars['Int']['output']
  productId: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
}

export type IosysCrawlSettingExcludeKeyword = Node & {
  __typename?: 'IosysCrawlSettingExcludeKeyword'
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  iosysCrawlSettingId: Scalars['Int']['output']
  keyword?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['String']['output']
}

export type IosysCrawlSettingExcludeProduct = Node & {
  __typename?: 'IosysCrawlSettingExcludeProduct'
  createdAt: Scalars['String']['output']
  externalId: Scalars['String']['output']
  id: Scalars['ID']['output']
  iosysCrawlSettingId: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
}

export type IosysCrawlSettingRequiredKeyword = Node & {
  __typename?: 'IosysCrawlSettingRequiredKeyword'
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  iosysCrawlSettingId: Scalars['Int']['output']
  keyword?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['String']['output']
}

export type JanparaCrawlSetting = Node & {
  __typename?: 'JanparaCrawlSetting'
  createdAt: Scalars['String']['output']
  enabled: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  janparaCrawlSettingExcludeKeywords: Array<JanparaCrawlSettingExcludeKeyword>
  janparaCrawlSettingExcludeProducts: Array<JanparaCrawlSettingExcludeProduct>
  janparaCrawlSettingRequiredKeywords: Array<JanparaCrawlSettingRequiredKeyword>
  keyword: Scalars['String']['output']
  maxPrice: Scalars['Int']['output']
  minPrice: Scalars['Int']['output']
  productId: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
}

export type JanparaCrawlSettingExcludeKeyword = Node & {
  __typename?: 'JanparaCrawlSettingExcludeKeyword'
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  janparaCrawlSettingId: Scalars['Int']['output']
  keyword?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['String']['output']
}

export type JanparaCrawlSettingExcludeProduct = Node & {
  __typename?: 'JanparaCrawlSettingExcludeProduct'
  createdAt: Scalars['String']['output']
  externalId: Scalars['String']['output']
  id: Scalars['ID']['output']
  janparaCrawlSettingId: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
}

export type JanparaCrawlSettingRequiredKeyword = Node & {
  __typename?: 'JanparaCrawlSettingRequiredKeyword'
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  janparaCrawlSettingId: Scalars['Int']['output']
  keyword?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['String']['output']
}

export type MercariCrawlSetting = Node & {
  __typename?: 'MercariCrawlSetting'
  categoryId?: Maybe<Scalars['Int']['output']>
  createdAt: Scalars['String']['output']
  enabled: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  keyword: Scalars['String']['output']
  maxPrice: Scalars['Int']['output']
  mercariCrawlSettingExcludeKeywords: Array<MercariCrawlSettingExcludeKeyword>
  mercariCrawlSettingExcludeProducts: Array<MercariCrawlSettingExcludeProduct>
  mercariCrawlSettingRequiredKeywords: Array<MercariCrawlSettingRequiredKeyword>
  minPrice: Scalars['Int']['output']
  productId: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
}

export type MercariCrawlSettingExcludeKeyword = Node & {
  __typename?: 'MercariCrawlSettingExcludeKeyword'
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  keyword?: Maybe<Scalars['String']['output']>
  mercariCrawlSettingId: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
}

export type MercariCrawlSettingExcludeProduct = Node & {
  __typename?: 'MercariCrawlSettingExcludeProduct'
  createdAt: Scalars['String']['output']
  externalId: Scalars['String']['output']
  id: Scalars['ID']['output']
  mercariCrawlSettingId: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
}

export type MercariCrawlSettingRequiredKeyword = Node & {
  __typename?: 'MercariCrawlSettingRequiredKeyword'
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  keyword?: Maybe<Scalars['String']['output']>
  mercariCrawlSettingId: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
}

export type MercariDailyPurchaseSummary = Node & {
  __typename?: 'MercariDailyPurchaseSummary'
  averagePurchasePrice?: Maybe<Scalars['Int']['output']>
  createdAt: Scalars['String']['output']
  date: Scalars['String']['output']
  id: Scalars['ID']['output']
  productId: Scalars['Int']['output']
  purchaseCount: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
}

export type MercariProduct = Node & {
  __typename?: 'MercariProduct'
  boughtDate?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  mercariId: Scalars['String']['output']
  name: Scalars['String']['output']
  price: Scalars['Int']['output']
  productId: Scalars['Int']['output']
  published: Scalars['Boolean']['output']
  thumbnailUrl: Scalars['String']['output']
  updatedAt: Scalars['String']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  createIosysCrawlSettingExcludeKeyword: CreateIosysCrawlSettingExcludeKeywordResult
  createIosysCrawlSettingExcludeProduct: CreateIosysCrawlSettingExcludeProductResult
  createIosysCrawlSettingRequiredKeyword: CreateIosysCrawlSettingRequiredKeywordResult
  createJanparaCrawlSettingExcludeKeyword: CreateJanparaCrawlSettingExcludeKeywordResult
  createJanparaCrawlSettingExcludeProduct: CreateJanparaCrawlSettingExcludeProductResult
  createJanparaCrawlSettingRequiredKeyword: CreateJanparaCrawlSettingRequiredKeywordResult
  createMercariCrawlSettingExcludeKeyword: CreateMercariCrawlSettingExcludeKeywordResult
  createMercariCrawlSettingExcludeProduct: CreateMercariCrawlSettingExcludeProductResult
  createMercariCrawlSettingRequiredKeyword: CreateMercariCrawlSettingRequiredKeywordResult
  createPcKoubouCrawlSettingExcludeKeyword: CreatePcKoubouCrawlSettingExcludeKeywordResult
  createPcKoubouCrawlSettingExcludeProduct: CreatePcKoubouCrawlSettingExcludeProductResult
  createPcKoubouCrawlSettingRequiredKeyword: CreatePcKoubouCrawlSettingRequiredKeywordResult
  createProduct: CreateProductResult
  createUsedSofmapCrawlSettingExcludeKeyword: CreateUsedSofmapCrawlSettingExcludeKeywordResult
  createUsedSofmapCrawlSettingExcludeProduct: CreateUsedSofmapCrawlSettingExcludeProductResult
  createUsedSofmapCrawlSettingRequiredKeyword: CreateUsedSofmapCrawlSettingRequiredKeywordResult
  createYahooAuctionCrawlSettingExcludeKeyword: CreateYahooAuctionCrawlSettingExcludeKeywordResult
  createYahooAuctionCrawlSettingExcludeProduct: CreateYahooAuctionCrawlSettingExcludeProductResult
  createYahooAuctionCrawlSettingRequiredKeyword: CreateYahooAuctionCrawlSettingRequiredKeywordResult
  deleteIosysCrawlSettingExcludeKeyword: DeleteIosysCrawlSettingExcludeKeywordResult
  deleteIosysCrawlSettingExcludeProduct: DeleteIosysCrawlSettingExcludeProductResult
  deleteIosysCrawlSettingRequiredKeyword: DeleteIosysCrawlSettingRequiredKeywordResult
  deleteJanparaCrawlSettingExcludeKeyword: DeleteJanparaCrawlSettingExcludeKeywordResult
  deleteJanparaCrawlSettingExcludeProduct: DeleteJanparaCrawlSettingExcludeProductResult
  deleteJanparaCrawlSettingRequiredKeyword: DeleteJanparaCrawlSettingRequiredKeywordResult
  deleteMercariCrawlSettingExcludeKeyword: DeleteMercariCrawlSettingExcludeKeywordResult
  deleteMercariCrawlSettingExcludeProduct: DeleteMercariCrawlSettingExcludeProductResult
  deleteMercariCrawlSettingRequiredKeyword: DeleteMercariCrawlSettingRequiredKeywordResult
  deletePcKoubouCrawlSettingExcludeKeyword: DeletePcKoubouCrawlSettingExcludeKeywordResult
  deletePcKoubouCrawlSettingExcludeProduct: DeletePcKoubouCrawlSettingExcludeProductResult
  deletePcKoubouCrawlSettingRequiredKeyword: DeletePcKoubouCrawlSettingRequiredKeywordResult
  deleteProduct: DeleteProductResult
  deleteUsedSofmapCrawlSettingExcludeKeyword: DeleteUsedSofmapCrawlSettingExcludeKeywordResult
  deleteUsedSofmapCrawlSettingExcludeProduct: DeleteUsedSofmapCrawlSettingExcludeProductResult
  deleteUsedSofmapCrawlSettingRequiredKeyword: DeleteUsedSofmapCrawlSettingRequiredKeywordResult
  deleteYahooAuctionCrawlSettingExcludeKeyword: DeleteYahooAuctionCrawlSettingExcludeKeywordResult
  deleteYahooAuctionCrawlSettingExcludeProduct: DeleteYahooAuctionCrawlSettingExcludeProductResult
  deleteYahooAuctionCrawlSettingRequiredKeyword: DeleteYahooAuctionCrawlSettingRequiredKeywordResult
  updateIosysCrawlSettingExcludeKeyword: UpdateIosysCrawlSettingExcludeKeywordResult
  updateIosysCrawlSettingExcludeProduct: UpdateIosysCrawlSettingExcludeProductResult
  updateIosysCrawlSettingRequiredKeyword: UpdateIosysCrawlSettingRequiredKeywordResult
  updateJanparaCrawlSettingExcludeKeyword: UpdateJanparaCrawlSettingExcludeKeywordResult
  updateJanparaCrawlSettingExcludeProduct: UpdateJanparaCrawlSettingExcludeProductResult
  updateJanparaCrawlSettingRequiredKeyword: UpdateJanparaCrawlSettingRequiredKeywordResult
  updateMercariCrawlSettingExcludeKeyword: UpdateMercariCrawlSettingExcludeKeywordResult
  updateMercariCrawlSettingExcludeProduct: UpdateMercariCrawlSettingExcludeProductResult
  updateMercariCrawlSettingRequiredKeyword: UpdateMercariCrawlSettingRequiredKeywordResult
  updatePcKoubouCrawlSettingExcludeKeyword: UpdatePcKoubouCrawlSettingExcludeKeywordResult
  updatePcKoubouCrawlSettingExcludeProduct: UpdatePcKoubouCrawlSettingExcludeProductResult
  updatePcKoubouCrawlSettingRequiredKeyword: UpdatePcKoubouCrawlSettingRequiredKeywordResult
  updateProduct: UpdateProductResult
  updateUsedSofmapCrawlSettingExcludeKeyword: UpdateUsedSofmapCrawlSettingExcludeKeywordResult
  updateUsedSofmapCrawlSettingExcludeProduct: UpdateUsedSofmapCrawlSettingExcludeProductResult
  updateUsedSofmapCrawlSettingRequiredKeyword: UpdateUsedSofmapCrawlSettingRequiredKeywordResult
  updateYahooAuctionCrawlSettingExcludeKeyword: UpdateYahooAuctionCrawlSettingExcludeKeywordResult
  updateYahooAuctionCrawlSettingExcludeProduct: UpdateYahooAuctionCrawlSettingExcludeProductResult
  updateYahooAuctionCrawlSettingRequiredKeyword: UpdateYahooAuctionCrawlSettingRequiredKeywordResult
}

export type MutationCreateIosysCrawlSettingExcludeKeywordArgs = {
  input: CreateIosysCrawlSettingExcludeKeywordInput
}

export type MutationCreateIosysCrawlSettingExcludeProductArgs = {
  input: CreateIosysCrawlSettingExcludeProductInput
}

export type MutationCreateIosysCrawlSettingRequiredKeywordArgs = {
  input: CreateIosysCrawlSettingRequiredKeywordInput
}

export type MutationCreateJanparaCrawlSettingExcludeKeywordArgs = {
  input: CreateJanparaCrawlSettingExcludeKeywordInput
}

export type MutationCreateJanparaCrawlSettingExcludeProductArgs = {
  input: CreateJanparaCrawlSettingExcludeProductInput
}

export type MutationCreateJanparaCrawlSettingRequiredKeywordArgs = {
  input: CreateJanparaCrawlSettingRequiredKeywordInput
}

export type MutationCreateMercariCrawlSettingExcludeKeywordArgs = {
  input: CreateMercariCrawlSettingExcludeKeywordInput
}

export type MutationCreateMercariCrawlSettingExcludeProductArgs = {
  input: CreateMercariCrawlSettingExcludeProductInput
}

export type MutationCreateMercariCrawlSettingRequiredKeywordArgs = {
  input: CreateMercariCrawlSettingRequiredKeywordInput
}

export type MutationCreatePcKoubouCrawlSettingExcludeKeywordArgs = {
  input: CreatePcKoubouCrawlSettingExcludeKeywordInput
}

export type MutationCreatePcKoubouCrawlSettingExcludeProductArgs = {
  input: CreatePcKoubouCrawlSettingExcludeProductInput
}

export type MutationCreatePcKoubouCrawlSettingRequiredKeywordArgs = {
  input: CreatePcKoubouCrawlSettingRequiredKeywordInput
}

export type MutationCreateProductArgs = {
  input: CreateProductInput
}

export type MutationCreateUsedSofmapCrawlSettingExcludeKeywordArgs = {
  input: CreateUsedSofmapCrawlSettingExcludeKeywordInput
}

export type MutationCreateUsedSofmapCrawlSettingExcludeProductArgs = {
  input: CreateUsedSofmapCrawlSettingExcludeProductInput
}

export type MutationCreateUsedSofmapCrawlSettingRequiredKeywordArgs = {
  input: CreateUsedSofmapCrawlSettingRequiredKeywordInput
}

export type MutationCreateYahooAuctionCrawlSettingExcludeKeywordArgs = {
  input: CreateYahooAuctionCrawlSettingExcludeKeywordInput
}

export type MutationCreateYahooAuctionCrawlSettingExcludeProductArgs = {
  input: CreateYahooAuctionCrawlSettingExcludeProductInput
}

export type MutationCreateYahooAuctionCrawlSettingRequiredKeywordArgs = {
  input: CreateYahooAuctionCrawlSettingRequiredKeywordInput
}

export type MutationDeleteIosysCrawlSettingExcludeKeywordArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeleteIosysCrawlSettingExcludeProductArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeleteIosysCrawlSettingRequiredKeywordArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeleteJanparaCrawlSettingExcludeKeywordArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeleteJanparaCrawlSettingExcludeProductArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeleteJanparaCrawlSettingRequiredKeywordArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeleteMercariCrawlSettingExcludeKeywordArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeleteMercariCrawlSettingExcludeProductArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeleteMercariCrawlSettingRequiredKeywordArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeletePcKoubouCrawlSettingExcludeKeywordArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeletePcKoubouCrawlSettingExcludeProductArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeletePcKoubouCrawlSettingRequiredKeywordArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input']
}

export type MutationDeleteUsedSofmapCrawlSettingExcludeKeywordArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeleteUsedSofmapCrawlSettingExcludeProductArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeleteUsedSofmapCrawlSettingRequiredKeywordArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeleteYahooAuctionCrawlSettingExcludeKeywordArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeleteYahooAuctionCrawlSettingExcludeProductArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationDeleteYahooAuctionCrawlSettingRequiredKeywordArgs = {
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type MutationUpdateIosysCrawlSettingExcludeKeywordArgs = {
  input: UpdateIosysCrawlSettingExcludeKeywordInput
}

export type MutationUpdateIosysCrawlSettingExcludeProductArgs = {
  input: UpdateIosysCrawlSettingExcludeProductInput
}

export type MutationUpdateIosysCrawlSettingRequiredKeywordArgs = {
  input: UpdateIosysCrawlSettingRequiredKeywordInput
}

export type MutationUpdateJanparaCrawlSettingExcludeKeywordArgs = {
  input: UpdateJanparaCrawlSettingExcludeKeywordInput
}

export type MutationUpdateJanparaCrawlSettingExcludeProductArgs = {
  input: UpdateJanparaCrawlSettingExcludeProductInput
}

export type MutationUpdateJanparaCrawlSettingRequiredKeywordArgs = {
  input: UpdateJanparaCrawlSettingRequiredKeywordInput
}

export type MutationUpdateMercariCrawlSettingExcludeKeywordArgs = {
  input: UpdateMercariCrawlSettingExcludeKeywordInput
}

export type MutationUpdateMercariCrawlSettingExcludeProductArgs = {
  input: UpdateMercariCrawlSettingExcludeProductInput
}

export type MutationUpdateMercariCrawlSettingRequiredKeywordArgs = {
  input: UpdateMercariCrawlSettingRequiredKeywordInput
}

export type MutationUpdatePcKoubouCrawlSettingExcludeKeywordArgs = {
  input: UpdatePcKoubouCrawlSettingExcludeKeywordInput
}

export type MutationUpdatePcKoubouCrawlSettingExcludeProductArgs = {
  input: UpdatePcKoubouCrawlSettingExcludeProductInput
}

export type MutationUpdatePcKoubouCrawlSettingRequiredKeywordArgs = {
  input: UpdatePcKoubouCrawlSettingRequiredKeywordInput
}

export type MutationUpdateProductArgs = {
  id: Scalars['ID']['input']
  input: UpdateProductInput
}

export type MutationUpdateUsedSofmapCrawlSettingExcludeKeywordArgs = {
  input: UpdateUsedSofmapCrawlSettingExcludeKeywordInput
}

export type MutationUpdateUsedSofmapCrawlSettingExcludeProductArgs = {
  input: UpdateUsedSofmapCrawlSettingExcludeProductInput
}

export type MutationUpdateUsedSofmapCrawlSettingRequiredKeywordArgs = {
  input: UpdateUsedSofmapCrawlSettingRequiredKeywordInput
}

export type MutationUpdateYahooAuctionCrawlSettingExcludeKeywordArgs = {
  input: UpdateYahooAuctionCrawlSettingExcludeKeywordInput
}

export type MutationUpdateYahooAuctionCrawlSettingExcludeProductArgs = {
  input: UpdateYahooAuctionCrawlSettingExcludeProductInput
}

export type MutationUpdateYahooAuctionCrawlSettingRequiredKeywordArgs = {
  input: UpdateYahooAuctionCrawlSettingRequiredKeywordInput
}

export type Node = {
  id: Scalars['ID']['output']
}

export type PcKoubouCrawlSetting = Node & {
  __typename?: 'PcKoubouCrawlSetting'
  createdAt: Scalars['String']['output']
  enabled: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  keyword: Scalars['String']['output']
  maxPrice: Scalars['Int']['output']
  minPrice: Scalars['Int']['output']
  pcKoubouCrawlSettingExcludeKeywords: Array<PcKoubouCrawlSettingExcludeKeyword>
  pcKoubouCrawlSettingExcludeProducts: Array<PcKoubouCrawlSettingExcludeProduct>
  pcKoubouCrawlSettingRequiredKeywords: Array<PcKoubouCrawlSettingRequiredKeyword>
  productId: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
}

export type PcKoubouCrawlSettingExcludeKeyword = Node & {
  __typename?: 'PcKoubouCrawlSettingExcludeKeyword'
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  keyword?: Maybe<Scalars['String']['output']>
  pcKoubouCrawlSettingId: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
}

export type PcKoubouCrawlSettingExcludeProduct = Node & {
  __typename?: 'PcKoubouCrawlSettingExcludeProduct'
  createdAt: Scalars['String']['output']
  externalId: Scalars['String']['output']
  id: Scalars['ID']['output']
  pcKoubouCrawlSettingId: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
}

export type PcKoubouCrawlSettingRequiredKeyword = Node & {
  __typename?: 'PcKoubouCrawlSettingRequiredKeyword'
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  keyword?: Maybe<Scalars['String']['output']>
  pcKoubouCrawlSettingId: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
}

export type Product = Node & {
  __typename?: 'Product'
  id: Scalars['ID']['output']
  iosysCrawlSetting: IosysCrawlSetting
  janparaCrawlSetting: JanparaCrawlSetting
  mercariCrawlSetting: MercariCrawlSetting
  mercariDailyPurchaseSummaries: Array<MercariDailyPurchaseSummary>
  mercariProducts: Array<MercariProduct>
  name: Scalars['String']['output']
  pcKoubouCrawlSetting: PcKoubouCrawlSetting
  relatedProducts: Array<RelatedProduct>
  usedSofmapCrawlSetting: UsedSofmapCrawlSetting
  yahooAuctionCrawlSetting: YahooAuctionCrawlSetting
  yahooAuctionDailyPurchaseSummaries: Array<YahooAuctionDailyPurchaseSummary>
  yahooAuctionProducts: Array<YahooAuctionProduct>
  yahooFleamarketDailyPurchaseSummaries: Array<YahooFleamarketDailyPurchaseSummary>
}

export type ProductMercariProductsArgs = {
  order?: InputMaybe<Scalars['String']['input']>
  published?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

export type ProductRelatedProductsArgs = {
  order?: InputMaybe<Scalars['String']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  per?: InputMaybe<Scalars['Int']['input']>
  platformMask: Scalars['String']['input']
  sort?: InputMaybe<Scalars['String']['input']>
}

export type ProductYahooAuctionProductsArgs = {
  order?: InputMaybe<Scalars['String']['input']>
  published?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}

export type Query = {
  __typename?: 'Query'
  node?: Maybe<Node>
  product: Product
  products: Array<Product>
}

export type QueryNodeArgs = {
  id: Scalars['ID']['input']
}

export type QueryProductArgs = {
  id: Scalars['ID']['input']
}

export type QueryProductsArgs = {
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

export type RelatedProduct = {
  __typename?: 'RelatedProduct'
  boughtDate?: Maybe<Scalars['String']['output']>
  buyoutPrice?: Maybe<Scalars['Int']['output']>
  createdAt: Scalars['String']['output']
  endDate?: Maybe<Scalars['String']['output']>
  externalId: Scalars['String']['output']
  name: Scalars['String']['output']
  platform: Scalars['String']['output']
  price: Scalars['Int']['output']
  productId: Scalars['Int']['output']
  published: Scalars['Boolean']['output']
  thumbnailUrl: Scalars['String']['output']
  updatedAt: Scalars['String']['output']
}

export type ResultBase = {
  ok: Scalars['Boolean']['output']
}

export type UpdateIosysCrawlSettingExcludeKeywordInput = {
  id: Scalars['ID']['input']
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type UpdateIosysCrawlSettingExcludeKeywordResult =
  | UpdateIosysCrawlSettingExcludeKeywordResultError
  | UpdateIosysCrawlSettingExcludeKeywordResultSuccess

export type UpdateIosysCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'UpdateIosysCrawlSettingExcludeKeywordResultError'
  error: UpdateIosysCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdateIosysCrawlSettingExcludeKeywordResultErrors =
  UpdateIosysCrawlSettingExcludeKeywordResultValidationFailed

export type UpdateIosysCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'UpdateIosysCrawlSettingExcludeKeywordResultSuccess'
  iosysCrawlSettingExcludeKeyword: IosysCrawlSettingExcludeKeyword
  ok: Scalars['Boolean']['output']
}

export type UpdateIosysCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'UpdateIosysCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdateIosysCrawlSettingExcludeProductInput = {
  externalId: Scalars['String']['input']
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type UpdateIosysCrawlSettingExcludeProductResult =
  | UpdateIosysCrawlSettingExcludeProductResultError
  | UpdateIosysCrawlSettingExcludeProductResultSuccess

export type UpdateIosysCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'UpdateIosysCrawlSettingExcludeProductResultError'
  error: UpdateIosysCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdateIosysCrawlSettingExcludeProductResultErrors =
  UpdateIosysCrawlSettingExcludeProductResultValidationFailed

export type UpdateIosysCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'UpdateIosysCrawlSettingExcludeProductResultSuccess'
  iosysCrawlSettingExcludeProduct: IosysCrawlSettingExcludeProduct
  ok: Scalars['Boolean']['output']
}

export type UpdateIosysCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'UpdateIosysCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdateIosysCrawlSettingInput = {
  enabled: Scalars['Boolean']['input']
  keyword: Scalars['String']['input']
  max_price: Scalars['Int']['input']
  min_price: Scalars['Int']['input']
}

export type UpdateIosysCrawlSettingRequiredKeywordInput = {
  id: Scalars['ID']['input']
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type UpdateIosysCrawlSettingRequiredKeywordResult =
  | UpdateIosysCrawlSettingRequiredKeywordResultError
  | UpdateIosysCrawlSettingRequiredKeywordResultSuccess

export type UpdateIosysCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'UpdateIosysCrawlSettingRequiredKeywordResultError'
  error: UpdateIosysCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdateIosysCrawlSettingRequiredKeywordResultErrors =
  UpdateIosysCrawlSettingRequiredKeywordResultValidationFailed

export type UpdateIosysCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'UpdateIosysCrawlSettingRequiredKeywordResultSuccess'
  iosysCrawlSettingRequiredKeyword: IosysCrawlSettingRequiredKeyword
  ok: Scalars['Boolean']['output']
}

export type UpdateIosysCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'UpdateIosysCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdateJanparaCrawlSettingExcludeKeywordInput = {
  id: Scalars['ID']['input']
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type UpdateJanparaCrawlSettingExcludeKeywordResult =
  | UpdateJanparaCrawlSettingExcludeKeywordResultError
  | UpdateJanparaCrawlSettingExcludeKeywordResultSuccess

export type UpdateJanparaCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'UpdateJanparaCrawlSettingExcludeKeywordResultError'
  error: UpdateJanparaCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdateJanparaCrawlSettingExcludeKeywordResultErrors =
  UpdateJanparaCrawlSettingExcludeKeywordResultValidationFailed

export type UpdateJanparaCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'UpdateJanparaCrawlSettingExcludeKeywordResultSuccess'
  janparaCrawlSettingExcludeKeyword: JanparaCrawlSettingExcludeKeyword
  ok: Scalars['Boolean']['output']
}

export type UpdateJanparaCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'UpdateJanparaCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdateJanparaCrawlSettingExcludeProductInput = {
  externalId: Scalars['String']['input']
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type UpdateJanparaCrawlSettingExcludeProductResult =
  | UpdateJanparaCrawlSettingExcludeProductResultError
  | UpdateJanparaCrawlSettingExcludeProductResultSuccess

export type UpdateJanparaCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'UpdateJanparaCrawlSettingExcludeProductResultError'
  error: UpdateJanparaCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdateJanparaCrawlSettingExcludeProductResultErrors =
  UpdateJanparaCrawlSettingExcludeProductResultValidationFailed

export type UpdateJanparaCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'UpdateJanparaCrawlSettingExcludeProductResultSuccess'
  janparaCrawlSettingExcludeProduct: JanparaCrawlSettingExcludeProduct
  ok: Scalars['Boolean']['output']
}

export type UpdateJanparaCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'UpdateJanparaCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdateJanparaCrawlSettingInput = {
  enabled: Scalars['Boolean']['input']
  keyword: Scalars['String']['input']
  max_price: Scalars['Int']['input']
  min_price: Scalars['Int']['input']
}

export type UpdateJanparaCrawlSettingRequiredKeywordInput = {
  id: Scalars['ID']['input']
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type UpdateJanparaCrawlSettingRequiredKeywordResult =
  | UpdateJanparaCrawlSettingRequiredKeywordResultError
  | UpdateJanparaCrawlSettingRequiredKeywordResultSuccess

export type UpdateJanparaCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'UpdateJanparaCrawlSettingRequiredKeywordResultError'
  error: UpdateJanparaCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdateJanparaCrawlSettingRequiredKeywordResultErrors =
  UpdateJanparaCrawlSettingRequiredKeywordResultValidationFailed

export type UpdateJanparaCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'UpdateJanparaCrawlSettingRequiredKeywordResultSuccess'
  janparaCrawlSettingRequiredKeyword: JanparaCrawlSettingRequiredKeyword
  ok: Scalars['Boolean']['output']
}

export type UpdateJanparaCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'UpdateJanparaCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdateMercariCrawlSettingExcludeKeywordInput = {
  id: Scalars['ID']['input']
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type UpdateMercariCrawlSettingExcludeKeywordResult =
  | UpdateMercariCrawlSettingExcludeKeywordResultError
  | UpdateMercariCrawlSettingExcludeKeywordResultSuccess

export type UpdateMercariCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'UpdateMercariCrawlSettingExcludeKeywordResultError'
  error: UpdateMercariCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdateMercariCrawlSettingExcludeKeywordResultErrors =
  UpdateMercariCrawlSettingExcludeKeywordResultValidationFailed

export type UpdateMercariCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'UpdateMercariCrawlSettingExcludeKeywordResultSuccess'
  mercariCrawlSettingExcludeKeyword: MercariCrawlSettingExcludeKeyword
  ok: Scalars['Boolean']['output']
}

export type UpdateMercariCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'UpdateMercariCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdateMercariCrawlSettingExcludeProductInput = {
  externalId: Scalars['String']['input']
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type UpdateMercariCrawlSettingExcludeProductResult =
  | UpdateMercariCrawlSettingExcludeProductResultError
  | UpdateMercariCrawlSettingExcludeProductResultSuccess

export type UpdateMercariCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'UpdateMercariCrawlSettingExcludeProductResultError'
  error: UpdateMercariCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdateMercariCrawlSettingExcludeProductResultErrors =
  UpdateMercariCrawlSettingExcludeProductResultValidationFailed

export type UpdateMercariCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'UpdateMercariCrawlSettingExcludeProductResultSuccess'
  mercariCrawlSettingExcludeProduct: MercariCrawlSettingExcludeProduct
  ok: Scalars['Boolean']['output']
}

export type UpdateMercariCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'UpdateMercariCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdateMercariCrawlSettingInput = {
  category_id?: InputMaybe<Scalars['Int']['input']>
  enabled: Scalars['Boolean']['input']
  keyword: Scalars['String']['input']
  max_price: Scalars['Int']['input']
  min_price: Scalars['Int']['input']
}

export type UpdateMercariCrawlSettingRequiredKeywordInput = {
  id: Scalars['ID']['input']
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type UpdateMercariCrawlSettingRequiredKeywordResult =
  | UpdateMercariCrawlSettingRequiredKeywordResultError
  | UpdateMercariCrawlSettingRequiredKeywordResultSuccess

export type UpdateMercariCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'UpdateMercariCrawlSettingRequiredKeywordResultError'
  error: UpdateMercariCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdateMercariCrawlSettingRequiredKeywordResultErrors =
  UpdateMercariCrawlSettingRequiredKeywordResultValidationFailed

export type UpdateMercariCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'UpdateMercariCrawlSettingRequiredKeywordResultSuccess'
  mercariCrawlSettingRequiredKeyword: MercariCrawlSettingRequiredKeyword
  ok: Scalars['Boolean']['output']
}

export type UpdateMercariCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'UpdateMercariCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdatePcKoubouCrawlSettingExcludeKeywordInput = {
  id: Scalars['ID']['input']
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type UpdatePcKoubouCrawlSettingExcludeKeywordResult =
  | UpdatePcKoubouCrawlSettingExcludeKeywordResultError
  | UpdatePcKoubouCrawlSettingExcludeKeywordResultSuccess

export type UpdatePcKoubouCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'UpdatePcKoubouCrawlSettingExcludeKeywordResultError'
  error: UpdatePcKoubouCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdatePcKoubouCrawlSettingExcludeKeywordResultErrors =
  UpdatePcKoubouCrawlSettingExcludeKeywordResultValidationFailed

export type UpdatePcKoubouCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'UpdatePcKoubouCrawlSettingExcludeKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
  pcKoubouCrawlSettingExcludeKeyword: PcKoubouCrawlSettingExcludeKeyword
}

export type UpdatePcKoubouCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'UpdatePcKoubouCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdatePcKoubouCrawlSettingExcludeProductInput = {
  externalId: Scalars['String']['input']
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type UpdatePcKoubouCrawlSettingExcludeProductResult =
  | UpdatePcKoubouCrawlSettingExcludeProductResultError
  | UpdatePcKoubouCrawlSettingExcludeProductResultSuccess

export type UpdatePcKoubouCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'UpdatePcKoubouCrawlSettingExcludeProductResultError'
  error: UpdatePcKoubouCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdatePcKoubouCrawlSettingExcludeProductResultErrors =
  UpdatePcKoubouCrawlSettingExcludeProductResultValidationFailed

export type UpdatePcKoubouCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'UpdatePcKoubouCrawlSettingExcludeProductResultSuccess'
  ok: Scalars['Boolean']['output']
  pcKoubouCrawlSettingExcludeProduct: PcKoubouCrawlSettingExcludeProduct
}

export type UpdatePcKoubouCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'UpdatePcKoubouCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdatePcKoubouCrawlSettingInput = {
  enabled: Scalars['Boolean']['input']
  keyword: Scalars['String']['input']
  max_price: Scalars['Int']['input']
  min_price: Scalars['Int']['input']
}

export type UpdatePcKoubouCrawlSettingRequiredKeywordInput = {
  id: Scalars['ID']['input']
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type UpdatePcKoubouCrawlSettingRequiredKeywordResult =
  | UpdatePcKoubouCrawlSettingRequiredKeywordResultError
  | UpdatePcKoubouCrawlSettingRequiredKeywordResultSuccess

export type UpdatePcKoubouCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'UpdatePcKoubouCrawlSettingRequiredKeywordResultError'
  error: UpdatePcKoubouCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdatePcKoubouCrawlSettingRequiredKeywordResultErrors =
  UpdatePcKoubouCrawlSettingRequiredKeywordResultValidationFailed

export type UpdatePcKoubouCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'UpdatePcKoubouCrawlSettingRequiredKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
  pcKoubouCrawlSettingRequiredKeyword: PcKoubouCrawlSettingRequiredKeyword
}

export type UpdatePcKoubouCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'UpdatePcKoubouCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdateProductInput = {
  iosys_crawl_setting: UpdateIosysCrawlSettingInput
  janpara_crawl_setting: UpdateJanparaCrawlSettingInput
  mercari_crawl_setting: UpdateMercariCrawlSettingInput
  name: Scalars['String']['input']
  pc_koubou_crawl_setting: UpdatePcKoubouCrawlSettingInput
  used_sofmap_crawl_setting: UpdateUsedSofmapCrawlSettingInput
  yahoo_auction_crawl_setting: UpdateYahooAuctionCrawlSettingInput
}

export type UpdateProductResult = UpdateProductResultError | UpdateProductResultSuccess

export type UpdateProductResultError = ResultBase & {
  __typename?: 'UpdateProductResultError'
  error: UpdateProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdateProductResultErrors = UpdateProductResultValidationFailed

export type UpdateProductResultSuccess = ResultBase & {
  __typename?: 'UpdateProductResultSuccess'
  ok: Scalars['Boolean']['output']
  product: Product
}

export type UpdateProductResultValidationFailed = UserError & {
  __typename?: 'UpdateProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdateUsedSofmapCrawlSettingExcludeKeywordInput = {
  id: Scalars['ID']['input']
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type UpdateUsedSofmapCrawlSettingExcludeKeywordResult =
  | UpdateUsedSofmapCrawlSettingExcludeKeywordResultError
  | UpdateUsedSofmapCrawlSettingExcludeKeywordResultSuccess

export type UpdateUsedSofmapCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'UpdateUsedSofmapCrawlSettingExcludeKeywordResultError'
  error: UpdateUsedSofmapCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdateUsedSofmapCrawlSettingExcludeKeywordResultErrors =
  UpdateUsedSofmapCrawlSettingExcludeKeywordResultValidationFailed

export type UpdateUsedSofmapCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'UpdateUsedSofmapCrawlSettingExcludeKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
  usedSofmapCrawlSettingExcludeKeyword: UsedSofmapCrawlSettingExcludeKeyword
}

export type UpdateUsedSofmapCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'UpdateUsedSofmapCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdateUsedSofmapCrawlSettingExcludeProductInput = {
  externalId: Scalars['String']['input']
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type UpdateUsedSofmapCrawlSettingExcludeProductResult =
  | UpdateUsedSofmapCrawlSettingExcludeProductResultError
  | UpdateUsedSofmapCrawlSettingExcludeProductResultSuccess

export type UpdateUsedSofmapCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'UpdateUsedSofmapCrawlSettingExcludeProductResultError'
  error: UpdateUsedSofmapCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdateUsedSofmapCrawlSettingExcludeProductResultErrors =
  UpdateUsedSofmapCrawlSettingExcludeProductResultValidationFailed

export type UpdateUsedSofmapCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'UpdateUsedSofmapCrawlSettingExcludeProductResultSuccess'
  ok: Scalars['Boolean']['output']
  usedSofmapCrawlSettingExcludeProduct: UsedSofmapCrawlSettingExcludeProduct
}

export type UpdateUsedSofmapCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'UpdateUsedSofmapCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdateUsedSofmapCrawlSettingInput = {
  enabled: Scalars['Boolean']['input']
  keyword: Scalars['String']['input']
  max_price: Scalars['Int']['input']
  min_price: Scalars['Int']['input']
}

export type UpdateUsedSofmapCrawlSettingRequiredKeywordInput = {
  id: Scalars['ID']['input']
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type UpdateUsedSofmapCrawlSettingRequiredKeywordResult =
  | UpdateUsedSofmapCrawlSettingRequiredKeywordResultError
  | UpdateUsedSofmapCrawlSettingRequiredKeywordResultSuccess

export type UpdateUsedSofmapCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'UpdateUsedSofmapCrawlSettingRequiredKeywordResultError'
  error: UpdateUsedSofmapCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdateUsedSofmapCrawlSettingRequiredKeywordResultErrors =
  UpdateUsedSofmapCrawlSettingRequiredKeywordResultValidationFailed

export type UpdateUsedSofmapCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'UpdateUsedSofmapCrawlSettingRequiredKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
  usedSofmapCrawlSettingRequiredKeyword: UsedSofmapCrawlSettingRequiredKeyword
}

export type UpdateUsedSofmapCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'UpdateUsedSofmapCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdateYahooAuctionCrawlSettingExcludeKeywordInput = {
  id: Scalars['ID']['input']
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type UpdateYahooAuctionCrawlSettingExcludeKeywordResult =
  | UpdateYahooAuctionCrawlSettingExcludeKeywordResultError
  | UpdateYahooAuctionCrawlSettingExcludeKeywordResultSuccess

export type UpdateYahooAuctionCrawlSettingExcludeKeywordResultError = ResultBase & {
  __typename?: 'UpdateYahooAuctionCrawlSettingExcludeKeywordResultError'
  error: UpdateYahooAuctionCrawlSettingExcludeKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdateYahooAuctionCrawlSettingExcludeKeywordResultErrors =
  UpdateYahooAuctionCrawlSettingExcludeKeywordResultValidationFailed

export type UpdateYahooAuctionCrawlSettingExcludeKeywordResultSuccess = ResultBase & {
  __typename?: 'UpdateYahooAuctionCrawlSettingExcludeKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
  yahooAuctionCrawlSettingExcludeKeyword: YahooAuctionCrawlSettingExcludeKeyword
}

export type UpdateYahooAuctionCrawlSettingExcludeKeywordResultValidationFailed = UserError & {
  __typename?: 'UpdateYahooAuctionCrawlSettingExcludeKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdateYahooAuctionCrawlSettingExcludeProductInput = {
  externalId: Scalars['String']['input']
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}

export type UpdateYahooAuctionCrawlSettingExcludeProductResult =
  | UpdateYahooAuctionCrawlSettingExcludeProductResultError
  | UpdateYahooAuctionCrawlSettingExcludeProductResultSuccess

export type UpdateYahooAuctionCrawlSettingExcludeProductResultError = ResultBase & {
  __typename?: 'UpdateYahooAuctionCrawlSettingExcludeProductResultError'
  error: UpdateYahooAuctionCrawlSettingExcludeProductResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdateYahooAuctionCrawlSettingExcludeProductResultErrors =
  UpdateYahooAuctionCrawlSettingExcludeProductResultValidationFailed

export type UpdateYahooAuctionCrawlSettingExcludeProductResultSuccess = ResultBase & {
  __typename?: 'UpdateYahooAuctionCrawlSettingExcludeProductResultSuccess'
  ok: Scalars['Boolean']['output']
  yahooAuctionCrawlSettingExcludeProduct: YahooAuctionCrawlSettingExcludeProduct
}

export type UpdateYahooAuctionCrawlSettingExcludeProductResultValidationFailed = UserError & {
  __typename?: 'UpdateYahooAuctionCrawlSettingExcludeProductResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UpdateYahooAuctionCrawlSettingInput = {
  category_id?: InputMaybe<Scalars['Int']['input']>
  enabled: Scalars['Boolean']['input']
  keyword: Scalars['String']['input']
  max_price: Scalars['Int']['input']
  min_price: Scalars['Int']['input']
}

export type UpdateYahooAuctionCrawlSettingRequiredKeywordInput = {
  id: Scalars['ID']['input']
  keyword?: InputMaybe<Scalars['String']['input']>
  productId: Scalars['ID']['input']
}

export type UpdateYahooAuctionCrawlSettingRequiredKeywordResult =
  | UpdateYahooAuctionCrawlSettingRequiredKeywordResultError
  | UpdateYahooAuctionCrawlSettingRequiredKeywordResultSuccess

export type UpdateYahooAuctionCrawlSettingRequiredKeywordResultError = ResultBase & {
  __typename?: 'UpdateYahooAuctionCrawlSettingRequiredKeywordResultError'
  error: UpdateYahooAuctionCrawlSettingRequiredKeywordResultErrors
  ok: Scalars['Boolean']['output']
}

export type UpdateYahooAuctionCrawlSettingRequiredKeywordResultErrors =
  UpdateYahooAuctionCrawlSettingRequiredKeywordResultValidationFailed

export type UpdateYahooAuctionCrawlSettingRequiredKeywordResultSuccess = ResultBase & {
  __typename?: 'UpdateYahooAuctionCrawlSettingRequiredKeywordResultSuccess'
  ok: Scalars['Boolean']['output']
  yahooAuctionCrawlSettingRequiredKeyword: YahooAuctionCrawlSettingRequiredKeyword
}

export type UpdateYahooAuctionCrawlSettingRequiredKeywordResultValidationFailed = UserError & {
  __typename?: 'UpdateYahooAuctionCrawlSettingRequiredKeywordResultValidationFailed'
  code: Scalars['String']['output']
  details: Array<ErrorDetail>
  message: Scalars['String']['output']
}

export type UsedSofmapCrawlSetting = Node & {
  __typename?: 'UsedSofmapCrawlSetting'
  createdAt: Scalars['String']['output']
  enabled: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  keyword: Scalars['String']['output']
  maxPrice: Scalars['Int']['output']
  minPrice: Scalars['Int']['output']
  productId: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
  usedSofmapCrawlSettingExcludeKeywords: Array<UsedSofmapCrawlSettingExcludeKeyword>
  usedSofmapCrawlSettingExcludeProducts: Array<UsedSofmapCrawlSettingExcludeProduct>
  usedSofmapCrawlSettingRequiredKeywords: Array<UsedSofmapCrawlSettingRequiredKeyword>
}

export type UsedSofmapCrawlSettingExcludeKeyword = Node & {
  __typename?: 'UsedSofmapCrawlSettingExcludeKeyword'
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  keyword?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['String']['output']
  usedSofmapCrawlSettingId: Scalars['Int']['output']
}

export type UsedSofmapCrawlSettingExcludeProduct = Node & {
  __typename?: 'UsedSofmapCrawlSettingExcludeProduct'
  createdAt: Scalars['String']['output']
  externalId: Scalars['String']['output']
  id: Scalars['ID']['output']
  updatedAt: Scalars['String']['output']
  usedSofmapCrawlSettingId: Scalars['Int']['output']
}

export type UsedSofmapCrawlSettingRequiredKeyword = Node & {
  __typename?: 'UsedSofmapCrawlSettingRequiredKeyword'
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  keyword?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['String']['output']
  usedSofmapCrawlSettingId: Scalars['Int']['output']
}

export type UserError = {
  code: Scalars['String']['output']
  message: Scalars['String']['output']
}

export type YahooAuctionCrawlSetting = Node & {
  __typename?: 'YahooAuctionCrawlSetting'
  categoryId?: Maybe<Scalars['Int']['output']>
  createdAt: Scalars['String']['output']
  enabled: Scalars['Boolean']['output']
  id: Scalars['ID']['output']
  keyword: Scalars['String']['output']
  maxPrice: Scalars['Int']['output']
  minPrice: Scalars['Int']['output']
  productId: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
  yahooAuctionCrawlSettingExcludeKeywords: Array<YahooAuctionCrawlSettingExcludeKeyword>
  yahooAuctionCrawlSettingExcludeProducts: Array<YahooAuctionCrawlSettingExcludeProduct>
  yahooAuctionCrawlSettingRequiredKeywords: Array<YahooAuctionCrawlSettingRequiredKeyword>
}

export type YahooAuctionCrawlSettingExcludeKeyword = Node & {
  __typename?: 'YahooAuctionCrawlSettingExcludeKeyword'
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  keyword?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['String']['output']
  yahooAuctionCrawlSettingId: Scalars['Int']['output']
}

export type YahooAuctionCrawlSettingExcludeProduct = Node & {
  __typename?: 'YahooAuctionCrawlSettingExcludeProduct'
  createdAt: Scalars['String']['output']
  externalId: Scalars['String']['output']
  id: Scalars['ID']['output']
  updatedAt: Scalars['String']['output']
  yahooAuctionCrawlSettingId: Scalars['Int']['output']
}

export type YahooAuctionCrawlSettingRequiredKeyword = Node & {
  __typename?: 'YahooAuctionCrawlSettingRequiredKeyword'
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  keyword?: Maybe<Scalars['String']['output']>
  updatedAt: Scalars['String']['output']
  yahooAuctionCrawlSettingId: Scalars['Int']['output']
}

export type YahooAuctionDailyPurchaseSummary = Node & {
  __typename?: 'YahooAuctionDailyPurchaseSummary'
  averagePurchasePrice?: Maybe<Scalars['Int']['output']>
  createdAt: Scalars['String']['output']
  date: Scalars['String']['output']
  id: Scalars['ID']['output']
  productId: Scalars['Int']['output']
  purchaseCount: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
}

export type YahooAuctionProduct = Node & {
  __typename?: 'YahooAuctionProduct'
  boughtDate?: Maybe<Scalars['String']['output']>
  createdAt: Scalars['String']['output']
  id: Scalars['ID']['output']
  name: Scalars['String']['output']
  price: Scalars['Int']['output']
  productId: Scalars['Int']['output']
  published: Scalars['Boolean']['output']
  thumbnailUrl: Scalars['String']['output']
  updatedAt: Scalars['String']['output']
  yahooAuctionId: Scalars['String']['output']
}

export type YahooFleamarketDailyPurchaseSummary = Node & {
  __typename?: 'YahooFleamarketDailyPurchaseSummary'
  averagePurchasePrice?: Maybe<Scalars['Int']['output']>
  createdAt: Scalars['String']['output']
  date: Scalars['String']['output']
  id: Scalars['ID']['output']
  productId: Scalars['Int']['output']
  purchaseCount: Scalars['Int']['output']
  updatedAt: Scalars['String']['output']
}

export type CreateProductMutationVariables = Exact<{
  input: CreateProductInput
}>

export type CreateProductMutation = {
  __typename?: 'Mutation'
  createProduct:
    | {
        __typename?: 'CreateProductResultError'
        ok: boolean
        error: {
          __typename?: 'CreateProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreateProductResultSuccess'
        ok: boolean
        product: { __typename?: 'Product'; id: string; name: string }
      }
}

export type UpdateProductMutationVariables = Exact<{
  id: Scalars['ID']['input']
  input: UpdateProductInput
}>

export type UpdateProductMutation = {
  __typename?: 'Mutation'
  updateProduct:
    | {
        __typename?: 'UpdateProductResultError'
        ok: boolean
        error: {
          __typename?: 'UpdateProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdateProductResultSuccess'
        ok: boolean
        product: { __typename?: 'Product'; id: string; name: string }
      }
}

export type DeleteProductMutationVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type DeleteProductMutation = {
  __typename?: 'Mutation'
  deleteProduct:
    | {
        __typename?: 'DeleteProductResultError'
        ok: boolean
        error: {
          __typename?: 'DeleteProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeleteProductResultSuccess'; ok: boolean }
}

export type CreateYahooAuctionCrawlSettingExcludeKeywordMutationVariables = Exact<{
  input: CreateYahooAuctionCrawlSettingExcludeKeywordInput
}>

export type CreateYahooAuctionCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  createYahooAuctionCrawlSettingExcludeKeyword:
    | {
        __typename?: 'CreateYahooAuctionCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'CreateYahooAuctionCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreateYahooAuctionCrawlSettingExcludeKeywordResultSuccess'
        ok: boolean
        yahooAuctionCrawlSettingExcludeKeyword: {
          __typename?: 'YahooAuctionCrawlSettingExcludeKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdateYahooAuctionCrawlSettingExcludeKeywordMutationVariables = Exact<{
  input: UpdateYahooAuctionCrawlSettingExcludeKeywordInput
}>

export type UpdateYahooAuctionCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  updateYahooAuctionCrawlSettingExcludeKeyword:
    | {
        __typename?: 'UpdateYahooAuctionCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'UpdateYahooAuctionCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdateYahooAuctionCrawlSettingExcludeKeywordResultSuccess'
        ok: boolean
        yahooAuctionCrawlSettingExcludeKeyword: {
          __typename?: 'YahooAuctionCrawlSettingExcludeKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeleteYahooAuctionCrawlSettingExcludeKeywordMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeleteYahooAuctionCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  deleteYahooAuctionCrawlSettingExcludeKeyword:
    | {
        __typename?: 'DeleteYahooAuctionCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'DeleteYahooAuctionCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeleteYahooAuctionCrawlSettingExcludeKeywordResultSuccess'; ok: boolean }
}

export type CreateYahooAuctionCrawlSettingExcludeProductMutationVariables = Exact<{
  input: CreateYahooAuctionCrawlSettingExcludeProductInput
}>

export type CreateYahooAuctionCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  createYahooAuctionCrawlSettingExcludeProduct:
    | {
        __typename?: 'CreateYahooAuctionCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'CreateYahooAuctionCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreateYahooAuctionCrawlSettingExcludeProductResultSuccess'
        ok: boolean
        yahooAuctionCrawlSettingExcludeProduct: {
          __typename?: 'YahooAuctionCrawlSettingExcludeProduct'
          id: string
          externalId: string
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdateYahooAuctionCrawlSettingExcludeProductMutationVariables = Exact<{
  input: UpdateYahooAuctionCrawlSettingExcludeProductInput
}>

export type UpdateYahooAuctionCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  updateYahooAuctionCrawlSettingExcludeProduct:
    | {
        __typename?: 'UpdateYahooAuctionCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'UpdateYahooAuctionCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdateYahooAuctionCrawlSettingExcludeProductResultSuccess'
        ok: boolean
        yahooAuctionCrawlSettingExcludeProduct: {
          __typename?: 'YahooAuctionCrawlSettingExcludeProduct'
          id: string
          externalId: string
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeleteYahooAuctionCrawlSettingExcludeProductMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeleteYahooAuctionCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  deleteYahooAuctionCrawlSettingExcludeProduct:
    | {
        __typename?: 'DeleteYahooAuctionCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'DeleteYahooAuctionCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeleteYahooAuctionCrawlSettingExcludeProductResultSuccess'; ok: boolean }
}

export type CreateYahooAuctionCrawlSettingRequiredKeywordMutationVariables = Exact<{
  input: CreateYahooAuctionCrawlSettingRequiredKeywordInput
}>

export type CreateYahooAuctionCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  createYahooAuctionCrawlSettingRequiredKeyword:
    | {
        __typename?: 'CreateYahooAuctionCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'CreateYahooAuctionCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreateYahooAuctionCrawlSettingRequiredKeywordResultSuccess'
        ok: boolean
        yahooAuctionCrawlSettingRequiredKeyword: {
          __typename?: 'YahooAuctionCrawlSettingRequiredKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdateYahooAuctionCrawlSettingRequiredKeywordMutationVariables = Exact<{
  input: UpdateYahooAuctionCrawlSettingRequiredKeywordInput
}>

export type UpdateYahooAuctionCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  updateYahooAuctionCrawlSettingRequiredKeyword:
    | {
        __typename?: 'UpdateYahooAuctionCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'UpdateYahooAuctionCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdateYahooAuctionCrawlSettingRequiredKeywordResultSuccess'
        ok: boolean
        yahooAuctionCrawlSettingRequiredKeyword: {
          __typename?: 'YahooAuctionCrawlSettingRequiredKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeleteYahooAuctionCrawlSettingRequiredKeywordMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeleteYahooAuctionCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  deleteYahooAuctionCrawlSettingRequiredKeyword:
    | {
        __typename?: 'DeleteYahooAuctionCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'DeleteYahooAuctionCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeleteYahooAuctionCrawlSettingRequiredKeywordResultSuccess'; ok: boolean }
}

export type CreateMercariCrawlSettingExcludeKeywordMutationVariables = Exact<{
  input: CreateMercariCrawlSettingExcludeKeywordInput
}>

export type CreateMercariCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  createMercariCrawlSettingExcludeKeyword:
    | {
        __typename?: 'CreateMercariCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'CreateMercariCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreateMercariCrawlSettingExcludeKeywordResultSuccess'
        ok: boolean
        mercariCrawlSettingExcludeKeyword: {
          __typename?: 'MercariCrawlSettingExcludeKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdateMercariCrawlSettingExcludeKeywordMutationVariables = Exact<{
  input: UpdateMercariCrawlSettingExcludeKeywordInput
}>

export type UpdateMercariCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  updateMercariCrawlSettingExcludeKeyword:
    | {
        __typename?: 'UpdateMercariCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'UpdateMercariCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdateMercariCrawlSettingExcludeKeywordResultSuccess'
        ok: boolean
        mercariCrawlSettingExcludeKeyword: {
          __typename?: 'MercariCrawlSettingExcludeKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeleteMercariCrawlSettingExcludeKeywordMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeleteMercariCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  deleteMercariCrawlSettingExcludeKeyword:
    | {
        __typename?: 'DeleteMercariCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'DeleteMercariCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeleteMercariCrawlSettingExcludeKeywordResultSuccess'; ok: boolean }
}

export type CreateMercariCrawlSettingExcludeProductMutationVariables = Exact<{
  input: CreateMercariCrawlSettingExcludeProductInput
}>

export type CreateMercariCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  createMercariCrawlSettingExcludeProduct:
    | {
        __typename?: 'CreateMercariCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'CreateMercariCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreateMercariCrawlSettingExcludeProductResultSuccess'
        ok: boolean
        mercariCrawlSettingExcludeProduct: {
          __typename?: 'MercariCrawlSettingExcludeProduct'
          id: string
          externalId: string
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdateMercariCrawlSettingExcludeProductMutationVariables = Exact<{
  input: UpdateMercariCrawlSettingExcludeProductInput
}>

export type UpdateMercariCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  updateMercariCrawlSettingExcludeProduct:
    | {
        __typename?: 'UpdateMercariCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'UpdateMercariCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdateMercariCrawlSettingExcludeProductResultSuccess'
        ok: boolean
        mercariCrawlSettingExcludeProduct: {
          __typename?: 'MercariCrawlSettingExcludeProduct'
          id: string
          externalId: string
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeleteMercariCrawlSettingExcludeProductMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeleteMercariCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  deleteMercariCrawlSettingExcludeProduct:
    | {
        __typename?: 'DeleteMercariCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'DeleteMercariCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeleteMercariCrawlSettingExcludeProductResultSuccess'; ok: boolean }
}

export type CreateMercariCrawlSettingRequiredKeywordMutationVariables = Exact<{
  input: CreateMercariCrawlSettingRequiredKeywordInput
}>

export type CreateMercariCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  createMercariCrawlSettingRequiredKeyword:
    | {
        __typename?: 'CreateMercariCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'CreateMercariCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreateMercariCrawlSettingRequiredKeywordResultSuccess'
        ok: boolean
        mercariCrawlSettingRequiredKeyword: {
          __typename?: 'MercariCrawlSettingRequiredKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdateMercariCrawlSettingRequiredKeywordMutationVariables = Exact<{
  input: UpdateMercariCrawlSettingRequiredKeywordInput
}>

export type UpdateMercariCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  updateMercariCrawlSettingRequiredKeyword:
    | {
        __typename?: 'UpdateMercariCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'UpdateMercariCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdateMercariCrawlSettingRequiredKeywordResultSuccess'
        ok: boolean
        mercariCrawlSettingRequiredKeyword: {
          __typename?: 'MercariCrawlSettingRequiredKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeleteMercariCrawlSettingRequiredKeywordMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeleteMercariCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  deleteMercariCrawlSettingRequiredKeyword:
    | {
        __typename?: 'DeleteMercariCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'DeleteMercariCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeleteMercariCrawlSettingRequiredKeywordResultSuccess'; ok: boolean }
}

export type CreateJanparaCrawlSettingExcludeKeywordMutationVariables = Exact<{
  input: CreateJanparaCrawlSettingExcludeKeywordInput
}>

export type CreateJanparaCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  createJanparaCrawlSettingExcludeKeyword:
    | {
        __typename?: 'CreateJanparaCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'CreateJanparaCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreateJanparaCrawlSettingExcludeKeywordResultSuccess'
        ok: boolean
        janparaCrawlSettingExcludeKeyword: {
          __typename?: 'JanparaCrawlSettingExcludeKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdateJanparaCrawlSettingExcludeKeywordMutationVariables = Exact<{
  input: UpdateJanparaCrawlSettingExcludeKeywordInput
}>

export type UpdateJanparaCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  updateJanparaCrawlSettingExcludeKeyword:
    | {
        __typename?: 'UpdateJanparaCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'UpdateJanparaCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdateJanparaCrawlSettingExcludeKeywordResultSuccess'
        ok: boolean
        janparaCrawlSettingExcludeKeyword: {
          __typename?: 'JanparaCrawlSettingExcludeKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeleteJanparaCrawlSettingExcludeKeywordMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeleteJanparaCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  deleteJanparaCrawlSettingExcludeKeyword:
    | {
        __typename?: 'DeleteJanparaCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'DeleteJanparaCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeleteJanparaCrawlSettingExcludeKeywordResultSuccess'; ok: boolean }
}

export type CreateJanparaCrawlSettingExcludeProductMutationVariables = Exact<{
  input: CreateJanparaCrawlSettingExcludeProductInput
}>

export type CreateJanparaCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  createJanparaCrawlSettingExcludeProduct:
    | {
        __typename?: 'CreateJanparaCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'CreateJanparaCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreateJanparaCrawlSettingExcludeProductResultSuccess'
        ok: boolean
        janparaCrawlSettingExcludeProduct: {
          __typename?: 'JanparaCrawlSettingExcludeProduct'
          id: string
          externalId: string
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdateJanparaCrawlSettingExcludeProductMutationVariables = Exact<{
  input: UpdateJanparaCrawlSettingExcludeProductInput
}>

export type UpdateJanparaCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  updateJanparaCrawlSettingExcludeProduct:
    | {
        __typename?: 'UpdateJanparaCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'UpdateJanparaCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdateJanparaCrawlSettingExcludeProductResultSuccess'
        ok: boolean
        janparaCrawlSettingExcludeProduct: {
          __typename?: 'JanparaCrawlSettingExcludeProduct'
          id: string
          externalId: string
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeleteJanparaCrawlSettingExcludeProductMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeleteJanparaCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  deleteJanparaCrawlSettingExcludeProduct:
    | {
        __typename?: 'DeleteJanparaCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'DeleteJanparaCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeleteJanparaCrawlSettingExcludeProductResultSuccess'; ok: boolean }
}

export type CreateJanparaCrawlSettingRequiredKeywordMutationVariables = Exact<{
  input: CreateJanparaCrawlSettingRequiredKeywordInput
}>

export type CreateJanparaCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  createJanparaCrawlSettingRequiredKeyword:
    | {
        __typename?: 'CreateJanparaCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'CreateJanparaCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreateJanparaCrawlSettingRequiredKeywordResultSuccess'
        ok: boolean
        janparaCrawlSettingRequiredKeyword: {
          __typename?: 'JanparaCrawlSettingRequiredKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdateJanparaCrawlSettingRequiredKeywordMutationVariables = Exact<{
  input: UpdateJanparaCrawlSettingRequiredKeywordInput
}>

export type UpdateJanparaCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  updateJanparaCrawlSettingRequiredKeyword:
    | {
        __typename?: 'UpdateJanparaCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'UpdateJanparaCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdateJanparaCrawlSettingRequiredKeywordResultSuccess'
        ok: boolean
        janparaCrawlSettingRequiredKeyword: {
          __typename?: 'JanparaCrawlSettingRequiredKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeleteJanparaCrawlSettingRequiredKeywordMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeleteJanparaCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  deleteJanparaCrawlSettingRequiredKeyword:
    | {
        __typename?: 'DeleteJanparaCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'DeleteJanparaCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeleteJanparaCrawlSettingRequiredKeywordResultSuccess'; ok: boolean }
}

export type CreateIosysCrawlSettingExcludeKeywordMutationVariables = Exact<{
  input: CreateIosysCrawlSettingExcludeKeywordInput
}>

export type CreateIosysCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  createIosysCrawlSettingExcludeKeyword:
    | {
        __typename?: 'CreateIosysCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'CreateIosysCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreateIosysCrawlSettingExcludeKeywordResultSuccess'
        ok: boolean
        iosysCrawlSettingExcludeKeyword: {
          __typename?: 'IosysCrawlSettingExcludeKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdateIosysCrawlSettingExcludeKeywordMutationVariables = Exact<{
  input: UpdateIosysCrawlSettingExcludeKeywordInput
}>

export type UpdateIosysCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  updateIosysCrawlSettingExcludeKeyword:
    | {
        __typename?: 'UpdateIosysCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'UpdateIosysCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdateIosysCrawlSettingExcludeKeywordResultSuccess'
        ok: boolean
        iosysCrawlSettingExcludeKeyword: {
          __typename?: 'IosysCrawlSettingExcludeKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeleteIosysCrawlSettingExcludeKeywordMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeleteIosysCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  deleteIosysCrawlSettingExcludeKeyword:
    | {
        __typename?: 'DeleteIosysCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'DeleteIosysCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeleteIosysCrawlSettingExcludeKeywordResultSuccess'; ok: boolean }
}

export type CreateIosysCrawlSettingExcludeProductMutationVariables = Exact<{
  input: CreateIosysCrawlSettingExcludeProductInput
}>

export type CreateIosysCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  createIosysCrawlSettingExcludeProduct:
    | {
        __typename?: 'CreateIosysCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'CreateIosysCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreateIosysCrawlSettingExcludeProductResultSuccess'
        ok: boolean
        iosysCrawlSettingExcludeProduct: {
          __typename?: 'IosysCrawlSettingExcludeProduct'
          id: string
          externalId: string
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdateIosysCrawlSettingExcludeProductMutationVariables = Exact<{
  input: UpdateIosysCrawlSettingExcludeProductInput
}>

export type UpdateIosysCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  updateIosysCrawlSettingExcludeProduct:
    | {
        __typename?: 'UpdateIosysCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'UpdateIosysCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdateIosysCrawlSettingExcludeProductResultSuccess'
        ok: boolean
        iosysCrawlSettingExcludeProduct: {
          __typename?: 'IosysCrawlSettingExcludeProduct'
          id: string
          externalId: string
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeleteIosysCrawlSettingExcludeProductMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeleteIosysCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  deleteIosysCrawlSettingExcludeProduct:
    | {
        __typename?: 'DeleteIosysCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'DeleteIosysCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeleteIosysCrawlSettingExcludeProductResultSuccess'; ok: boolean }
}

export type CreateIosysCrawlSettingRequiredKeywordMutationVariables = Exact<{
  input: CreateIosysCrawlSettingRequiredKeywordInput
}>

export type CreateIosysCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  createIosysCrawlSettingRequiredKeyword:
    | {
        __typename?: 'CreateIosysCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'CreateIosysCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreateIosysCrawlSettingRequiredKeywordResultSuccess'
        ok: boolean
        iosysCrawlSettingRequiredKeyword: {
          __typename?: 'IosysCrawlSettingRequiredKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdateIosysCrawlSettingRequiredKeywordMutationVariables = Exact<{
  input: UpdateIosysCrawlSettingRequiredKeywordInput
}>

export type UpdateIosysCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  updateIosysCrawlSettingRequiredKeyword:
    | {
        __typename?: 'UpdateIosysCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'UpdateIosysCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdateIosysCrawlSettingRequiredKeywordResultSuccess'
        ok: boolean
        iosysCrawlSettingRequiredKeyword: {
          __typename?: 'IosysCrawlSettingRequiredKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeleteIosysCrawlSettingRequiredKeywordMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeleteIosysCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  deleteIosysCrawlSettingRequiredKeyword:
    | {
        __typename?: 'DeleteIosysCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'DeleteIosysCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeleteIosysCrawlSettingRequiredKeywordResultSuccess'; ok: boolean }
}

export type CreatePcKoubouCrawlSettingExcludeKeywordMutationVariables = Exact<{
  input: CreatePcKoubouCrawlSettingExcludeKeywordInput
}>

export type CreatePcKoubouCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  createPcKoubouCrawlSettingExcludeKeyword:
    | {
        __typename?: 'CreatePcKoubouCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'CreatePcKoubouCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreatePcKoubouCrawlSettingExcludeKeywordResultSuccess'
        ok: boolean
        pcKoubouCrawlSettingExcludeKeyword: {
          __typename?: 'PcKoubouCrawlSettingExcludeKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdatePcKoubouCrawlSettingExcludeKeywordMutationVariables = Exact<{
  input: UpdatePcKoubouCrawlSettingExcludeKeywordInput
}>

export type UpdatePcKoubouCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  updatePcKoubouCrawlSettingExcludeKeyword:
    | {
        __typename?: 'UpdatePcKoubouCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'UpdatePcKoubouCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdatePcKoubouCrawlSettingExcludeKeywordResultSuccess'
        ok: boolean
        pcKoubouCrawlSettingExcludeKeyword: {
          __typename?: 'PcKoubouCrawlSettingExcludeKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeletePcKoubouCrawlSettingExcludeKeywordMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeletePcKoubouCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  deletePcKoubouCrawlSettingExcludeKeyword:
    | {
        __typename?: 'DeletePcKoubouCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'DeletePcKoubouCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeletePcKoubouCrawlSettingExcludeKeywordResultSuccess'; ok: boolean }
}

export type CreatePcKoubouCrawlSettingExcludeProductMutationVariables = Exact<{
  input: CreatePcKoubouCrawlSettingExcludeProductInput
}>

export type CreatePcKoubouCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  createPcKoubouCrawlSettingExcludeProduct:
    | {
        __typename?: 'CreatePcKoubouCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'CreatePcKoubouCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreatePcKoubouCrawlSettingExcludeProductResultSuccess'
        ok: boolean
        pcKoubouCrawlSettingExcludeProduct: {
          __typename?: 'PcKoubouCrawlSettingExcludeProduct'
          id: string
          externalId: string
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdatePcKoubouCrawlSettingExcludeProductMutationVariables = Exact<{
  input: UpdatePcKoubouCrawlSettingExcludeProductInput
}>

export type UpdatePcKoubouCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  updatePcKoubouCrawlSettingExcludeProduct:
    | {
        __typename?: 'UpdatePcKoubouCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'UpdatePcKoubouCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdatePcKoubouCrawlSettingExcludeProductResultSuccess'
        ok: boolean
        pcKoubouCrawlSettingExcludeProduct: {
          __typename?: 'PcKoubouCrawlSettingExcludeProduct'
          id: string
          externalId: string
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeletePcKoubouCrawlSettingExcludeProductMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeletePcKoubouCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  deletePcKoubouCrawlSettingExcludeProduct:
    | {
        __typename?: 'DeletePcKoubouCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'DeletePcKoubouCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeletePcKoubouCrawlSettingExcludeProductResultSuccess'; ok: boolean }
}

export type CreatePcKoubouCrawlSettingRequiredKeywordMutationVariables = Exact<{
  input: CreatePcKoubouCrawlSettingRequiredKeywordInput
}>

export type CreatePcKoubouCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  createPcKoubouCrawlSettingRequiredKeyword:
    | {
        __typename?: 'CreatePcKoubouCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'CreatePcKoubouCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreatePcKoubouCrawlSettingRequiredKeywordResultSuccess'
        ok: boolean
        pcKoubouCrawlSettingRequiredKeyword: {
          __typename?: 'PcKoubouCrawlSettingRequiredKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdatePcKoubouCrawlSettingRequiredKeywordMutationVariables = Exact<{
  input: UpdatePcKoubouCrawlSettingRequiredKeywordInput
}>

export type UpdatePcKoubouCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  updatePcKoubouCrawlSettingRequiredKeyword:
    | {
        __typename?: 'UpdatePcKoubouCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'UpdatePcKoubouCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdatePcKoubouCrawlSettingRequiredKeywordResultSuccess'
        ok: boolean
        pcKoubouCrawlSettingRequiredKeyword: {
          __typename?: 'PcKoubouCrawlSettingRequiredKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeletePcKoubouCrawlSettingRequiredKeywordMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeletePcKoubouCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  deletePcKoubouCrawlSettingRequiredKeyword:
    | {
        __typename?: 'DeletePcKoubouCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'DeletePcKoubouCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeletePcKoubouCrawlSettingRequiredKeywordResultSuccess'; ok: boolean }
}

export type CreateUsedSofmapCrawlSettingExcludeKeywordMutationVariables = Exact<{
  input: CreateUsedSofmapCrawlSettingExcludeKeywordInput
}>

export type CreateUsedSofmapCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  createUsedSofmapCrawlSettingExcludeKeyword:
    | {
        __typename?: 'CreateUsedSofmapCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'CreateUsedSofmapCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreateUsedSofmapCrawlSettingExcludeKeywordResultSuccess'
        ok: boolean
        usedSofmapCrawlSettingExcludeKeyword: {
          __typename?: 'UsedSofmapCrawlSettingExcludeKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdateUsedSofmapCrawlSettingExcludeKeywordMutationVariables = Exact<{
  input: UpdateUsedSofmapCrawlSettingExcludeKeywordInput
}>

export type UpdateUsedSofmapCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  updateUsedSofmapCrawlSettingExcludeKeyword:
    | {
        __typename?: 'UpdateUsedSofmapCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'UpdateUsedSofmapCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdateUsedSofmapCrawlSettingExcludeKeywordResultSuccess'
        ok: boolean
        usedSofmapCrawlSettingExcludeKeyword: {
          __typename?: 'UsedSofmapCrawlSettingExcludeKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeleteUsedSofmapCrawlSettingExcludeKeywordMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeleteUsedSofmapCrawlSettingExcludeKeywordMutation = {
  __typename?: 'Mutation'
  deleteUsedSofmapCrawlSettingExcludeKeyword:
    | {
        __typename?: 'DeleteUsedSofmapCrawlSettingExcludeKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'DeleteUsedSofmapCrawlSettingExcludeKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeleteUsedSofmapCrawlSettingExcludeKeywordResultSuccess'; ok: boolean }
}

export type CreateUsedSofmapCrawlSettingExcludeProductMutationVariables = Exact<{
  input: CreateUsedSofmapCrawlSettingExcludeProductInput
}>

export type CreateUsedSofmapCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  createUsedSofmapCrawlSettingExcludeProduct:
    | {
        __typename?: 'CreateUsedSofmapCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'CreateUsedSofmapCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreateUsedSofmapCrawlSettingExcludeProductResultSuccess'
        ok: boolean
        usedSofmapCrawlSettingExcludeProduct: {
          __typename?: 'UsedSofmapCrawlSettingExcludeProduct'
          id: string
          externalId: string
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdateUsedSofmapCrawlSettingExcludeProductMutationVariables = Exact<{
  input: UpdateUsedSofmapCrawlSettingExcludeProductInput
}>

export type UpdateUsedSofmapCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  updateUsedSofmapCrawlSettingExcludeProduct:
    | {
        __typename?: 'UpdateUsedSofmapCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'UpdateUsedSofmapCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdateUsedSofmapCrawlSettingExcludeProductResultSuccess'
        ok: boolean
        usedSofmapCrawlSettingExcludeProduct: {
          __typename?: 'UsedSofmapCrawlSettingExcludeProduct'
          id: string
          externalId: string
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeleteUsedSofmapCrawlSettingExcludeProductMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeleteUsedSofmapCrawlSettingExcludeProductMutation = {
  __typename?: 'Mutation'
  deleteUsedSofmapCrawlSettingExcludeProduct:
    | {
        __typename?: 'DeleteUsedSofmapCrawlSettingExcludeProductResultError'
        ok: boolean
        error: {
          __typename?: 'DeleteUsedSofmapCrawlSettingExcludeProductResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeleteUsedSofmapCrawlSettingExcludeProductResultSuccess'; ok: boolean }
}

export type CreateUsedSofmapCrawlSettingRequiredKeywordMutationVariables = Exact<{
  input: CreateUsedSofmapCrawlSettingRequiredKeywordInput
}>

export type CreateUsedSofmapCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  createUsedSofmapCrawlSettingRequiredKeyword:
    | {
        __typename?: 'CreateUsedSofmapCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'CreateUsedSofmapCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'CreateUsedSofmapCrawlSettingRequiredKeywordResultSuccess'
        ok: boolean
        usedSofmapCrawlSettingRequiredKeyword: {
          __typename?: 'UsedSofmapCrawlSettingRequiredKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type UpdateUsedSofmapCrawlSettingRequiredKeywordMutationVariables = Exact<{
  input: UpdateUsedSofmapCrawlSettingRequiredKeywordInput
}>

export type UpdateUsedSofmapCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  updateUsedSofmapCrawlSettingRequiredKeyword:
    | {
        __typename?: 'UpdateUsedSofmapCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'UpdateUsedSofmapCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | {
        __typename?: 'UpdateUsedSofmapCrawlSettingRequiredKeywordResultSuccess'
        ok: boolean
        usedSofmapCrawlSettingRequiredKeyword: {
          __typename?: 'UsedSofmapCrawlSettingRequiredKeyword'
          id: string
          keyword?: string | null
          createdAt: string
          updatedAt: string
        }
      }
}

export type DeleteUsedSofmapCrawlSettingRequiredKeywordMutationVariables = Exact<{
  id: Scalars['ID']['input']
  productId: Scalars['ID']['input']
}>

export type DeleteUsedSofmapCrawlSettingRequiredKeywordMutation = {
  __typename?: 'Mutation'
  deleteUsedSofmapCrawlSettingRequiredKeyword:
    | {
        __typename?: 'DeleteUsedSofmapCrawlSettingRequiredKeywordResultError'
        ok: boolean
        error: {
          __typename?: 'DeleteUsedSofmapCrawlSettingRequiredKeywordResultValidationFailed'
          code: string
          message: string
          details: Array<{ __typename?: 'ErrorDetail'; field: string; message: string }>
        }
      }
    | { __typename?: 'DeleteUsedSofmapCrawlSettingRequiredKeywordResultSuccess'; ok: boolean }
}

export type GetProductPageDataQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}>

export type GetProductPageDataQuery = {
  __typename?: 'Query'
  products: Array<{
    __typename?: 'Product'
    id: string
    name: string
    yahooAuctionCrawlSetting: {
      __typename?: 'YahooAuctionCrawlSetting'
      id: string
      productId: number
      keyword: string
      categoryId?: number | null
      minPrice: number
      maxPrice: number
      enabled: boolean
    }
    mercariCrawlSetting: {
      __typename?: 'MercariCrawlSetting'
      id: string
      productId: number
      keyword: string
      categoryId?: number | null
      minPrice: number
      maxPrice: number
      enabled: boolean
    }
    janparaCrawlSetting: {
      __typename?: 'JanparaCrawlSetting'
      id: string
      productId: number
      keyword: string
      minPrice: number
      maxPrice: number
      enabled: boolean
    }
    iosysCrawlSetting: {
      __typename?: 'IosysCrawlSetting'
      id: string
      productId: number
      keyword: string
      minPrice: number
      maxPrice: number
      enabled: boolean
    }
    pcKoubouCrawlSetting: {
      __typename?: 'PcKoubouCrawlSetting'
      id: string
      productId: number
      keyword: string
      minPrice: number
      maxPrice: number
      enabled: boolean
    }
    usedSofmapCrawlSetting: {
      __typename?: 'UsedSofmapCrawlSetting'
      id: string
      productId: number
      keyword: string
      minPrice: number
      maxPrice: number
      enabled: boolean
    }
  }>
}

export type GetProductDetailPageDataQueryVariables = Exact<{
  id: Scalars['ID']['input']
  platformMask: Scalars['String']['input']
  page?: InputMaybe<Scalars['Int']['input']>
  per?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Scalars['String']['input']>
}>

export type GetProductDetailPageDataQuery = {
  __typename?: 'Query'
  product: {
    __typename?: 'Product'
    id: string
    name: string
    yahooAuctionCrawlSetting: {
      __typename?: 'YahooAuctionCrawlSetting'
      id: string
      keyword: string
      categoryId?: number | null
      minPrice: number
      maxPrice: number
      enabled: boolean
      yahooAuctionCrawlSettingExcludeKeywords: Array<{
        __typename?: 'YahooAuctionCrawlSettingExcludeKeyword'
        id: string
        yahooAuctionCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
      yahooAuctionCrawlSettingExcludeProducts: Array<{
        __typename?: 'YahooAuctionCrawlSettingExcludeProduct'
        id: string
        yahooAuctionCrawlSettingId: number
        externalId: string
        createdAt: string
        updatedAt: string
      }>
      yahooAuctionCrawlSettingRequiredKeywords: Array<{
        __typename?: 'YahooAuctionCrawlSettingRequiredKeyword'
        id: string
        yahooAuctionCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
    }
    yahooAuctionDailyPurchaseSummaries: Array<{
      __typename?: 'YahooAuctionDailyPurchaseSummary'
      id: string
      productId: number
      averagePurchasePrice?: number | null
      purchaseCount: number
      date: string
      createdAt: string
      updatedAt: string
    }>
    yahooFleamarketDailyPurchaseSummaries: Array<{
      __typename?: 'YahooFleamarketDailyPurchaseSummary'
      id: string
      productId: number
      averagePurchasePrice?: number | null
      purchaseCount: number
      date: string
      createdAt: string
      updatedAt: string
    }>
    mercariCrawlSetting: {
      __typename?: 'MercariCrawlSetting'
      id: string
      productId: number
      keyword: string
      categoryId?: number | null
      minPrice: number
      maxPrice: number
      enabled: boolean
      mercariCrawlSettingExcludeKeywords: Array<{
        __typename?: 'MercariCrawlSettingExcludeKeyword'
        id: string
        mercariCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
      mercariCrawlSettingExcludeProducts: Array<{
        __typename?: 'MercariCrawlSettingExcludeProduct'
        id: string
        mercariCrawlSettingId: number
        externalId: string
        createdAt: string
        updatedAt: string
      }>
      mercariCrawlSettingRequiredKeywords: Array<{
        __typename?: 'MercariCrawlSettingRequiredKeyword'
        id: string
        mercariCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
    }
    mercariDailyPurchaseSummaries: Array<{
      __typename?: 'MercariDailyPurchaseSummary'
      id: string
      productId: number
      averagePurchasePrice?: number | null
      purchaseCount: number
      date: string
      createdAt: string
      updatedAt: string
    }>
    janparaCrawlSetting: {
      __typename?: 'JanparaCrawlSetting'
      id: string
      productId: number
      keyword: string
      minPrice: number
      maxPrice: number
      enabled: boolean
      janparaCrawlSettingExcludeKeywords: Array<{
        __typename?: 'JanparaCrawlSettingExcludeKeyword'
        id: string
        janparaCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
      janparaCrawlSettingExcludeProducts: Array<{
        __typename?: 'JanparaCrawlSettingExcludeProduct'
        id: string
        janparaCrawlSettingId: number
        externalId: string
        createdAt: string
        updatedAt: string
      }>
      janparaCrawlSettingRequiredKeywords: Array<{
        __typename?: 'JanparaCrawlSettingRequiredKeyword'
        id: string
        janparaCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
    }
    iosysCrawlSetting: {
      __typename?: 'IosysCrawlSetting'
      id: string
      productId: number
      keyword: string
      minPrice: number
      maxPrice: number
      enabled: boolean
      iosysCrawlSettingExcludeKeywords: Array<{
        __typename?: 'IosysCrawlSettingExcludeKeyword'
        id: string
        iosysCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
      iosysCrawlSettingExcludeProducts: Array<{
        __typename?: 'IosysCrawlSettingExcludeProduct'
        id: string
        iosysCrawlSettingId: number
        externalId: string
        createdAt: string
        updatedAt: string
      }>
      iosysCrawlSettingRequiredKeywords: Array<{
        __typename?: 'IosysCrawlSettingRequiredKeyword'
        id: string
        iosysCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
    }
    pcKoubouCrawlSetting: {
      __typename?: 'PcKoubouCrawlSetting'
      id: string
      productId: number
      keyword: string
      minPrice: number
      maxPrice: number
      enabled: boolean
      pcKoubouCrawlSettingExcludeKeywords: Array<{
        __typename?: 'PcKoubouCrawlSettingExcludeKeyword'
        id: string
        pcKoubouCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
      pcKoubouCrawlSettingExcludeProducts: Array<{
        __typename?: 'PcKoubouCrawlSettingExcludeProduct'
        id: string
        pcKoubouCrawlSettingId: number
        externalId: string
        createdAt: string
        updatedAt: string
      }>
      pcKoubouCrawlSettingRequiredKeywords: Array<{
        __typename?: 'PcKoubouCrawlSettingRequiredKeyword'
        id: string
        pcKoubouCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
    }
    usedSofmapCrawlSetting: {
      __typename?: 'UsedSofmapCrawlSetting'
      id: string
      productId: number
      keyword: string
      minPrice: number
      maxPrice: number
      enabled: boolean
      usedSofmapCrawlSettingExcludeKeywords: Array<{
        __typename?: 'UsedSofmapCrawlSettingExcludeKeyword'
        id: string
        usedSofmapCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
      usedSofmapCrawlSettingExcludeProducts: Array<{
        __typename?: 'UsedSofmapCrawlSettingExcludeProduct'
        id: string
        usedSofmapCrawlSettingId: number
        externalId: string
        createdAt: string
        updatedAt: string
      }>
      usedSofmapCrawlSettingRequiredKeywords: Array<{
        __typename?: 'UsedSofmapCrawlSettingRequiredKeyword'
        id: string
        usedSofmapCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
    }
    relatedProducts: Array<{
      __typename?: 'RelatedProduct'
      platform: string
      productId: number
      externalId: string
      name: string
      thumbnailUrl: string
      price: number
      buyoutPrice?: number | null
      published: boolean
      boughtDate?: string | null
      endDate?: string | null
      createdAt: string
      updatedAt: string
    }>
  }
}

export type GetProductSettingPageDataQueryVariables = Exact<{
  id: Scalars['ID']['input']
}>

export type GetProductSettingPageDataQuery = {
  __typename?: 'Query'
  product: {
    __typename?: 'Product'
    id: string
    name: string
    yahooAuctionCrawlSetting: {
      __typename?: 'YahooAuctionCrawlSetting'
      id: string
      keyword: string
      categoryId?: number | null
      minPrice: number
      maxPrice: number
      enabled: boolean
      yahooAuctionCrawlSettingExcludeKeywords: Array<{
        __typename?: 'YahooAuctionCrawlSettingExcludeKeyword'
        id: string
        yahooAuctionCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
      yahooAuctionCrawlSettingExcludeProducts: Array<{
        __typename?: 'YahooAuctionCrawlSettingExcludeProduct'
        id: string
        yahooAuctionCrawlSettingId: number
        externalId: string
        createdAt: string
        updatedAt: string
      }>
      yahooAuctionCrawlSettingRequiredKeywords: Array<{
        __typename?: 'YahooAuctionCrawlSettingRequiredKeyword'
        id: string
        yahooAuctionCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
    }
    mercariCrawlSetting: {
      __typename?: 'MercariCrawlSetting'
      id: string
      productId: number
      keyword: string
      categoryId?: number | null
      minPrice: number
      maxPrice: number
      enabled: boolean
      mercariCrawlSettingExcludeKeywords: Array<{
        __typename?: 'MercariCrawlSettingExcludeKeyword'
        id: string
        mercariCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
      mercariCrawlSettingExcludeProducts: Array<{
        __typename?: 'MercariCrawlSettingExcludeProduct'
        id: string
        mercariCrawlSettingId: number
        externalId: string
        createdAt: string
        updatedAt: string
      }>
      mercariCrawlSettingRequiredKeywords: Array<{
        __typename?: 'MercariCrawlSettingRequiredKeyword'
        id: string
        mercariCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
    }
    janparaCrawlSetting: {
      __typename?: 'JanparaCrawlSetting'
      id: string
      productId: number
      keyword: string
      minPrice: number
      maxPrice: number
      enabled: boolean
      janparaCrawlSettingExcludeKeywords: Array<{
        __typename?: 'JanparaCrawlSettingExcludeKeyword'
        id: string
        janparaCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
      janparaCrawlSettingExcludeProducts: Array<{
        __typename?: 'JanparaCrawlSettingExcludeProduct'
        id: string
        janparaCrawlSettingId: number
        externalId: string
        createdAt: string
        updatedAt: string
      }>
      janparaCrawlSettingRequiredKeywords: Array<{
        __typename?: 'JanparaCrawlSettingRequiredKeyword'
        id: string
        janparaCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
    }
    iosysCrawlSetting: {
      __typename?: 'IosysCrawlSetting'
      id: string
      productId: number
      keyword: string
      minPrice: number
      maxPrice: number
      enabled: boolean
      iosysCrawlSettingExcludeKeywords: Array<{
        __typename?: 'IosysCrawlSettingExcludeKeyword'
        id: string
        iosysCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
      iosysCrawlSettingExcludeProducts: Array<{
        __typename?: 'IosysCrawlSettingExcludeProduct'
        id: string
        iosysCrawlSettingId: number
        externalId: string
        createdAt: string
        updatedAt: string
      }>
      iosysCrawlSettingRequiredKeywords: Array<{
        __typename?: 'IosysCrawlSettingRequiredKeyword'
        id: string
        iosysCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
    }
    pcKoubouCrawlSetting: {
      __typename?: 'PcKoubouCrawlSetting'
      id: string
      productId: number
      keyword: string
      minPrice: number
      maxPrice: number
      enabled: boolean
      pcKoubouCrawlSettingExcludeKeywords: Array<{
        __typename?: 'PcKoubouCrawlSettingExcludeKeyword'
        id: string
        pcKoubouCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
      pcKoubouCrawlSettingExcludeProducts: Array<{
        __typename?: 'PcKoubouCrawlSettingExcludeProduct'
        id: string
        pcKoubouCrawlSettingId: number
        externalId: string
        createdAt: string
        updatedAt: string
      }>
      pcKoubouCrawlSettingRequiredKeywords: Array<{
        __typename?: 'PcKoubouCrawlSettingRequiredKeyword'
        id: string
        pcKoubouCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
    }
    usedSofmapCrawlSetting: {
      __typename?: 'UsedSofmapCrawlSetting'
      id: string
      productId: number
      keyword: string
      minPrice: number
      maxPrice: number
      enabled: boolean
      usedSofmapCrawlSettingExcludeKeywords: Array<{
        __typename?: 'UsedSofmapCrawlSettingExcludeKeyword'
        id: string
        usedSofmapCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
      usedSofmapCrawlSettingExcludeProducts: Array<{
        __typename?: 'UsedSofmapCrawlSettingExcludeProduct'
        id: string
        usedSofmapCrawlSettingId: number
        externalId: string
        createdAt: string
        updatedAt: string
      }>
      usedSofmapCrawlSettingRequiredKeywords: Array<{
        __typename?: 'UsedSofmapCrawlSettingRequiredKeyword'
        id: string
        usedSofmapCrawlSettingId: number
        keyword?: string | null
        createdAt: string
        updatedAt: string
      }>
    }
  }
}

export type GetRecommendsPageDataQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}>

export type GetRecommendsPageDataQuery = {
  __typename?: 'Query'
  products: Array<{
    __typename?: 'Product'
    id: string
    name: string
    relatedProducts: Array<{
      __typename?: 'RelatedProduct'
      platform: string
      productId: number
      externalId: string
      name: string
      thumbnailUrl: string
      price: number
      buyoutPrice?: number | null
      published: boolean
      boughtDate?: string | null
      endDate?: string | null
      createdAt: string
      updatedAt: string
    }>
  }>
}

export const CreateProductDocument = gql`
  mutation createProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      ... on CreateProductResultSuccess {
        ok
        product {
          id
          name
        }
      }
      ... on CreateProductResultError {
        ok
        error {
          ... on CreateProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdateProductDocument = gql`
  mutation updateProduct($id: ID!, $input: UpdateProductInput!) {
    updateProduct(id: $id, input: $input) {
      ... on UpdateProductResultSuccess {
        ok
        product {
          id
          name
        }
      }
      ... on UpdateProductResultError {
        ok
        error {
          ... on UpdateProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeleteProductDocument = gql`
  mutation deleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      ... on DeleteProductResultSuccess {
        ok
      }
      ... on DeleteProductResultError {
        ok
        error {
          ... on DeleteProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreateYahooAuctionCrawlSettingExcludeKeywordDocument = gql`
  mutation createYahooAuctionCrawlSettingExcludeKeyword(
    $input: CreateYahooAuctionCrawlSettingExcludeKeywordInput!
  ) {
    createYahooAuctionCrawlSettingExcludeKeyword(input: $input) {
      ... on CreateYahooAuctionCrawlSettingExcludeKeywordResultSuccess {
        ok
        yahooAuctionCrawlSettingExcludeKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on CreateYahooAuctionCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on CreateYahooAuctionCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdateYahooAuctionCrawlSettingExcludeKeywordDocument = gql`
  mutation updateYahooAuctionCrawlSettingExcludeKeyword(
    $input: UpdateYahooAuctionCrawlSettingExcludeKeywordInput!
  ) {
    updateYahooAuctionCrawlSettingExcludeKeyword(input: $input) {
      ... on UpdateYahooAuctionCrawlSettingExcludeKeywordResultSuccess {
        ok
        yahooAuctionCrawlSettingExcludeKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on UpdateYahooAuctionCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on UpdateYahooAuctionCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeleteYahooAuctionCrawlSettingExcludeKeywordDocument = gql`
  mutation deleteYahooAuctionCrawlSettingExcludeKeyword($id: ID!, $productId: ID!) {
    deleteYahooAuctionCrawlSettingExcludeKeyword(id: $id, productId: $productId) {
      ... on DeleteYahooAuctionCrawlSettingExcludeKeywordResultSuccess {
        ok
      }
      ... on DeleteYahooAuctionCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on DeleteYahooAuctionCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreateYahooAuctionCrawlSettingExcludeProductDocument = gql`
  mutation createYahooAuctionCrawlSettingExcludeProduct(
    $input: CreateYahooAuctionCrawlSettingExcludeProductInput!
  ) {
    createYahooAuctionCrawlSettingExcludeProduct(input: $input) {
      ... on CreateYahooAuctionCrawlSettingExcludeProductResultSuccess {
        ok
        yahooAuctionCrawlSettingExcludeProduct {
          id
          externalId
          createdAt
          updatedAt
        }
      }
      ... on CreateYahooAuctionCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on CreateYahooAuctionCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdateYahooAuctionCrawlSettingExcludeProductDocument = gql`
  mutation updateYahooAuctionCrawlSettingExcludeProduct(
    $input: UpdateYahooAuctionCrawlSettingExcludeProductInput!
  ) {
    updateYahooAuctionCrawlSettingExcludeProduct(input: $input) {
      ... on UpdateYahooAuctionCrawlSettingExcludeProductResultSuccess {
        ok
        yahooAuctionCrawlSettingExcludeProduct {
          id
          externalId
          createdAt
          updatedAt
        }
      }
      ... on UpdateYahooAuctionCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on UpdateYahooAuctionCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeleteYahooAuctionCrawlSettingExcludeProductDocument = gql`
  mutation deleteYahooAuctionCrawlSettingExcludeProduct($id: ID!, $productId: ID!) {
    deleteYahooAuctionCrawlSettingExcludeProduct(id: $id, productId: $productId) {
      ... on DeleteYahooAuctionCrawlSettingExcludeProductResultSuccess {
        ok
      }
      ... on DeleteYahooAuctionCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on DeleteYahooAuctionCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreateYahooAuctionCrawlSettingRequiredKeywordDocument = gql`
  mutation createYahooAuctionCrawlSettingRequiredKeyword(
    $input: CreateYahooAuctionCrawlSettingRequiredKeywordInput!
  ) {
    createYahooAuctionCrawlSettingRequiredKeyword(input: $input) {
      ... on CreateYahooAuctionCrawlSettingRequiredKeywordResultSuccess {
        ok
        yahooAuctionCrawlSettingRequiredKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on CreateYahooAuctionCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on CreateYahooAuctionCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdateYahooAuctionCrawlSettingRequiredKeywordDocument = gql`
  mutation updateYahooAuctionCrawlSettingRequiredKeyword(
    $input: UpdateYahooAuctionCrawlSettingRequiredKeywordInput!
  ) {
    updateYahooAuctionCrawlSettingRequiredKeyword(input: $input) {
      ... on UpdateYahooAuctionCrawlSettingRequiredKeywordResultSuccess {
        ok
        yahooAuctionCrawlSettingRequiredKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on UpdateYahooAuctionCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on UpdateYahooAuctionCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeleteYahooAuctionCrawlSettingRequiredKeywordDocument = gql`
  mutation deleteYahooAuctionCrawlSettingRequiredKeyword($id: ID!, $productId: ID!) {
    deleteYahooAuctionCrawlSettingRequiredKeyword(id: $id, productId: $productId) {
      ... on DeleteYahooAuctionCrawlSettingRequiredKeywordResultSuccess {
        ok
      }
      ... on DeleteYahooAuctionCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on DeleteYahooAuctionCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreateMercariCrawlSettingExcludeKeywordDocument = gql`
  mutation createMercariCrawlSettingExcludeKeyword(
    $input: CreateMercariCrawlSettingExcludeKeywordInput!
  ) {
    createMercariCrawlSettingExcludeKeyword(input: $input) {
      ... on CreateMercariCrawlSettingExcludeKeywordResultSuccess {
        ok
        mercariCrawlSettingExcludeKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on CreateMercariCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on CreateMercariCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdateMercariCrawlSettingExcludeKeywordDocument = gql`
  mutation updateMercariCrawlSettingExcludeKeyword(
    $input: UpdateMercariCrawlSettingExcludeKeywordInput!
  ) {
    updateMercariCrawlSettingExcludeKeyword(input: $input) {
      ... on UpdateMercariCrawlSettingExcludeKeywordResultSuccess {
        ok
        mercariCrawlSettingExcludeKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on UpdateMercariCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on UpdateMercariCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeleteMercariCrawlSettingExcludeKeywordDocument = gql`
  mutation deleteMercariCrawlSettingExcludeKeyword($id: ID!, $productId: ID!) {
    deleteMercariCrawlSettingExcludeKeyword(id: $id, productId: $productId) {
      ... on DeleteMercariCrawlSettingExcludeKeywordResultSuccess {
        ok
      }
      ... on DeleteMercariCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on DeleteMercariCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreateMercariCrawlSettingExcludeProductDocument = gql`
  mutation createMercariCrawlSettingExcludeProduct(
    $input: CreateMercariCrawlSettingExcludeProductInput!
  ) {
    createMercariCrawlSettingExcludeProduct(input: $input) {
      ... on CreateMercariCrawlSettingExcludeProductResultSuccess {
        ok
        mercariCrawlSettingExcludeProduct {
          id
          externalId
          createdAt
          updatedAt
        }
      }
      ... on CreateMercariCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on CreateMercariCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdateMercariCrawlSettingExcludeProductDocument = gql`
  mutation updateMercariCrawlSettingExcludeProduct(
    $input: UpdateMercariCrawlSettingExcludeProductInput!
  ) {
    updateMercariCrawlSettingExcludeProduct(input: $input) {
      ... on UpdateMercariCrawlSettingExcludeProductResultSuccess {
        ok
        mercariCrawlSettingExcludeProduct {
          id
          externalId
          createdAt
          updatedAt
        }
      }
      ... on UpdateMercariCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on UpdateMercariCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeleteMercariCrawlSettingExcludeProductDocument = gql`
  mutation deleteMercariCrawlSettingExcludeProduct($id: ID!, $productId: ID!) {
    deleteMercariCrawlSettingExcludeProduct(id: $id, productId: $productId) {
      ... on DeleteMercariCrawlSettingExcludeProductResultSuccess {
        ok
      }
      ... on DeleteMercariCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on DeleteMercariCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreateMercariCrawlSettingRequiredKeywordDocument = gql`
  mutation createMercariCrawlSettingRequiredKeyword(
    $input: CreateMercariCrawlSettingRequiredKeywordInput!
  ) {
    createMercariCrawlSettingRequiredKeyword(input: $input) {
      ... on CreateMercariCrawlSettingRequiredKeywordResultSuccess {
        ok
        mercariCrawlSettingRequiredKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on CreateMercariCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on CreateMercariCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdateMercariCrawlSettingRequiredKeywordDocument = gql`
  mutation updateMercariCrawlSettingRequiredKeyword(
    $input: UpdateMercariCrawlSettingRequiredKeywordInput!
  ) {
    updateMercariCrawlSettingRequiredKeyword(input: $input) {
      ... on UpdateMercariCrawlSettingRequiredKeywordResultSuccess {
        ok
        mercariCrawlSettingRequiredKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on UpdateMercariCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on UpdateMercariCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeleteMercariCrawlSettingRequiredKeywordDocument = gql`
  mutation deleteMercariCrawlSettingRequiredKeyword($id: ID!, $productId: ID!) {
    deleteMercariCrawlSettingRequiredKeyword(id: $id, productId: $productId) {
      ... on DeleteMercariCrawlSettingRequiredKeywordResultSuccess {
        ok
      }
      ... on DeleteMercariCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on DeleteMercariCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreateJanparaCrawlSettingExcludeKeywordDocument = gql`
  mutation createJanparaCrawlSettingExcludeKeyword(
    $input: CreateJanparaCrawlSettingExcludeKeywordInput!
  ) {
    createJanparaCrawlSettingExcludeKeyword(input: $input) {
      ... on CreateJanparaCrawlSettingExcludeKeywordResultSuccess {
        ok
        janparaCrawlSettingExcludeKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on CreateJanparaCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on CreateJanparaCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdateJanparaCrawlSettingExcludeKeywordDocument = gql`
  mutation updateJanparaCrawlSettingExcludeKeyword(
    $input: UpdateJanparaCrawlSettingExcludeKeywordInput!
  ) {
    updateJanparaCrawlSettingExcludeKeyword(input: $input) {
      ... on UpdateJanparaCrawlSettingExcludeKeywordResultSuccess {
        ok
        janparaCrawlSettingExcludeKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on UpdateJanparaCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on UpdateJanparaCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeleteJanparaCrawlSettingExcludeKeywordDocument = gql`
  mutation deleteJanparaCrawlSettingExcludeKeyword($id: ID!, $productId: ID!) {
    deleteJanparaCrawlSettingExcludeKeyword(id: $id, productId: $productId) {
      ... on DeleteJanparaCrawlSettingExcludeKeywordResultSuccess {
        ok
      }
      ... on DeleteJanparaCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on DeleteJanparaCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreateJanparaCrawlSettingExcludeProductDocument = gql`
  mutation createJanparaCrawlSettingExcludeProduct(
    $input: CreateJanparaCrawlSettingExcludeProductInput!
  ) {
    createJanparaCrawlSettingExcludeProduct(input: $input) {
      ... on CreateJanparaCrawlSettingExcludeProductResultSuccess {
        ok
        janparaCrawlSettingExcludeProduct {
          id
          externalId
          createdAt
          updatedAt
        }
      }
      ... on CreateJanparaCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on CreateJanparaCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdateJanparaCrawlSettingExcludeProductDocument = gql`
  mutation updateJanparaCrawlSettingExcludeProduct(
    $input: UpdateJanparaCrawlSettingExcludeProductInput!
  ) {
    updateJanparaCrawlSettingExcludeProduct(input: $input) {
      ... on UpdateJanparaCrawlSettingExcludeProductResultSuccess {
        ok
        janparaCrawlSettingExcludeProduct {
          id
          externalId
          createdAt
          updatedAt
        }
      }
      ... on UpdateJanparaCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on UpdateJanparaCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeleteJanparaCrawlSettingExcludeProductDocument = gql`
  mutation deleteJanparaCrawlSettingExcludeProduct($id: ID!, $productId: ID!) {
    deleteJanparaCrawlSettingExcludeProduct(id: $id, productId: $productId) {
      ... on DeleteJanparaCrawlSettingExcludeProductResultSuccess {
        ok
      }
      ... on DeleteJanparaCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on DeleteJanparaCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreateJanparaCrawlSettingRequiredKeywordDocument = gql`
  mutation createJanparaCrawlSettingRequiredKeyword(
    $input: CreateJanparaCrawlSettingRequiredKeywordInput!
  ) {
    createJanparaCrawlSettingRequiredKeyword(input: $input) {
      ... on CreateJanparaCrawlSettingRequiredKeywordResultSuccess {
        ok
        janparaCrawlSettingRequiredKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on CreateJanparaCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on CreateJanparaCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdateJanparaCrawlSettingRequiredKeywordDocument = gql`
  mutation updateJanparaCrawlSettingRequiredKeyword(
    $input: UpdateJanparaCrawlSettingRequiredKeywordInput!
  ) {
    updateJanparaCrawlSettingRequiredKeyword(input: $input) {
      ... on UpdateJanparaCrawlSettingRequiredKeywordResultSuccess {
        ok
        janparaCrawlSettingRequiredKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on UpdateJanparaCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on UpdateJanparaCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeleteJanparaCrawlSettingRequiredKeywordDocument = gql`
  mutation deleteJanparaCrawlSettingRequiredKeyword($id: ID!, $productId: ID!) {
    deleteJanparaCrawlSettingRequiredKeyword(id: $id, productId: $productId) {
      ... on DeleteJanparaCrawlSettingRequiredKeywordResultSuccess {
        ok
      }
      ... on DeleteJanparaCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on DeleteJanparaCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreateIosysCrawlSettingExcludeKeywordDocument = gql`
  mutation createIosysCrawlSettingExcludeKeyword(
    $input: CreateIosysCrawlSettingExcludeKeywordInput!
  ) {
    createIosysCrawlSettingExcludeKeyword(input: $input) {
      ... on CreateIosysCrawlSettingExcludeKeywordResultSuccess {
        ok
        iosysCrawlSettingExcludeKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on CreateIosysCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on CreateIosysCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdateIosysCrawlSettingExcludeKeywordDocument = gql`
  mutation updateIosysCrawlSettingExcludeKeyword(
    $input: UpdateIosysCrawlSettingExcludeKeywordInput!
  ) {
    updateIosysCrawlSettingExcludeKeyword(input: $input) {
      ... on UpdateIosysCrawlSettingExcludeKeywordResultSuccess {
        ok
        iosysCrawlSettingExcludeKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on UpdateIosysCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on UpdateIosysCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeleteIosysCrawlSettingExcludeKeywordDocument = gql`
  mutation deleteIosysCrawlSettingExcludeKeyword($id: ID!, $productId: ID!) {
    deleteIosysCrawlSettingExcludeKeyword(id: $id, productId: $productId) {
      ... on DeleteIosysCrawlSettingExcludeKeywordResultSuccess {
        ok
      }
      ... on DeleteIosysCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on DeleteIosysCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreateIosysCrawlSettingExcludeProductDocument = gql`
  mutation createIosysCrawlSettingExcludeProduct(
    $input: CreateIosysCrawlSettingExcludeProductInput!
  ) {
    createIosysCrawlSettingExcludeProduct(input: $input) {
      ... on CreateIosysCrawlSettingExcludeProductResultSuccess {
        ok
        iosysCrawlSettingExcludeProduct {
          id
          externalId
          createdAt
          updatedAt
        }
      }
      ... on CreateIosysCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on CreateIosysCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdateIosysCrawlSettingExcludeProductDocument = gql`
  mutation updateIosysCrawlSettingExcludeProduct(
    $input: UpdateIosysCrawlSettingExcludeProductInput!
  ) {
    updateIosysCrawlSettingExcludeProduct(input: $input) {
      ... on UpdateIosysCrawlSettingExcludeProductResultSuccess {
        ok
        iosysCrawlSettingExcludeProduct {
          id
          externalId
          createdAt
          updatedAt
        }
      }
      ... on UpdateIosysCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on UpdateIosysCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeleteIosysCrawlSettingExcludeProductDocument = gql`
  mutation deleteIosysCrawlSettingExcludeProduct($id: ID!, $productId: ID!) {
    deleteIosysCrawlSettingExcludeProduct(id: $id, productId: $productId) {
      ... on DeleteIosysCrawlSettingExcludeProductResultSuccess {
        ok
      }
      ... on DeleteIosysCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on DeleteIosysCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreateIosysCrawlSettingRequiredKeywordDocument = gql`
  mutation createIosysCrawlSettingRequiredKeyword(
    $input: CreateIosysCrawlSettingRequiredKeywordInput!
  ) {
    createIosysCrawlSettingRequiredKeyword(input: $input) {
      ... on CreateIosysCrawlSettingRequiredKeywordResultSuccess {
        ok
        iosysCrawlSettingRequiredKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on CreateIosysCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on CreateIosysCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdateIosysCrawlSettingRequiredKeywordDocument = gql`
  mutation updateIosysCrawlSettingRequiredKeyword(
    $input: UpdateIosysCrawlSettingRequiredKeywordInput!
  ) {
    updateIosysCrawlSettingRequiredKeyword(input: $input) {
      ... on UpdateIosysCrawlSettingRequiredKeywordResultSuccess {
        ok
        iosysCrawlSettingRequiredKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on UpdateIosysCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on UpdateIosysCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeleteIosysCrawlSettingRequiredKeywordDocument = gql`
  mutation deleteIosysCrawlSettingRequiredKeyword($id: ID!, $productId: ID!) {
    deleteIosysCrawlSettingRequiredKeyword(id: $id, productId: $productId) {
      ... on DeleteIosysCrawlSettingRequiredKeywordResultSuccess {
        ok
      }
      ... on DeleteIosysCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on DeleteIosysCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreatePcKoubouCrawlSettingExcludeKeywordDocument = gql`
  mutation createPcKoubouCrawlSettingExcludeKeyword(
    $input: CreatePcKoubouCrawlSettingExcludeKeywordInput!
  ) {
    createPcKoubouCrawlSettingExcludeKeyword(input: $input) {
      ... on CreatePcKoubouCrawlSettingExcludeKeywordResultSuccess {
        ok
        pcKoubouCrawlSettingExcludeKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on CreatePcKoubouCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on CreatePcKoubouCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdatePcKoubouCrawlSettingExcludeKeywordDocument = gql`
  mutation updatePcKoubouCrawlSettingExcludeKeyword(
    $input: UpdatePcKoubouCrawlSettingExcludeKeywordInput!
  ) {
    updatePcKoubouCrawlSettingExcludeKeyword(input: $input) {
      ... on UpdatePcKoubouCrawlSettingExcludeKeywordResultSuccess {
        ok
        pcKoubouCrawlSettingExcludeKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on UpdatePcKoubouCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on UpdatePcKoubouCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeletePcKoubouCrawlSettingExcludeKeywordDocument = gql`
  mutation deletePcKoubouCrawlSettingExcludeKeyword($id: ID!, $productId: ID!) {
    deletePcKoubouCrawlSettingExcludeKeyword(id: $id, productId: $productId) {
      ... on DeletePcKoubouCrawlSettingExcludeKeywordResultSuccess {
        ok
      }
      ... on DeletePcKoubouCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on DeletePcKoubouCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreatePcKoubouCrawlSettingExcludeProductDocument = gql`
  mutation createPcKoubouCrawlSettingExcludeProduct(
    $input: CreatePcKoubouCrawlSettingExcludeProductInput!
  ) {
    createPcKoubouCrawlSettingExcludeProduct(input: $input) {
      ... on CreatePcKoubouCrawlSettingExcludeProductResultSuccess {
        ok
        pcKoubouCrawlSettingExcludeProduct {
          id
          externalId
          createdAt
          updatedAt
        }
      }
      ... on CreatePcKoubouCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on CreatePcKoubouCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdatePcKoubouCrawlSettingExcludeProductDocument = gql`
  mutation updatePcKoubouCrawlSettingExcludeProduct(
    $input: UpdatePcKoubouCrawlSettingExcludeProductInput!
  ) {
    updatePcKoubouCrawlSettingExcludeProduct(input: $input) {
      ... on UpdatePcKoubouCrawlSettingExcludeProductResultSuccess {
        ok
        pcKoubouCrawlSettingExcludeProduct {
          id
          externalId
          createdAt
          updatedAt
        }
      }
      ... on UpdatePcKoubouCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on UpdatePcKoubouCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeletePcKoubouCrawlSettingExcludeProductDocument = gql`
  mutation deletePcKoubouCrawlSettingExcludeProduct($id: ID!, $productId: ID!) {
    deletePcKoubouCrawlSettingExcludeProduct(id: $id, productId: $productId) {
      ... on DeletePcKoubouCrawlSettingExcludeProductResultSuccess {
        ok
      }
      ... on DeletePcKoubouCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on DeletePcKoubouCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreatePcKoubouCrawlSettingRequiredKeywordDocument = gql`
  mutation createPcKoubouCrawlSettingRequiredKeyword(
    $input: CreatePcKoubouCrawlSettingRequiredKeywordInput!
  ) {
    createPcKoubouCrawlSettingRequiredKeyword(input: $input) {
      ... on CreatePcKoubouCrawlSettingRequiredKeywordResultSuccess {
        ok
        pcKoubouCrawlSettingRequiredKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on CreatePcKoubouCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on CreatePcKoubouCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdatePcKoubouCrawlSettingRequiredKeywordDocument = gql`
  mutation updatePcKoubouCrawlSettingRequiredKeyword(
    $input: UpdatePcKoubouCrawlSettingRequiredKeywordInput!
  ) {
    updatePcKoubouCrawlSettingRequiredKeyword(input: $input) {
      ... on UpdatePcKoubouCrawlSettingRequiredKeywordResultSuccess {
        ok
        pcKoubouCrawlSettingRequiredKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on UpdatePcKoubouCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on UpdatePcKoubouCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeletePcKoubouCrawlSettingRequiredKeywordDocument = gql`
  mutation deletePcKoubouCrawlSettingRequiredKeyword($id: ID!, $productId: ID!) {
    deletePcKoubouCrawlSettingRequiredKeyword(id: $id, productId: $productId) {
      ... on DeletePcKoubouCrawlSettingRequiredKeywordResultSuccess {
        ok
      }
      ... on DeletePcKoubouCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on DeletePcKoubouCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreateUsedSofmapCrawlSettingExcludeKeywordDocument = gql`
  mutation createUsedSofmapCrawlSettingExcludeKeyword(
    $input: CreateUsedSofmapCrawlSettingExcludeKeywordInput!
  ) {
    createUsedSofmapCrawlSettingExcludeKeyword(input: $input) {
      ... on CreateUsedSofmapCrawlSettingExcludeKeywordResultSuccess {
        ok
        usedSofmapCrawlSettingExcludeKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on CreateUsedSofmapCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on CreateUsedSofmapCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdateUsedSofmapCrawlSettingExcludeKeywordDocument = gql`
  mutation updateUsedSofmapCrawlSettingExcludeKeyword(
    $input: UpdateUsedSofmapCrawlSettingExcludeKeywordInput!
  ) {
    updateUsedSofmapCrawlSettingExcludeKeyword(input: $input) {
      ... on UpdateUsedSofmapCrawlSettingExcludeKeywordResultSuccess {
        ok
        usedSofmapCrawlSettingExcludeKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on UpdateUsedSofmapCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on UpdateUsedSofmapCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeleteUsedSofmapCrawlSettingExcludeKeywordDocument = gql`
  mutation deleteUsedSofmapCrawlSettingExcludeKeyword($id: ID!, $productId: ID!) {
    deleteUsedSofmapCrawlSettingExcludeKeyword(id: $id, productId: $productId) {
      ... on DeleteUsedSofmapCrawlSettingExcludeKeywordResultSuccess {
        ok
      }
      ... on DeleteUsedSofmapCrawlSettingExcludeKeywordResultError {
        ok
        error {
          ... on DeleteUsedSofmapCrawlSettingExcludeKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreateUsedSofmapCrawlSettingExcludeProductDocument = gql`
  mutation createUsedSofmapCrawlSettingExcludeProduct(
    $input: CreateUsedSofmapCrawlSettingExcludeProductInput!
  ) {
    createUsedSofmapCrawlSettingExcludeProduct(input: $input) {
      ... on CreateUsedSofmapCrawlSettingExcludeProductResultSuccess {
        ok
        usedSofmapCrawlSettingExcludeProduct {
          id
          externalId
          createdAt
          updatedAt
        }
      }
      ... on CreateUsedSofmapCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on CreateUsedSofmapCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdateUsedSofmapCrawlSettingExcludeProductDocument = gql`
  mutation updateUsedSofmapCrawlSettingExcludeProduct(
    $input: UpdateUsedSofmapCrawlSettingExcludeProductInput!
  ) {
    updateUsedSofmapCrawlSettingExcludeProduct(input: $input) {
      ... on UpdateUsedSofmapCrawlSettingExcludeProductResultSuccess {
        ok
        usedSofmapCrawlSettingExcludeProduct {
          id
          externalId
          createdAt
          updatedAt
        }
      }
      ... on UpdateUsedSofmapCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on UpdateUsedSofmapCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeleteUsedSofmapCrawlSettingExcludeProductDocument = gql`
  mutation deleteUsedSofmapCrawlSettingExcludeProduct($id: ID!, $productId: ID!) {
    deleteUsedSofmapCrawlSettingExcludeProduct(id: $id, productId: $productId) {
      ... on DeleteUsedSofmapCrawlSettingExcludeProductResultSuccess {
        ok
      }
      ... on DeleteUsedSofmapCrawlSettingExcludeProductResultError {
        ok
        error {
          ... on DeleteUsedSofmapCrawlSettingExcludeProductResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const CreateUsedSofmapCrawlSettingRequiredKeywordDocument = gql`
  mutation createUsedSofmapCrawlSettingRequiredKeyword(
    $input: CreateUsedSofmapCrawlSettingRequiredKeywordInput!
  ) {
    createUsedSofmapCrawlSettingRequiredKeyword(input: $input) {
      ... on CreateUsedSofmapCrawlSettingRequiredKeywordResultSuccess {
        ok
        usedSofmapCrawlSettingRequiredKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on CreateUsedSofmapCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on CreateUsedSofmapCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const UpdateUsedSofmapCrawlSettingRequiredKeywordDocument = gql`
  mutation updateUsedSofmapCrawlSettingRequiredKeyword(
    $input: UpdateUsedSofmapCrawlSettingRequiredKeywordInput!
  ) {
    updateUsedSofmapCrawlSettingRequiredKeyword(input: $input) {
      ... on UpdateUsedSofmapCrawlSettingRequiredKeywordResultSuccess {
        ok
        usedSofmapCrawlSettingRequiredKeyword {
          id
          keyword
          createdAt
          updatedAt
        }
      }
      ... on UpdateUsedSofmapCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on UpdateUsedSofmapCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const DeleteUsedSofmapCrawlSettingRequiredKeywordDocument = gql`
  mutation deleteUsedSofmapCrawlSettingRequiredKeyword($id: ID!, $productId: ID!) {
    deleteUsedSofmapCrawlSettingRequiredKeyword(id: $id, productId: $productId) {
      ... on DeleteUsedSofmapCrawlSettingRequiredKeywordResultSuccess {
        ok
      }
      ... on DeleteUsedSofmapCrawlSettingRequiredKeywordResultError {
        ok
        error {
          ... on DeleteUsedSofmapCrawlSettingRequiredKeywordResultValidationFailed {
            code
            message
            details {
              field
              message
            }
          }
        }
      }
    }
  }
`
export const GetProductPageDataDocument = gql`
  query getProductPageData($id: ID, $name: String) {
    products(id: $id, name: $name) {
      id
      name
      yahooAuctionCrawlSetting {
        id
        productId
        keyword
        categoryId
        minPrice
        maxPrice
        enabled
      }
      mercariCrawlSetting {
        id
        productId
        keyword
        categoryId
        minPrice
        maxPrice
        enabled
      }
      janparaCrawlSetting {
        id
        productId
        keyword
        minPrice
        maxPrice
        enabled
      }
      iosysCrawlSetting {
        id
        productId
        keyword
        minPrice
        maxPrice
        enabled
      }
      pcKoubouCrawlSetting {
        id
        productId
        keyword
        minPrice
        maxPrice
        enabled
      }
      usedSofmapCrawlSetting {
        id
        productId
        keyword
        minPrice
        maxPrice
        enabled
      }
    }
  }
`
export const GetProductDetailPageDataDocument = gql`
  query getProductDetailPageData(
    $id: ID!
    $platformMask: String!
    $page: Int
    $per: Int
    $sort: String
    $order: String
  ) {
    product(id: $id) {
      id
      name
      yahooAuctionCrawlSetting {
        id
        keyword
        categoryId
        minPrice
        maxPrice
        enabled
        yahooAuctionCrawlSettingExcludeKeywords {
          id
          yahooAuctionCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
        yahooAuctionCrawlSettingExcludeProducts {
          id
          yahooAuctionCrawlSettingId
          externalId
          createdAt
          updatedAt
        }
        yahooAuctionCrawlSettingRequiredKeywords {
          id
          yahooAuctionCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
      }
      yahooAuctionDailyPurchaseSummaries {
        id
        productId
        averagePurchasePrice
        purchaseCount
        date
        createdAt
        updatedAt
      }
      yahooFleamarketDailyPurchaseSummaries {
        id
        productId
        averagePurchasePrice
        purchaseCount
        date
        createdAt
        updatedAt
      }
      mercariCrawlSetting {
        id
        productId
        keyword
        categoryId
        minPrice
        maxPrice
        enabled
        mercariCrawlSettingExcludeKeywords {
          id
          mercariCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
        mercariCrawlSettingExcludeProducts {
          id
          mercariCrawlSettingId
          externalId
          createdAt
          updatedAt
        }
        mercariCrawlSettingRequiredKeywords {
          id
          mercariCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
      }
      mercariDailyPurchaseSummaries {
        id
        productId
        averagePurchasePrice
        purchaseCount
        date
        createdAt
        updatedAt
      }
      janparaCrawlSetting {
        id
        productId
        keyword
        minPrice
        maxPrice
        enabled
        janparaCrawlSettingExcludeKeywords {
          id
          janparaCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
        janparaCrawlSettingExcludeProducts {
          id
          janparaCrawlSettingId
          externalId
          createdAt
          updatedAt
        }
        janparaCrawlSettingRequiredKeywords {
          id
          janparaCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
      }
      iosysCrawlSetting {
        id
        productId
        keyword
        minPrice
        maxPrice
        enabled
        iosysCrawlSettingExcludeKeywords {
          id
          iosysCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
        iosysCrawlSettingExcludeProducts {
          id
          iosysCrawlSettingId
          externalId
          createdAt
          updatedAt
        }
        iosysCrawlSettingRequiredKeywords {
          id
          iosysCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
      }
      pcKoubouCrawlSetting {
        id
        productId
        keyword
        minPrice
        maxPrice
        enabled
        pcKoubouCrawlSettingExcludeKeywords {
          id
          pcKoubouCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
        pcKoubouCrawlSettingExcludeProducts {
          id
          pcKoubouCrawlSettingId
          externalId
          createdAt
          updatedAt
        }
        pcKoubouCrawlSettingRequiredKeywords {
          id
          pcKoubouCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
      }
      usedSofmapCrawlSetting {
        id
        productId
        keyword
        minPrice
        maxPrice
        enabled
        usedSofmapCrawlSettingExcludeKeywords {
          id
          usedSofmapCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
        usedSofmapCrawlSettingExcludeProducts {
          id
          usedSofmapCrawlSettingId
          externalId
          createdAt
          updatedAt
        }
        usedSofmapCrawlSettingRequiredKeywords {
          id
          usedSofmapCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
      }
      relatedProducts(
        platformMask: $platformMask
        page: $page
        per: $per
        sort: $sort
        order: $order
      ) {
        platform
        productId
        externalId
        name
        thumbnailUrl
        price
        buyoutPrice
        published
        boughtDate
        endDate
        createdAt
        updatedAt
      }
    }
  }
`
export const GetProductSettingPageDataDocument = gql`
  query getProductSettingPageData($id: ID!) {
    product(id: $id) {
      id
      name
      yahooAuctionCrawlSetting {
        id
        keyword
        categoryId
        minPrice
        maxPrice
        enabled
        yahooAuctionCrawlSettingExcludeKeywords {
          id
          yahooAuctionCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
        yahooAuctionCrawlSettingExcludeProducts {
          id
          yahooAuctionCrawlSettingId
          externalId
          createdAt
          updatedAt
        }
        yahooAuctionCrawlSettingRequiredKeywords {
          id
          yahooAuctionCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
      }
      mercariCrawlSetting {
        id
        productId
        keyword
        categoryId
        minPrice
        maxPrice
        enabled
        mercariCrawlSettingExcludeKeywords {
          id
          mercariCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
        mercariCrawlSettingExcludeProducts {
          id
          mercariCrawlSettingId
          externalId
          createdAt
          updatedAt
        }
        mercariCrawlSettingRequiredKeywords {
          id
          mercariCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
      }
      janparaCrawlSetting {
        id
        productId
        keyword
        minPrice
        maxPrice
        enabled
        janparaCrawlSettingExcludeKeywords {
          id
          janparaCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
        janparaCrawlSettingExcludeProducts {
          id
          janparaCrawlSettingId
          externalId
          createdAt
          updatedAt
        }
        janparaCrawlSettingRequiredKeywords {
          id
          janparaCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
      }
      iosysCrawlSetting {
        id
        productId
        keyword
        minPrice
        maxPrice
        enabled
        iosysCrawlSettingExcludeKeywords {
          id
          iosysCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
        iosysCrawlSettingExcludeProducts {
          id
          iosysCrawlSettingId
          externalId
          createdAt
          updatedAt
        }
        iosysCrawlSettingRequiredKeywords {
          id
          iosysCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
      }
      pcKoubouCrawlSetting {
        id
        productId
        keyword
        minPrice
        maxPrice
        enabled
        pcKoubouCrawlSettingExcludeKeywords {
          id
          pcKoubouCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
        pcKoubouCrawlSettingExcludeProducts {
          id
          pcKoubouCrawlSettingId
          externalId
          createdAt
          updatedAt
        }
        pcKoubouCrawlSettingRequiredKeywords {
          id
          pcKoubouCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
      }
      usedSofmapCrawlSetting {
        id
        productId
        keyword
        minPrice
        maxPrice
        enabled
        usedSofmapCrawlSettingExcludeKeywords {
          id
          usedSofmapCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
        usedSofmapCrawlSettingExcludeProducts {
          id
          usedSofmapCrawlSettingId
          externalId
          createdAt
          updatedAt
        }
        usedSofmapCrawlSettingRequiredKeywords {
          id
          usedSofmapCrawlSettingId
          keyword
          createdAt
          updatedAt
        }
      }
    }
  }
`
export const GetRecommendsPageDataDocument = gql`
  query getRecommendsPageData($id: ID, $name: String) {
    products(id: $id, name: $name) {
      id
      name
      relatedProducts(
        platformMask: "yahoo_auction.buyable,yahoo_fleamarket.published,mercari.published,janpara.all,iosys.all,pc_koubou.all,used_sofmap.all"
        page: 1
        per: 10
        sort: "price"
        order: "asc"
      ) {
        platform
        productId
        externalId
        name
        thumbnailUrl
        price
        buyoutPrice
        published
        boughtDate
        endDate
        createdAt
        updatedAt
      }
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) =>
  action()

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createProduct(
      variables: CreateProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateProductMutation>(CreateProductDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'createProduct',
        'mutation',
        variables,
      )
    },
    updateProduct(
      variables: UpdateProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateProductMutation>(UpdateProductDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'updateProduct',
        'mutation',
        variables,
      )
    },
    deleteProduct(
      variables: DeleteProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteProductMutation>(DeleteProductDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'deleteProduct',
        'mutation',
        variables,
      )
    },
    createYahooAuctionCrawlSettingExcludeKeyword(
      variables: CreateYahooAuctionCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateYahooAuctionCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateYahooAuctionCrawlSettingExcludeKeywordMutation>(
            CreateYahooAuctionCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createYahooAuctionCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    updateYahooAuctionCrawlSettingExcludeKeyword(
      variables: UpdateYahooAuctionCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateYahooAuctionCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateYahooAuctionCrawlSettingExcludeKeywordMutation>(
            UpdateYahooAuctionCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateYahooAuctionCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    deleteYahooAuctionCrawlSettingExcludeKeyword(
      variables: DeleteYahooAuctionCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteYahooAuctionCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteYahooAuctionCrawlSettingExcludeKeywordMutation>(
            DeleteYahooAuctionCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteYahooAuctionCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    createYahooAuctionCrawlSettingExcludeProduct(
      variables: CreateYahooAuctionCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateYahooAuctionCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateYahooAuctionCrawlSettingExcludeProductMutation>(
            CreateYahooAuctionCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createYahooAuctionCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    updateYahooAuctionCrawlSettingExcludeProduct(
      variables: UpdateYahooAuctionCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateYahooAuctionCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateYahooAuctionCrawlSettingExcludeProductMutation>(
            UpdateYahooAuctionCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateYahooAuctionCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    deleteYahooAuctionCrawlSettingExcludeProduct(
      variables: DeleteYahooAuctionCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteYahooAuctionCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteYahooAuctionCrawlSettingExcludeProductMutation>(
            DeleteYahooAuctionCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteYahooAuctionCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    createYahooAuctionCrawlSettingRequiredKeyword(
      variables: CreateYahooAuctionCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateYahooAuctionCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateYahooAuctionCrawlSettingRequiredKeywordMutation>(
            CreateYahooAuctionCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createYahooAuctionCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    updateYahooAuctionCrawlSettingRequiredKeyword(
      variables: UpdateYahooAuctionCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateYahooAuctionCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateYahooAuctionCrawlSettingRequiredKeywordMutation>(
            UpdateYahooAuctionCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateYahooAuctionCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    deleteYahooAuctionCrawlSettingRequiredKeyword(
      variables: DeleteYahooAuctionCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteYahooAuctionCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteYahooAuctionCrawlSettingRequiredKeywordMutation>(
            DeleteYahooAuctionCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteYahooAuctionCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    createMercariCrawlSettingExcludeKeyword(
      variables: CreateMercariCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateMercariCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateMercariCrawlSettingExcludeKeywordMutation>(
            CreateMercariCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createMercariCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    updateMercariCrawlSettingExcludeKeyword(
      variables: UpdateMercariCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateMercariCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateMercariCrawlSettingExcludeKeywordMutation>(
            UpdateMercariCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateMercariCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    deleteMercariCrawlSettingExcludeKeyword(
      variables: DeleteMercariCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteMercariCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteMercariCrawlSettingExcludeKeywordMutation>(
            DeleteMercariCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteMercariCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    createMercariCrawlSettingExcludeProduct(
      variables: CreateMercariCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateMercariCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateMercariCrawlSettingExcludeProductMutation>(
            CreateMercariCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createMercariCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    updateMercariCrawlSettingExcludeProduct(
      variables: UpdateMercariCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateMercariCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateMercariCrawlSettingExcludeProductMutation>(
            UpdateMercariCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateMercariCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    deleteMercariCrawlSettingExcludeProduct(
      variables: DeleteMercariCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteMercariCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteMercariCrawlSettingExcludeProductMutation>(
            DeleteMercariCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteMercariCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    createMercariCrawlSettingRequiredKeyword(
      variables: CreateMercariCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateMercariCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateMercariCrawlSettingRequiredKeywordMutation>(
            CreateMercariCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createMercariCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    updateMercariCrawlSettingRequiredKeyword(
      variables: UpdateMercariCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateMercariCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateMercariCrawlSettingRequiredKeywordMutation>(
            UpdateMercariCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateMercariCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    deleteMercariCrawlSettingRequiredKeyword(
      variables: DeleteMercariCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteMercariCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteMercariCrawlSettingRequiredKeywordMutation>(
            DeleteMercariCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteMercariCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    createJanparaCrawlSettingExcludeKeyword(
      variables: CreateJanparaCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateJanparaCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateJanparaCrawlSettingExcludeKeywordMutation>(
            CreateJanparaCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createJanparaCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    updateJanparaCrawlSettingExcludeKeyword(
      variables: UpdateJanparaCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateJanparaCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateJanparaCrawlSettingExcludeKeywordMutation>(
            UpdateJanparaCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateJanparaCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    deleteJanparaCrawlSettingExcludeKeyword(
      variables: DeleteJanparaCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteJanparaCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteJanparaCrawlSettingExcludeKeywordMutation>(
            DeleteJanparaCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteJanparaCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    createJanparaCrawlSettingExcludeProduct(
      variables: CreateJanparaCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateJanparaCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateJanparaCrawlSettingExcludeProductMutation>(
            CreateJanparaCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createJanparaCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    updateJanparaCrawlSettingExcludeProduct(
      variables: UpdateJanparaCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateJanparaCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateJanparaCrawlSettingExcludeProductMutation>(
            UpdateJanparaCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateJanparaCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    deleteJanparaCrawlSettingExcludeProduct(
      variables: DeleteJanparaCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteJanparaCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteJanparaCrawlSettingExcludeProductMutation>(
            DeleteJanparaCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteJanparaCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    createJanparaCrawlSettingRequiredKeyword(
      variables: CreateJanparaCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateJanparaCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateJanparaCrawlSettingRequiredKeywordMutation>(
            CreateJanparaCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createJanparaCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    updateJanparaCrawlSettingRequiredKeyword(
      variables: UpdateJanparaCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateJanparaCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateJanparaCrawlSettingRequiredKeywordMutation>(
            UpdateJanparaCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateJanparaCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    deleteJanparaCrawlSettingRequiredKeyword(
      variables: DeleteJanparaCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteJanparaCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteJanparaCrawlSettingRequiredKeywordMutation>(
            DeleteJanparaCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteJanparaCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    createIosysCrawlSettingExcludeKeyword(
      variables: CreateIosysCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateIosysCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateIosysCrawlSettingExcludeKeywordMutation>(
            CreateIosysCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createIosysCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    updateIosysCrawlSettingExcludeKeyword(
      variables: UpdateIosysCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateIosysCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateIosysCrawlSettingExcludeKeywordMutation>(
            UpdateIosysCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateIosysCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    deleteIosysCrawlSettingExcludeKeyword(
      variables: DeleteIosysCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteIosysCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteIosysCrawlSettingExcludeKeywordMutation>(
            DeleteIosysCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteIosysCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    createIosysCrawlSettingExcludeProduct(
      variables: CreateIosysCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateIosysCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateIosysCrawlSettingExcludeProductMutation>(
            CreateIosysCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createIosysCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    updateIosysCrawlSettingExcludeProduct(
      variables: UpdateIosysCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateIosysCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateIosysCrawlSettingExcludeProductMutation>(
            UpdateIosysCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateIosysCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    deleteIosysCrawlSettingExcludeProduct(
      variables: DeleteIosysCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteIosysCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteIosysCrawlSettingExcludeProductMutation>(
            DeleteIosysCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteIosysCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    createIosysCrawlSettingRequiredKeyword(
      variables: CreateIosysCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateIosysCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateIosysCrawlSettingRequiredKeywordMutation>(
            CreateIosysCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createIosysCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    updateIosysCrawlSettingRequiredKeyword(
      variables: UpdateIosysCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateIosysCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateIosysCrawlSettingRequiredKeywordMutation>(
            UpdateIosysCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateIosysCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    deleteIosysCrawlSettingRequiredKeyword(
      variables: DeleteIosysCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteIosysCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteIosysCrawlSettingRequiredKeywordMutation>(
            DeleteIosysCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteIosysCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    createPcKoubouCrawlSettingExcludeKeyword(
      variables: CreatePcKoubouCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreatePcKoubouCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreatePcKoubouCrawlSettingExcludeKeywordMutation>(
            CreatePcKoubouCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createPcKoubouCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    updatePcKoubouCrawlSettingExcludeKeyword(
      variables: UpdatePcKoubouCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdatePcKoubouCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdatePcKoubouCrawlSettingExcludeKeywordMutation>(
            UpdatePcKoubouCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updatePcKoubouCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    deletePcKoubouCrawlSettingExcludeKeyword(
      variables: DeletePcKoubouCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeletePcKoubouCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeletePcKoubouCrawlSettingExcludeKeywordMutation>(
            DeletePcKoubouCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deletePcKoubouCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    createPcKoubouCrawlSettingExcludeProduct(
      variables: CreatePcKoubouCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreatePcKoubouCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreatePcKoubouCrawlSettingExcludeProductMutation>(
            CreatePcKoubouCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createPcKoubouCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    updatePcKoubouCrawlSettingExcludeProduct(
      variables: UpdatePcKoubouCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdatePcKoubouCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdatePcKoubouCrawlSettingExcludeProductMutation>(
            UpdatePcKoubouCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updatePcKoubouCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    deletePcKoubouCrawlSettingExcludeProduct(
      variables: DeletePcKoubouCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeletePcKoubouCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeletePcKoubouCrawlSettingExcludeProductMutation>(
            DeletePcKoubouCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deletePcKoubouCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    createPcKoubouCrawlSettingRequiredKeyword(
      variables: CreatePcKoubouCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreatePcKoubouCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreatePcKoubouCrawlSettingRequiredKeywordMutation>(
            CreatePcKoubouCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createPcKoubouCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    updatePcKoubouCrawlSettingRequiredKeyword(
      variables: UpdatePcKoubouCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdatePcKoubouCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdatePcKoubouCrawlSettingRequiredKeywordMutation>(
            UpdatePcKoubouCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updatePcKoubouCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    deletePcKoubouCrawlSettingRequiredKeyword(
      variables: DeletePcKoubouCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeletePcKoubouCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeletePcKoubouCrawlSettingRequiredKeywordMutation>(
            DeletePcKoubouCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deletePcKoubouCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    createUsedSofmapCrawlSettingExcludeKeyword(
      variables: CreateUsedSofmapCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateUsedSofmapCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateUsedSofmapCrawlSettingExcludeKeywordMutation>(
            CreateUsedSofmapCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createUsedSofmapCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    updateUsedSofmapCrawlSettingExcludeKeyword(
      variables: UpdateUsedSofmapCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateUsedSofmapCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateUsedSofmapCrawlSettingExcludeKeywordMutation>(
            UpdateUsedSofmapCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateUsedSofmapCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    deleteUsedSofmapCrawlSettingExcludeKeyword(
      variables: DeleteUsedSofmapCrawlSettingExcludeKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteUsedSofmapCrawlSettingExcludeKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteUsedSofmapCrawlSettingExcludeKeywordMutation>(
            DeleteUsedSofmapCrawlSettingExcludeKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteUsedSofmapCrawlSettingExcludeKeyword',
        'mutation',
        variables,
      )
    },
    createUsedSofmapCrawlSettingExcludeProduct(
      variables: CreateUsedSofmapCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateUsedSofmapCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateUsedSofmapCrawlSettingExcludeProductMutation>(
            CreateUsedSofmapCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createUsedSofmapCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    updateUsedSofmapCrawlSettingExcludeProduct(
      variables: UpdateUsedSofmapCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateUsedSofmapCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateUsedSofmapCrawlSettingExcludeProductMutation>(
            UpdateUsedSofmapCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateUsedSofmapCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    deleteUsedSofmapCrawlSettingExcludeProduct(
      variables: DeleteUsedSofmapCrawlSettingExcludeProductMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteUsedSofmapCrawlSettingExcludeProductMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteUsedSofmapCrawlSettingExcludeProductMutation>(
            DeleteUsedSofmapCrawlSettingExcludeProductDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteUsedSofmapCrawlSettingExcludeProduct',
        'mutation',
        variables,
      )
    },
    createUsedSofmapCrawlSettingRequiredKeyword(
      variables: CreateUsedSofmapCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<CreateUsedSofmapCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<CreateUsedSofmapCrawlSettingRequiredKeywordMutation>(
            CreateUsedSofmapCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'createUsedSofmapCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    updateUsedSofmapCrawlSettingRequiredKeyword(
      variables: UpdateUsedSofmapCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpdateUsedSofmapCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpdateUsedSofmapCrawlSettingRequiredKeywordMutation>(
            UpdateUsedSofmapCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'updateUsedSofmapCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    deleteUsedSofmapCrawlSettingRequiredKeyword(
      variables: DeleteUsedSofmapCrawlSettingRequiredKeywordMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<DeleteUsedSofmapCrawlSettingRequiredKeywordMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<DeleteUsedSofmapCrawlSettingRequiredKeywordMutation>(
            DeleteUsedSofmapCrawlSettingRequiredKeywordDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'deleteUsedSofmapCrawlSettingRequiredKeyword',
        'mutation',
        variables,
      )
    },
    getProductPageData(
      variables?: GetProductPageDataQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetProductPageDataQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProductPageDataQuery>(GetProductPageDataDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getProductPageData',
        'query',
        variables,
      )
    },
    getProductDetailPageData(
      variables: GetProductDetailPageDataQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetProductDetailPageDataQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProductDetailPageDataQuery>(
            GetProductDetailPageDataDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getProductDetailPageData',
        'query',
        variables,
      )
    },
    getProductSettingPageData(
      variables: GetProductSettingPageDataQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetProductSettingPageDataQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetProductSettingPageDataQuery>(
            GetProductSettingPageDataDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getProductSettingPageData',
        'query',
        variables,
      )
    },
    getRecommendsPageData(
      variables?: GetRecommendsPageDataQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetRecommendsPageDataQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetRecommendsPageDataQuery>(GetRecommendsPageDataDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getRecommendsPageData',
        'query',
        variables,
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
