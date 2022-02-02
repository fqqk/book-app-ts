import { useState } from 'react'

export const SignUpHandleError = async (res: Response) => {
  const resJson = await res.json()

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
    default:
      localStorage.setItem('token', resJson.token)
      alert('登録完了。レビューページへリダイレクトします')
      break
  }
}

export const LoginHandleError = async (res: Response) => {
  const resJson = await res.json()
  const [isLogin, setIsLogin] = useState<boolean>(false)

  if (resJson.ErrorCode) {
    alert(resJson.ErrorCode)
  } else {
    localStorage.setItem('token', resJson.token)
    alert('ログイン成功')
    setIsLogin(true)
  }

  return isLogin
}
