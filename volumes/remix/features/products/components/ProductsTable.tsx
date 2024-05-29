import { useEffect, useState } from 'react'

import { toast } from 'react-toastify'
import { useTypedFetcher } from 'remix-typedjson'

import EditCrawlSettingModal from './edit-crawl-setting-modal/EditCrawlSettingModal'

import { action } from '@/app/routes/api.products._index'
import { useEditCrawlSettingModalStore } from '@/features/products/stores/edit-crawl-setting-modal-store'
import { GetProductPageDataQuery } from '@/graphql/dist/client'

const ProductsTable = ({ products }: { products: GetProductPageDataQuery['products'] }) => {
  const [productId, setProductId] = useState<string | undefined>(undefined)
  const [product, setProduct] = useState<GetProductPageDataQuery['products'][number] | undefined>(
    undefined,
  )

  const { open, close } = useEditCrawlSettingModalStore()

  const fetcher = useTypedFetcher<typeof action>()

  useEffect(() => {
    const data = fetcher.data?.data
    if (!data) return

    if ('deleteProduct' in data && data.deleteProduct.ok) {
      toast.success('success')
      close()
    } else {
      toast.error('error')
    }
  }, [fetcher.data, close])

  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th>管理コード</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className=''>
              <td>
                <a
                  className='w-full justify-start btn btn-ghost no-animation'
                  href={`/products/${product.id}`}
                >
                  {product.name}
                </a>
              </td>
              <td className='w-1/12'>
                <div className='dropdown dropdown-left'>
                  <div tabIndex={0} role='button' className='btn btn-square btn-md'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      className='inline-block w-5 h-5 stroke-current'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
                      ></path>
                    </svg>
                  </div>
                  <ul className='dropdown-content z-[1] menu space-y-2 shadow bg-base-200 rounded-box w-20'>
                    <li>
                      <button
                        className='btn btn-primary'
                        onClick={() => {
                          setProductId(product.id)
                          setProduct(product)
                          open()
                        }}
                      >
                        編集
                      </button>
                    </li>
                    <li>
                      <button
                        className='btn btn-error'
                        onClick={() =>
                          fetcher.submit(
                            { control: 'delete', productId: product.id },
                            {
                              action: '/api/products',
                              method: 'post',
                              encType: 'application/json',
                            },
                          )
                        }
                      >
                        削除
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditCrawlSettingModal
        productId={productId}
        defaultValues={
          product && {
            name: product?.name,
            yahoo_auction_crawl_setting: {
              keyword: product?.yahooAuctionCrawlSetting?.keyword,
              category_id: product?.yahooAuctionCrawlSetting?.categoryId,
              min_price: product?.yahooAuctionCrawlSetting?.minPrice,
              max_price: product?.yahooAuctionCrawlSetting?.maxPrice,
              enabled: product?.yahooAuctionCrawlSetting?.enabled,
            },
            mercari_crawl_setting: {
              keyword: product?.mercariCrawlSetting?.keyword,
              category_id: product?.mercariCrawlSetting?.categoryId,
              min_price: product?.mercariCrawlSetting?.minPrice,
              max_price: product?.mercariCrawlSetting?.maxPrice,
              enabled: product?.mercariCrawlSetting?.enabled,
            },
            janpara_crawl_setting: {
              keyword: product?.janparaCrawlSetting?.keyword,
              min_price: product?.janparaCrawlSetting?.minPrice,
              max_price: product?.janparaCrawlSetting?.maxPrice,
              enabled: product?.janparaCrawlSetting?.enabled,
            },
            iosys_crawl_setting: {
              keyword: product?.iosysCrawlSetting?.keyword,
              min_price: product?.iosysCrawlSetting?.minPrice,
              max_price: product?.iosysCrawlSetting?.maxPrice,
              enabled: product?.iosysCrawlSetting?.enabled,
            },
            pc_koubou_crawl_setting: {
              keyword: product?.pcKoubouCrawlSetting?.keyword,
              min_price: product?.pcKoubouCrawlSetting?.minPrice,
              max_price: product?.pcKoubouCrawlSetting?.maxPrice,
              enabled: product?.pcKoubouCrawlSetting?.enabled,
            },
          }
        }
      />
    </>
  )
}

export default ProductsTable
