'use server'

import { revalidateProductPaths } from '../../lib/revalidatePaths'

import type {
  CreatePcKoubouCrawlSettingExcludeKeywordInput,
  CreatePcKoubouCrawlSettingExcludeKeywordMutation,
  UpdatePcKoubouCrawlSettingExcludeKeywordInput,
  UpdatePcKoubouCrawlSettingExcludeKeywordMutation,
  DeletePcKoubouCrawlSettingExcludeKeywordMutation,
} from '@/graphql/dist/client'

import {
  CreatePcKoubouCrawlSettingExcludeKeywordDocument,
  UpdatePcKoubouCrawlSettingExcludeKeywordDocument,
  DeletePcKoubouCrawlSettingExcludeKeywordDocument,
} from '@/graphql/dist/client'
import { getClient } from '@/lib/apollo-client-rsc'

export const createPcKoubouCrawlSettingExcludeKeyword = async (
  input: CreatePcKoubouCrawlSettingExcludeKeywordInput,
) => {
  const result = getClient().mutate<CreatePcKoubouCrawlSettingExcludeKeywordMutation>({
    mutation: CreatePcKoubouCrawlSettingExcludeKeywordDocument,
    variables: { input },
  })
  revalidateProductPaths()

  return result
}

export const updatePcKoubouCrawlSettingExcludeKeyword = async (
  input: UpdatePcKoubouCrawlSettingExcludeKeywordInput,
) => {
  const result = getClient().mutate<UpdatePcKoubouCrawlSettingExcludeKeywordMutation>({
    mutation: UpdatePcKoubouCrawlSettingExcludeKeywordDocument,
    variables: { input },
  })
  revalidateProductPaths()

  return result
}

export const deletePcKoubouCrawlSettingExcludeKeyword = async (id: string, productId: string) => {
  const result = getClient().mutate<DeletePcKoubouCrawlSettingExcludeKeywordMutation>({
    mutation: DeletePcKoubouCrawlSettingExcludeKeywordDocument,
    variables: { id, productId },
  })
  revalidateProductPaths()

  return result
}
