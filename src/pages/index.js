import Image from 'next/image'
import { Inter } from 'next/font/google'
import ThemeSwitch from '@/components/theme/themeSwitch'
// import todoimage from '../assets/todoimage'/
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
      
        <span class="self-center text-xl  w-44 font-semibold whitespace-nowrap dark:text-white mr-7">Vision</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li> 
          <ThemeSwitch/>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
<div className='w-full justify-center items-center flex flex-col'>

<div className='text-center mt-4 text-[35px] font-semibold'>Be more productive at work </div>
<div className='w-72 justify-center text-center mt-2 text-[#242424] dark:text-[#aaa]'>Complete the real job thats your and let the rest be with us</div>
   <div className='flex justify-center items-center'>

    <a className='dark:bg-[#161616] bg-[#aaa] px-4 py-2 rounded mt-4 mx-2' href='/Login'>Join Us</a>
    <a className='dark:bg-[#161616] bg-[#aaa] px-4 py-2 rounded mt-4 mx-2'>Explore</a>
   </div>
   
   <div className='h-54 w-[60%] bg-slate-300 justify-center items-center  align-center self-center mt-7 rounded-lg'>
    <Image src='/Images/todoimage.jpeg' className='cover rounded-lg h-100vh min-w-full' width={500} height={500}> 
    </Image>
   </div>
   </div>
</div>
  )
}
