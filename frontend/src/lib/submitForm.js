export const WEB3FORMS_ACCESS_KEY = '19cba107-2b87-4110-8858-65abf6192915'

export async function submitWeb3Form(formElement) {
  const formData = new FormData(formElement)
  formData.append('access_key', WEB3FORMS_ACCESS_KEY)

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    body: formData,
  })

  return response.json()
}
