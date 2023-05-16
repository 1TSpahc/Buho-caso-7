import { ListPaymentMethods } from '../listPaymentMethods'

export function Banner () {
  return (
    <div className='bg-[#5f5af3] w-[300px] rounded-md flex flex-col justify-around items-center px-4'>
      <span className='text-white text-left  w-full cursor-pointer'>Carhome</span>

      <div className='text-white'>
        <h3 className='text-3xl'>Elige tu metodo de pago</h3>
        <p className='text-1xl text-[#c6cbff] py-4'>Actualmente contamos con un solo metodo de pago. :)</p>
      </div>

      <ListPaymentMethods />
    </div>
  )
}
