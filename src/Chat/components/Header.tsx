import logo from '../../assets/Images/logo.webp';

export const Header = () => {
  return (
    <header className='bg-[#222222] h-[120px] gap-2 flex w-[100%] justify-center items-center'>
        <h1 className="font-rubik drop-shadow-lg text-white text-5xl 
        sm:text-6xl md:text-5xl lg:text-6xl font-bold after:content-['App'] after:text-[#19CC39]">Chat</h1>
        <img className='w-[10%] lg:w-[5%]' src={logo} alt="" />
    </header>
  )
}
