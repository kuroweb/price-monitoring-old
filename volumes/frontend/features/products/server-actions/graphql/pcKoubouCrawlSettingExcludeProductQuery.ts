'use server'

import { revalidateProductPaths } from '../../lib/revalidatePaths'

import type {
  CreatePcKoubouCrawlSettingExcludeProductInput,
  CreatePcKoubouCrawlSettingExcludeProductMutation,
  UpdatePcKoubouCrawlSettingExcludeProductInput,
  UpdatePcKoubouCrawlSettingExcludeProductMutation,
  DeletePcKoubouCrawlSettingExcludeProductMutation,
} from '@/graphql/dist/client'

import {
  CreatePcKoubouCrawlSettingExcludeProductDocument,
  UpdatePcKoubouCrawlSettingExcludeProductDocument,
  DeletePcKoubouCrawlSettingExcludeProductDocument,
} from '@/graphql/dist/client'
import { getClient } from '@/lib/apollo-client-rsc'

export const createPcKoubouCrawlSettingExcludeProduct = async (
  input: CreatePcKoubouCrawlSettingExcludeProductInput,
) => {
  const result = getClient().mutate<CreatePcKoubouCrawlSettingExcludeProductMutation>({
    mutation: CreatePcKoubouCrawlSettingExcludeProductDocument,
    variables: { input },
  })
  revalidateProductPaths()

  return result
}

export const updatePcKoubouCrawlSettingExcludeProduct = async (
  input: UpdatePcKoubouCrawlSettingExcludeProductInput,
) => {
  const result = getClient().mutate<UpdatePcKoubouCrawlSettingExcludeProductMutation>({
    mutation: UpdatePcKoubouCrawlSettingExcludeProductDocument,
    variables: { input },
  })
  revalidateProductPaths()

  return result
}

export const deletePcKoubouCrawlSettingExcludeProduct = async (id: string, productId: string) => {
  const result = getClient().mutate<DeletePcKoubouCrawlSettingExcludeProductMutation>({
    mutation: DeletePcKoubouCrawlSettingExcludeProductDocument,
    variables: { id, productId },
  })
  revalidateProductPaths()

  return result
}
