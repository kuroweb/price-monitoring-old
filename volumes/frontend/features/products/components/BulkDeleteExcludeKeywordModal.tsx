'use client'

import { useParams, useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { useBulkDeleteExcludeKeywordModalState } from '../hooks/useBulkDeleteExcludeKeywordModalState'
import {
  deleteIosysCrawlSettingExcludeKeyword,
  deleteJanparaCrawlSettingExcludeKeyword,
  deleteMercariCrawlSettingExcludeKeyword,
  deletePcKoubouCrawlSettingExcludeKeyword,
  deleteYahooAuctionCrawlSettingExcludeKeyword,
} from '../server-actions/productQuery'

import { GetProductDetailPageDataQuery } from '@/graphql/dist/client'

type inputType = {
  keyword: string | null
}

const BulkDeleteExcludeKeywordModal = ({
  yahooAuctionCrawlSettingExcludeKeywords,
  mercariCrawlSettingExcludeKeywords,
  janparaCrawlSettingExcludeKeywords,
  iosysCrawlSettingExcludeKeywords,
  pcKoubouCrawlSettingExcludeKeywords,
}: {
  yahooAuctionCrawlSettingExcludeKeywords: GetProductDetailPageDataQuery['product']['yahooAuctionCrawlSetting']['yahooAuctionCrawlSettingExcludeKeywords']
  mercariCrawlSettingExcludeKeywords: GetProductDetailPageDataQuery['product']['mercariCrawlSetting']['mercariCrawlSettingExcludeKeywords']
  janparaCrawlSettingExcludeKeywords: GetProductDetailPageDataQuery['product']['janparaCrawlSetting']['janparaCrawlSettingExcludeKeywords']
  iosysCrawlSettingExcludeKeywords: GetProductDetailPageDataQuery['product']['iosysCrawlSetting']['iosysCrawlSettingExcludeKeywords']
  pcKoubouCrawlSettingExcludeKeywords: GetProductDetailPageDataQuery['product']['pcKoubouCrawlSetting']['pcKoubouCrawlSettingExcludeKeywords']
}) => {
  const router = useRouter()
  const params = useParams()

  const [modal, setModal] = useBulkDeleteExcludeKeywordModalState()
  const { register, handleSubmit, setValue } = useForm<inputType>({
    defaultValues: {
      keyword: null,
    },
  })

  const onSubmit: SubmitHandler<inputType> = async (input) => {
    bulkDelete(input)
  }

  const bulkDelete = async (input: inputType) => {
    const productId = String(params.id)

    for (const excludeKeyword of yahooAuctionCrawlSettingExcludeKeywords) {
      if (excludeKeyword.keyword === input.keyword) {
        try {
          const result = await deleteYahooAuctionCrawlSettingExcludeKeyword(
            excludeKeyword.id,
            productId,
          )
          if (
            result?.data?.deleteYahooAuctionCrawlSettingExcludeKeyword.__typename ===
              'DeleteYahooAuctionCrawlSettingExcludeKeywordResultError' &&
            result?.data?.deleteYahooAuctionCrawlSettingExcludeKeyword.error.code !== '404'
          ) {
            toast.error('一括削除に失敗しました。')
            return
          }
        } catch (error) {
          toast.error('一括削除に失敗しました。')
          return
        }
      }
    }

    for (const excludeKeyword of mercariCrawlSettingExcludeKeywords) {
      if (excludeKeyword.keyword === input.keyword) {
        try {
          const result = await deleteMercariCrawlSettingExcludeKeyword(excludeKeyword.id, productId)
          if (
            result?.data?.deleteMercariCrawlSettingExcludeKeyword.__typename ===
              'DeleteMercariCrawlSettingExcludeKeywordResultError' &&
            result?.data?.deleteMercariCrawlSettingExcludeKeyword.error.code !== '404'
          ) {
            toast.error('一括削除に失敗しました。')
            return
          }
        } catch (error) {
          toast.error('一括削除に失敗しました。')
          return
        }
      }
    }

    for (const excludeKeyword of janparaCrawlSettingExcludeKeywords) {
      if (excludeKeyword.keyword === input.keyword) {
        try {
          const result = await deleteJanparaCrawlSettingExcludeKeyword(excludeKeyword.id, productId)
          if (
            result?.data?.deleteJanparaCrawlSettingExcludeKeyword.__typename ===
              'DeleteJanparaCrawlSettingExcludeKeywordResultError' &&
            result?.data?.deleteJanparaCrawlSettingExcludeKeyword.error.code !== '404'
          ) {
            toast.error('一括削除に失敗しました。')
            return
          }
        } catch (error) {
          toast.error('一括削除に失敗しました。')
          return
        }
      }
    }

    for (const excludeKeyword of iosysCrawlSettingExcludeKeywords) {
      if (excludeKeyword.keyword === input.keyword) {
        try {
          const result = await deleteIosysCrawlSettingExcludeKeyword(excludeKeyword.id, productId)
          if (
            result?.data?.deleteIosysCrawlSettingExcludeKeyword.__typename ===
              'DeleteIosysCrawlSettingExcludeKeywordResultError' &&
            result?.data?.deleteIosysCrawlSettingExcludeKeyword.error.code !== '404'
          ) {
            toast.error('一括削除に失敗しました。')
            return
          }
        } catch (error) {
          toast.error('一括削除に失敗しました。')
          return
        }
      }
    }

    for (const excludeKeyword of pcKoubouCrawlSettingExcludeKeywords) {
      if (excludeKeyword.keyword === input.keyword) {
        try {
          const result = await deletePcKoubouCrawlSettingExcludeKeyword(
            excludeKeyword.id,
            productId,
          )
          if (
            result?.data?.deletePcKoubouCrawlSettingExcludeKeyword.__typename ===
              'DeletePcKoubouCrawlSettingExcludeKeywordResultError' &&
            result?.data?.deletePcKoubouCrawlSettingExcludeKeyword.error.code !== '404'
          ) {
            toast.error('一括削除に失敗しました。')
            return
          }
        } catch (error) {
          toast.error('一括削除に失敗しました。')
          return
        }
      }
    }

    setModal(false)
    setValue('keyword', null)
    toast.success('一括削除に成功しました。')
    router.refresh()
  }

  return (
    <>
      <input
        type='checkbox'
        className='modal-toggle'
        checked={modal}
        onChange={(e) => setModal(e.target.checked)}
      />
      <div className='modal' role='dialog'>
        <div className='modal-box h-fit'>
          <div
            onClick={() => setModal(false)}
            className='btn btn-sm btn-circle btn-ghost absolute right-4 top-4'
          >
            ✕
          </div>
          <h3 className='font-bold text-lg'>除外キーワード（一括削除）</h3>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full space-y-2 pt-4'>
            <label className='form-control'>
              <div className='label'>
                <span className='label-text'>キーワード</span>
              </div>
              <input {...register('keyword')} className='input input-bordered' />
            </label>
            <div className='pt-4'>
              <button type='submit' className='btn btn-md btn-primary w-full'>
                すべてのプラットフォームから削除
              </button>
            </div>
          </form>
        </div>
        <div onClick={() => setModal(false)} className='modal-backdrop' />
      </div>
    </>
  )
}

export default BulkDeleteExcludeKeywordModal