import './App.css'
import { ArrowSquareIn, LinkedinLogoIcon } from "@phosphor-icons/react";

function About(){
    return(
        <div className="flex pb-20">
            <div className='flex-none h-250 ml-30 w-125 bg-zinc-100 mt-30 rounded-2xl'>
                    <div className='font-bold text-2xl pt-5 text-left px-10'>What I'm Bout.</div>
                    <hr className="m-4 border-zinc-400 " />
            </div>

            <div className='flex-none h-60 ml-5 w-70 bg-zinc-100 mt-30 rounded-2xl '>
                <div className="flex p-5 cursor-pointer">
                    <img src="../src/assets/wk.jpeg" alt="Me" className='rounded-full size-10'/>
                    <div className="flex flex-col pl-3">
                        <p className='font-bold text-sm'>Alfan Nasrulloh</p>
                        <p className='text-xs text-left'>@faann__</p>
                    </div>
                        <LinkedinLogoIcon size={50} color="#00a7fa" weight="fill" className='ml-8'/>
                </div>
                <p className='text-lg text-left px-5'>Typing ...</p>
                    <div className="border-2 rounded-full w-60 ml-5 mt-20 p-1 font-bold flex items-center justify-center gap-2 cursor-pointer hover:border-transparent hover:bg-sky-800 hover:text-white">
                    <span>Read mid linkedIn</span>
                    <ArrowSquareIn size={20} />
                </div>
            </div>

            <div className='flex-none h-60 ml-5 w-70 bg-zinc-100 mt-30 rounded-2xl '>
                <div className="flex p-5 cursor-pointer">
                    <img src="../src/assets/wk.jpeg" alt="Me" className='rounded-full size-10'/>
                    <div className="flex flex-col pl-3">
                        <p className='font-bold text-sm'>Alfan Nasrulloh</p>
                        <p className='text-xs text-left'>@faann__</p>
                    </div>
                </div>
                <p className='text-lg text-left px-5'>Typing ...</p>
            </div>
        </div>
    )
}

export default About