export default class AuthRequest {
  // eslint-disable-next-line consistent-return
  static async login(email, password) {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const requestOptions = {
      method: 'POST',
      headers,
      body: JSON.stringify({
        loginOrEmai: email,
        password,
      }),
      redirect: 'follow',
    }

    return fetch('https://wine-3qu5.vercel.app/api/customers/login', requestOptions)
      .then((res) => res.json())
      .then((result) => result)
  }

  static async register(firstName, lastName, login, email, password) {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const requestOptions = {
      method: 'POST',
      headers,
      body: JSON.stringify({
        firstName,
        lastName,
        login,
        email,
        password,
      }),
      redirect: 'follow',
    }

    fetch('https://wine-3qu5.vercel.app/api/customers', requestOptions)
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        return result
      })
  }
}
