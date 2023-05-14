import React, { useState } from 'react'
export const AccountContext = React.createContext()

export function AccountProvider ({ children }) {
  const initialObj = {
    name: '',
    lastName: '',
    email: '',
    amount: ''
  }

  const [userInfo, setUserInfo] = useState(initialObj)
  return (
    <AccountContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AccountContext.Provider>
  )
}
