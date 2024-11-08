import { env } from '../env'

interface AccessTokenResponse {
  access_token: string
}

interface GetUserResponse {
  id: number
  name: string | null
  email: string | null
  avatar_url: string
}

export async function getAccessTokenFromCode(code: string) {
  const accessTokenUrl = new URL('https://github.com/login/oauth/access_token')

  accessTokenUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID)
  accessTokenUrl.searchParams.set('client_secret', env.GITHUB_CLIENT_SECRET)
  accessTokenUrl.searchParams.set('code', code)

  const response = await fetch(accessTokenUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
  })

  const { access_token }: AccessTokenResponse = await response.json()

  if (!access_token) {
    throw new Error('Failed to obtain access token from github')
  }

  return access_token
}

export async function getUserFromAccessToken(accessToken: string) {
  const response = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })

  const { avatar_url, email, id, name }: GetUserResponse = await response.json()

  return {
    avatar_url,
    email,
    id,
    name,
  }
}
