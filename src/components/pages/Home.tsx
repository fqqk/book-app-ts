import { VFC, memo } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderLayout } from '../templates/HeaderLayout'

import { useRecoilValue } from 'recoil'
import { loginState } from '../../globalStates/loginAtom'

export const Home: VFC = memo(() => {
  const isLogin = useRecoilValue(loginState)
  console.log('home')
  return (
    <HeaderLayout>
      <p>ホームページ</p>
      {isLogin ? <p>ログインなう</p> : <p>まだ</p>}
      <Outlet />
    </HeaderLayout>
  )
})
