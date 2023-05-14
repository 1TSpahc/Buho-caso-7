import { ListItem } from './listItem'

export function ListPaymentMethods () {
  const paymentInfo = [
    {
      name: 'Paypal',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png'
    },
    {
      name: 'Culqi',
      image: 'https://play-lh.googleusercontent.com/9qFxYxQqjI2OF4i9edSSG7f5vEujLMMWw68fuGMfbbmaKvrDR6VDzK4idee49I9UsUY1'
    }
  ]
  return (
    <div className=' flex items-center justify-start w-full gap-2'>
      {
        paymentInfo.map((item, index) => {
          return (
            <ListItem key={index} item={item} />
          )
        })
      }
    </div>
  )
}
