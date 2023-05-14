import { useEffect } from 'react'
import { Banner } from '../banner'
import { FormContent } from './formContent'

export function Form () {
  useEffect(() => {
    console.log('sb-dvbgx25970960@personal.example.com')
    console.log('L7JNLe1@')
  }, [])
  return (
    <section className='w-[70%]  bg-[#ffffff] rounded-md flex p-3 gap-5'>
      <Banner />
      <FormContent />
    </section>
  )
}
