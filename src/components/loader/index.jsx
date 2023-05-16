import { Ping } from '@uiball/loaders'

export function Loader () {
  return (
    <section className=' w-full h-screen fixed top-0 left-0 bg-[#ffffffe6] flex items-center justify-center z-[20000000]'>
      <Ping
        size={60}
        speed={2}
        color='black'
      />
    </section>
  )
}
