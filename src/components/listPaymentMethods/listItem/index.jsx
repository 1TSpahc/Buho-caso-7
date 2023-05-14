
export function ListItem ({ item }) {
  return (
    <div className='w-[40px] rounded-md p-1 cursor-pointer bg-white '>
      <img src={item.image} alt={item.name} />
    </div>
  )
}
