'use server'

import { revalidateProductPaths } from '../../lib/revalidatePaths'

import type {
  CreateJanparaCrawlSettingExcludeProductInput,
  CreateJanparaCrawlSettingExcludeProductMutation,
  UpdateJanparaCrawlSettingExcludeProductInput,
  UpdateJanparaCrawlSettingExcludeProductMutation,
  DeleteJanparaCrawlSettingExcludeProductMutation,
} from '@/graphql/dist/client'

import {
  CreateJanparaCrawlSettingExcludeProductDocument,
  UpdateJanparaCrawlSettingExcludeProductDocument,
  DeleteJanparaCrawlSettingExcludeProductDocument,
} from '@/graphql/dist/client'
import { getClient } from '@/lib/apollo-client-rsc'

export const createJanparaCrawlSettingExcludeProduct = async (
  input: CreateJanparaCrawlSettingExcludeProductInput,
) => {
  const result = getClient().mutate<CreateJanparaCrawlSettingExcludeProductMutation>({
    mutation: CreateJanparaCrawlSettingExcludeProductDocument,
    variables: { input },
  })
  revalidateProductPaths()

  return result
}

export const updateJanparaCrawlSettingExcludeProduct = async (
  input: UpdateJanparaCrawlSettingExcludeProductInput,
) => {
  const result = getClient().mutate<UpdateJanparaCrawlSettingExcludeProductMutation>({
    mutation: UpdateJanparaCrawlSettingExcludeProductDocument,
    variables: { input },
  })
  revalidateProductPaths()

  return result
}

export const deleteJanparaCrawlSettingExcludeProduct = async (id: string, productId: string) => {
  const result = getClient().mutate<DeleteJanparaCrawlSettingExcludeProductMutation>({
    mutation: DeleteJanparaCrawlSettingExcludeProductDocument,
    variables: { id, productId },
  })
  revalidateProductPaths()

  return result
}
