export function setToken(key,value) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getToken() {
  return localStorage.getItem("token") || "";
}
export function clearToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
export function setUser(key,user) {
  localStorage.setItem(key,JSON.stringify(user));
}
export function getUser() {
  const user = localStorage.getItem("user")
  return user? user: null
}
