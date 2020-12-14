export default function authHeader() {
const token = localStorage.getItem("my_token")
return {Authorization: 'Bearer ' + token};
}