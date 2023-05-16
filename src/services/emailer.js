import { emailerApiUrl } from './config'

export async function sendEmail (name, lastname, email) {
  const headersList = {
    'Content-Type': 'application/json'
  }

  const bodyContent = JSON.stringify({
    name,
    lastname,
    email
  })

  const response = await fetch(`${emailerApiUrl}/api/email`, {
    method: 'POST',
    body: bodyContent,
    headers: headersList
  })

  const data = await response.json()

  return data
}
