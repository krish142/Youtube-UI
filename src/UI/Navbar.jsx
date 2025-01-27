import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardVoice } from "react-icons/md";
import Avatar from 'react-avatar';
import { IoMdNotificationsOutline } from "react-icons/io";
import { GoPlus } from "react-icons/go";

const Navbar = () => {
  return (
    <div className='flex justify-between px-10 py-2  bg-white shadow-md '>
      <div className='flex items-center gap-4 cursor-pointer'> 
      <RxHamburgerMenu  className='text-[22px]'/> 
      <img src="https://github.com/LearnCodingOfficial/yt-clone/blob/main/public/logo.png?raw=true" alt="" className='h-8'  />
      </div>
      <div className='flex items-center gap-3'>
        <div className='flex'>
          <div className='flex border border-gray-400 w-[500px] h-[43px] rounded-l-3xl items-center'>
            <input type="text" placeholder='Search'  className=' w-[92%] px-5 rounded-l-3xl font-semibold focus-visible:outline-none '/>
          </div>
          <div className='bg-slate-100 pt-2 px-6 rounded-r-3xl border border-gray-400 border-l-0 hover:bg-gray-200 cursor-pointer'><CiSearch className='text-[23px]'/></div>
        </div>
          <div className='bg-slate-100 rounded-full p-[10px] hover:bg-slate-200  cursor-pointer'>
            <MdKeyboardVoice  className='text-[23px]'/>
          </div>
      </div>
      <div className='flex items-center gap-5'>
        <div>
          <div className='bg-slate-200 rounded-3xl flex items-center gap-1 px-3 py-[6px]  cursor-pointer hover:bg-slate-300'>
            <GoPlus  className='text-[25px]'/>
            <p className='text-sm font-bold'>Create</p>
          </div>
        </div>
        <div className='cursor-pointer'> 
        <IoMdNotificationsOutline className='text-[25px]' />
        </div>
        <div className='cursor-pointer'>
          <Avatar src='./public/Profile.jpg' size='32' round = {true} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
