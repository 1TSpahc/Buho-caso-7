import { Amount } from './amount'
import { Input } from './input'
import { useAccount } from '../../../hooks/useAccount'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useState } from 'react'
import { Notification } from '../../notification'

export function FormContent () {
  const { userInfo, setUserInfo } = useAccount()
  const [showPaypalButton, setShowPaypalButton] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handleSumbit = (event) => {
    event.preventDefault()
    const { nombre, apellido, correo } = Object.fromEntries(new FormData(event.target))
    const newObj = structuredClone(userInfo)
    newObj.name = nombre
    newObj.lastName = apellido
    newObj.email = correo

    setUserInfo(newObj)
    setShowPaypalButton(true)
  }

  return (
    <>
      <form className='bg-[#ffffff] flex-grow-[1]' onSubmit={handleSumbit}>
        <h2 className='text-2xl pb-8 text-center'>Ingresa tus crendenciales</h2>
        <div className='grid grid-cols-2 gap-4'>
          <Input select='name' name='Nombre' type='text' />
          <Input select='lastName' name='Apellido' type='text' />
          <Input select='email' name='Correo' type='email' expand={2} />
        </div>
        <Amount />
        {
      showPaypalButton
        ? (
          <div>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: `${userInfo.amount}.00`
                      }
                    }
                  ]
                })
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  setPaymentSuccess(true)

                  setTimeout(() => {
                    setPaymentSuccess(false)
                  }, 4000)
                })
              }}
            />
          </div>
          )
        : (
          <button className='px-3 py-2 bg-[#3c37ff] text-white rounded'>Comprar</button>
          )
     }

      </form>
      {
        paymentSuccess && <Notification>El pago ser realizo con exito!!</Notification>
      }
    </>
  )
}
