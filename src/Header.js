import logo from './images/troll-face.png'

export default function Header(){
    return(
        <div className='bg-gradient-to-r from-[#711F8D] to-[#A818DA] flex flex-row justify-between items-center'>
            <div className='flex flex-row items-center ml-5 py-5 gap-1.5 text-xl'>
                <img src={logo} alt='logo' className='w-4 md:w-8'/>
                <span className='font-karla text-white font-bold text-xs md:text-xl'>Meme Generator</span>
            </div>
            <div className='text-xs md:text-xl'>
                <span className='mr-3 text-white'>React Course - Project 3</span>
            </div>
        </div>
    );
}