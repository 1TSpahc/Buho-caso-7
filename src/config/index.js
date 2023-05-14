const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID

export const initialOptions = {
  'client-id': clientId,
  currency: 'USD',
  intent: 'capture'
}
