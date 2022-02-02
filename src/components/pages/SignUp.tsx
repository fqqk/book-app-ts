/* eslint no-duplicate-imports: "error" */
/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */
import { VFC, memo } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { User } from '../../types/api/user'
import { SignUpFunc } from '../../functions/SignUpFunction'

export const SignUp: VFC = memo(() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // フォームを空にする
  } = useForm({
    mode: 'onSubmit', // バリデーションが実行されるタイミング
    defaultValues: {
      // 初回レンダリング時のフォームのデフォルト値
      name: '',
      email: '',
      password: '',
    },
  })

  return (
    <div>
      <h1>hook form</h1>
      <form onSubmit={handleSubmit<User>(SignUpFunc)}>
        <input id="name" placeholder="name" {...register('name', { required: true })} />
        {errors.name && '名前が入力されていません'}
        <br />
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
        <button type="submit">送信hook</button>
      </form>
      <Link to="/login">ログイン</Link>
    </div>
  )
})
