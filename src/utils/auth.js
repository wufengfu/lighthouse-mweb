import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const AuthorKey = 'Authorization'

export function getToken() {
  return Cookies.get(TokenKey)
}
export function getAuthor() {
  return Cookies.get(AuthorKey)
}
export function setAuth(auth) {
  return Cookies.set(AuthorKey, auth)
}
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
