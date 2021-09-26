export function setToken(token) {
  localStorage.setItem("token", token);
}
export function getToken() {
  return localStorage.getItem("token") || "";
}
export function clearToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}
export function setUser(user) {
  localStorage.setItem("user", user);
}
export function getUser() {
  const user = localStorage.getItem("user")
  return user? JSON.parse(user): null
}
