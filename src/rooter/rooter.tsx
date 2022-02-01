import { VFC, memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/pages/Home'
import { Login } from '../components/pages/Login'
import { SignUp } from '../components/pages/SignUp'

export const Router: VFC = memo(() => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
})
