'use client'

import { Dispatch, SetStateAction } from 'react'

import Link from 'next/link'

type Props = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const Sidebar = ({ open, setOpen }: Props) => {
  return (
    <>
      <aside
        className={`${
          open ? 'flex' : 'hidden'
        } md:flex fixed z-20 h-full top-0 left-0 pt-16 flex-shrink-0 flex-col w-64 transition-width duration-75`}
      >
        <div className='flex-1 h-full flex flex-col min-h-0 bg-base-200'>
          <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
            <ul className='space-y-2 pb-2'>
              <li>
                <Link
                  href='/'
                  className='text-base font-normal rounded-lg flex items-center py-2 px-4 hover:bg-base-100 group'
                >
                  <svg
                    className='w-6 h-6 text-gray-500 group-hover transition duration-75'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z'></path>
                    <path d='M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z'></path>
                  </svg>
                  <span className='ml-3'>計測管理</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/recommends'
                  className='text-base font-normal rounded-lg flex items-center py-2 px-4 hover:bg-base-100 group'
                >
                  <svg
                    className='w-6 h-6 text-gray-500 group-hover transition duration-75'
                    xmlns='http://www.w3.org/2000/svg'
                    width='1em'
                    height='1em'
                    viewBox='0 0 48 48'
                  >
                    <defs>
                      <mask id='ipSTrend0'>
                        <g fill='none' stroke-linejoin='round' stroke-width='4'>
                          <path
                            fill='#fff'
                            stroke='#fff'
                            d='M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z'
                          />
                          <path
                            stroke='#000'
                            stroke-linecap='round'
                            d='m13.44 29.835l5.657-5.657l4.388 4.377L34 18'
                          />
                          <path stroke='#000' stroke-linecap='round' d='M26 18h8v8' />
                        </g>
                      </mask>
                    </defs>
                    <path fill='currentColor' d='M0 0h48v48H0z' mask='url(#ipSTrend0)' />
                  </svg>
                  <span className='ml-3'>レコメンド</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div
        onClick={() => setOpen(!open)}
        className={`${open ? '' : 'hidden'} bg-gray-900 opacity-50 fixed inset-0 z-10`}
      ></div>
    </>
  )
}

export default Sidebar
