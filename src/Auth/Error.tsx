import error from '../assets/Images/error.webp'

interface props{
    errorMessage:string
}

export const Error = ({errorMessage}:props) => {
  return (
    <div className="w-[90%] flex justify-between p-2 py-3 rounded-md shadow-md items-center bg-[#e33434] mb-2">
        <p className="text-start ml-2 text-base text-white font-rubik font-bold">{errorMessage}</p>
        <img src={error} alt="" className='w-[26px]' />
    </div>
  )
}
