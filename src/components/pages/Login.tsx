/* eslint no-duplicate-imports: "error" */
/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */

import { VFC, memo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useRecoilState } from 'recoil'

import { userAuthApiResponse } from '../../types/api/userAuthApiResponse'
import { User } from '../../types/api/user'
import { loginState } from '../../globalStates/loginAtom'

type Auth = Omit<User, 'name'>

export const Login: VFC = memo(() => {
  const navigate = useNavigate()
  // const [isLogin, setIsLogin] = useState<boolean>(false)
  const [isLogin, setIsLogin] = useRecoilState(loginState)

  const handleError = (resJson: userAuthApiResponse) => {
    if ('token' in resJson) {
      reset()
      localStorage.setItem('token', resJson.token)
      alert('ログイン成功')
      setIsLogin(true)
    } else {
      switch (resJson.ErrorCode) {
        case 400:
          alert(resJson.ErrorMessageJP)
          break

        case 403:
          alert(resJson.ErrorMessageJP)
          break

        case 500:
          alert(resJson.ErrorMessageJP)
          break
      }
    }
  }

  const AuthFunc = async (data: Auth): Promise<void> => {
    const BASE_URL = 'https://api-for-missions-and-railways.herokuapp.com/signin'
    const json: Auth = {
      email: data.email,
      password: data.password,
    }

    const res = await fetch(BASE_URL, {
      method: 'POST',
      // headersで"content-type":"application/json"を指定
      headers: { 'Content-Type': 'application/json' },
      // bodyにjsonオブジェクトをJSON文字列化して指定
      body: JSON.stringify(json),
    })
    const resJson: userAuthApiResponse = await res.json()
    handleError(resJson)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // フォームを空にする
  } = useForm({
    mode: 'onSubmit', // バリデーションが実行されるタイミング
    defaultValues: {
      // 初回レンダリング時のフォームのデフォルト値
      email: '',
      password: '',
    },
  })

  return (
    <div>
      <h1>ログイン</h1>
      <form onSubmit={handleSubmit<Auth>(AuthFunc)}>
        <input
          id="email"
          placeholder="email"
          {...register('email', {
            required: true,
            pattern: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/,
          })}
        />
        {errors.email && 'example@gmail.comの形式で入力してください'}
        <br />
        <input id="password" placeholder="password" {...register('password', { required: true, minLength: 6 })} />
        {errors.password && 'パスワードは6文字以上です'}
        <br />
        <button type="submit">送信</button>
      </form>
      <Link to="/signup">サインアップ</Link>
      {isLogin && navigate('/')}
    </div>
  )
})
