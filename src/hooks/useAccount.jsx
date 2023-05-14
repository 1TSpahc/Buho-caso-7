import { useContext } from 'react'
import { AccountContext } from '../context/accountContext'

export function useAccount () {
  const { userInfo, setUserInfo } = useContext(AccountContext)

  return {
    userInfo, setUserInfo
  }
}
