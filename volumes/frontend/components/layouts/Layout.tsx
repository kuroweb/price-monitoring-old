'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <div className='h-svh' data-theme='dark'>
        <div className='flex h-full overflow-hidden'>
          <Header open={open} setOpen={setOpen} />
          <Sidebar open={open} setOpen={setOpen} />
          <div className='size-full overflow-y-auto md:pl-64'>
            <main>
              <div className='p-4 pt-20'>
                <main>{children}</main>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
