'use server'

import { revalidateProductPaths } from '../../lib/revalidatePaths'

import type {
  CreateIosysCrawlSettingRequiredKeywordInput,
  CreateIosysCrawlSettingRequiredKeywordMutation,
  UpdateIosysCrawlSettingRequiredKeywordInput,
  UpdateIosysCrawlSettingRequiredKeywordMutation,
  DeleteIosysCrawlSettingRequiredKeywordMutation,
} from '@/graphql/dist/client'

import {
  CreateIosysCrawlSettingRequiredKeywordDocument,
  UpdateIosysCrawlSettingRequiredKeywordDocument,
  DeleteIosysCrawlSettingRequiredKeywordDocument,
} from '@/graphql/dist/client'
import { getClient } from '@/lib/apollo-client-rsc'

export const createIosysCrawlSettingRequiredKeyword = async (
  input: CreateIosysCrawlSettingRequiredKeywordInput,
) => {
  const result = getClient().mutate<CreateIosysCrawlSettingRequiredKeywordMutation>({
    mutation: CreateIosysCrawlSettingRequiredKeywordDocument,
    variables: { input },
  })
  revalidateProductPaths()

  return result
}

export const updateIosysCrawlSettingRequiredKeyword = async (
  input: UpdateIosysCrawlSettingRequiredKeywordInput,
) => {
  const result = getClient().mutate<UpdateIosysCrawlSettingRequiredKeywordMutation>({
    mutation: UpdateIosysCrawlSettingRequiredKeywordDocument,
    variables: { input },
  })
  revalidateProductPaths()

  return result
}

export const deleteIosysCrawlSettingRequiredKeyword = async (id: string, productId: string) => {
  const result = getClient().mutate<DeleteIosysCrawlSettingRequiredKeywordMutation>({
    mutation: DeleteIosysCrawlSettingRequiredKeywordDocument,
    variables: { id, productId },
  })
  revalidateProductPaths()

  return result
}
