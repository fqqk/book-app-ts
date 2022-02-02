import { User } from '../types/api/user'
import { SignUpHandleError } from './ErrorFunction'

export const SignUpFunc = async (data: User): Promise<void> => {
  const BASE_URL = 'https://api-for-missions-and-railways.herokuapp.com/users'

  const json = {
    name: data.name,
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

  return SignUpHandleError(res)
}
