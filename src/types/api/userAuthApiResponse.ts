type FailResponse = {
  ErrorCode: number
  ErrorMessageJP: string
  ErrorMessageEN: string
}

type SuccessResponse = {
  token: string
}

export type userAuthApiResponse = SuccessResponse | FailResponse
