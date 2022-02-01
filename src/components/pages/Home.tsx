import { VFC, memo } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderLayout } from '../templates/HeaderLayout'

export const Home: VFC = memo(() => {
  console.log('home')
  return (
    <HeaderLayout>
      <p>ホームページ</p>
      <Outlet />
    </HeaderLayout>
  )
})
