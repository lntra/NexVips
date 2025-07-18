'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function HeaderMobile() {
  const [open, setOpen] = useState(false);

  return (
    <>
        <header className="flex lg:hidden justify-between items-center p-4 px-6 bg-[#137A7F]/10 shadow-md backdrop-blur-sm border-b border-white/10 col-start-1 col-end-13">
        <div className='rounded-full p-2 flex items-center gap-2'>
            <img src="/assets/Group17.svg" alt="My Icon" className="w-10 h-10" />
            <div className='text-3xl font-semibold text-[#86CECB]'>Nexvips</div>
        </div>

        <button className="text-white cursor-pointer" onClick={() => setOpen(true)}>
            <Menu size={28} />
        </button>
        </header>

        <div className={`
        fixed inset-0 z-50 grid grid-cols-12 gap-5 py-0 grid-rows-7 
        bg-[#0b3b3c]/50 backdrop-blur-lg text-white transform transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : 'translate-x-full'}
        `}>
        <div className="flex justify-between px-6 py-4 mx-0 col-start-1 col-end-13 row-start-1 row-end-1 items-center">
            <div className='rounded-full p-2 flex items-center gap-2'>
            <img src="/assets/Group17.svg" alt="My Icon" className="w-10 h-10" />
            <div className='text-3xl font-semibold text-[#86CECB]'>Nexvips</div>
            </div>
            <button className='cursor-pointer' onClick={() => setOpen(false)}>
            <X size={28} />
            </button>
        </div>

        <nav className="flex flex-col font-medium px-6 text-xl gap-5 w-full row-start-2 row-end-4 col-start-1 col-end-13 content-center justify-center">
            <a href="#" className="hover:text-[#E12885]" onClick={() => setOpen(false)}>Funcionamento</a>
            <a href="#" className="hover:text-[#E12885]" onClick={() => setOpen(false)}>Preços</a>
            <a href="#" className="hover:text-[#E12885]" onClick={() => setOpen(false)}>FAQs</a>
        </nav>

        <div className='h-full w-full flex justify-center items-center font-bold text-black rounded-xl col-start-3 col-end-11 row-start-4'>
            <button className="
            bg-[#86CECB] 
            font-bold 
            text-black 
            py-2
            px-4 
            rounded-xl 
            transition-colors 
            duration-200 
            hover:bg-[#E12885] 
            active:bg-[#E12885] 
            sm:active:bg-[#E12885]">
            Comece Agora Mesmo
            </button>
        </div>
        </div>

    </>
  );
}
