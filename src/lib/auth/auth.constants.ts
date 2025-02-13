// JWT 토큰 저장 쿠키 이름
export const cookieName = 'yeob_token'

// JWT 토큰 페이로드
export const tokenPayload = {
  name: 'jooyeob',
  role: 'blog_owner',
}

// JWT 만료 시간 (1시간)
export const tokenExpiresIn = 60 * 60
