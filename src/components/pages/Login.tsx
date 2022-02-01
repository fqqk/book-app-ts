/* eslint no-duplicate-imports: "error" */
/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */

import { VFC, memo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { AuthFunc } from '../../functions/AuthFunction'
import { User } from '../../types/api/user'
import { LoginHandleError } from '../../functions/ErrorFunction'

type Auth = Omit<User, 'name'>

export const Login: VFC = memo(() => {
  const navigate = useNavigate()
  const [loginData, setLoginData] = useState<Auth>({ email: '', password: '' })
  const [isLogin, setIsLogin] = useState<boolean>(false)

  const setData = (data: Auth) => {
    const res = AuthFunc(data)
    const isLogin = LoginHandleError(res)
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
      <form onSubmit={handleSubmit<Auth>(setData)}>
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
