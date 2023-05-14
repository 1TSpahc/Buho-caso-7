import { useEffect, useState } from 'react'

export function Notification ({ children }) {
  // const [show, setShow] = useState(true)

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setShow(false)
  //     }, 4000)
  //   }, [])
  return (
    <div className=' bg-[#5f5af3] text-white rounded flex items-center justify-center w-[300px] h-[70px] fixed bottom-3 right-3'>{children}</div>
  )
}
