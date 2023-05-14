export function Input ({ select, name, type, expand = 1 }) {
  return (
    <label htmlFor={select} className={`block col-span-${expand}`}>
      {name}
      <input type={type} id={select} name={name.toLowerCase()} required className='  w-full block border-2 border-[#e4e7ef] duration-200 outline-none px-1 py-2 my-2 rounded focus:border-[#5f5af3] ' />
    </label>
  )
}
