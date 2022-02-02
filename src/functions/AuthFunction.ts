import { useState } from 'react'
import { User } from '../types/api/user'
import { SuccessResponse } from '../types/api/userAuthApiResponse'
import axios from 'axios'

type Auth = Omit<User, 'name'>

export const AuthFunc = async (data: Auth) => {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const BASE_URL = 'https://api-for-missions-and-railways.herokuapp.com/signin'

  const json: Auth = {
    email: data.email,
    password: data.password,
  }

  await axios
    .post<userAuthApiResponse>(BASE_URL, json)
    .then((res) => {
      setIsLogin(true)
      alert('ログイン成功')
      return isLogin
    })
    .catch((error) => {
      console.log(error)
    })

  // const res = await fetch(BASE_URL, {
  //   method: 'POST',
  //   // headersで"content-type":"application/json"を指定
  //   headers: { 'Content-Type': 'application/json' },
  //   // bodyにjsonオブジェクトをJSON文字列化して指定
  //   body: JSON.stringify(json),
  // })
  // const resJson = (await res.json()) as userAuthApiResponse
  // if (!resJson.ErrorCode) {
  //   alert(resJson.ErrorCode)
  // } else {
  //   localStorage.setItem('token', resJson.token)
  //   alert('ログイン成功')
  //   setIsLogin(true)
  // }
  // return res
}
