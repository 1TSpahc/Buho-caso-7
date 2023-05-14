import { useEffect, useState } from 'react'
import { useAccount } from '../../../../hooks/useAccount'

export function Amount () {
  const [amount, setAmount] = useState(10)
  const [customize, setCustomize] = useState(false)
  const { userInfo, setUserInfo } = useAccount()

  const increase = 10

  const handleIncrease = () => {
    setAmount((previousValue) => previousValue + increase)
  }

  const handleDecrease = () => {
    if (amount <= 10) return

    setAmount((previousValue) => previousValue - increase)
  }

  const handleCustomize = () => {
    setCustomize(true)
  }

  const OnCustomize = () => {
    const [newAmount, setNewAmount] = useState(amount)

    const handleSumbit = () => {
      setAmount(Number(newAmount))
      setCustomize(false)
    }

    const handleChange = (event) => {
      setNewAmount(event.target.value)
    }

    return (
      <div className='flex items-center justify-start gap-3'>
        <input type='number' placeholder='$10' onChange={handleChange} name='monto' value={newAmount} className=' w-full  border-2 border-[#e4e7ef] duration-200 outline-none px-1 py-2 my-2 rounded focus:border-[#3c37ff]' />
        <button className=' py-1 px-3 rounded bg-[#e9ecf6] cursor-pointer select-none my-2' onClick={handleSumbit}>guardar</button>
      </div>
    )
  }

  useEffect(() => {
    const newObj = structuredClone(userInfo)
    newObj.amount = amount

    setUserInfo(newObj)
  }, [amount])

  return (
    <div className='py-4'>
      <p>Ingresa un monto</p>

      <div className='flex items-center justify-between gap-4 my-2 px-1'>
        {
          customize
            ? (<OnCustomize />)
            : (
              <>
                <span className=' block w-full  border-2 border-[#e4e7ef] duration-200 outline-none px-1 py-2 my-2 rounded focus:border-[#3c37ff]'>${amount}.00</span>

                <div className='flex items-center gap-2'>
                  <span className=' py-1 px-3 rounded bg-[#e9ecf6] cursor-pointer select-none' onClick={handleDecrease}>-</span>
                  <span className=' py-1 px-3 rounded bg-[#e9ecf6] cursor-pointer select-none' onClick={handleIncrease}>+</span>
                  <span className=' py-1 px-3 rounded bg-[#e9ecf6] cursor-pointer select-none' onClick={handleCustomize}>Personalizar</span>
                </div>
              </>
              )
        }
      </div>
    </div>
  )
}
