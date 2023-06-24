import logo from '../../assets/Images/logo.webp'

export const ChatBox = () => {
  return (
    <div className="flex flex-col w-[100%] h-[100%]">
        <div className="w-[100%] flex justify-start pl-4 items-center h-[12%] gap-2 bg-[#373737]">
            <img src={logo} className='w-[10%] lg:w-[5%]' alt="" />
            <h2 className='text-white font-rubik font-medium'>Alejandro</h2>
        </div>
        <div className='bg-white h-[77%]'>

        </div>
    </div>
  )
}
