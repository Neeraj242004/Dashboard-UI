import React from 'react'
import userImg from "../../assets/image.jpg";
import {
  Bell,
  ChevronDown,
  Filter,
  Menu,
  Plus,
  Search,
  Settings,
  Sun
} from 'lucide-react'

import AuthButton from "./AuthButton"

const Header = ({ onToggleSidebar }) => {
  return (
    <div className='sticky top-0 z-[60] bg-white/80 backdrop-blur-xl px-3 sm:px-6 h-16 flex items-center'>

      <div className='flex items-center justify-between w-full gap-2 sm:gap-3'>

        {/* Left */}
        <div className='flex items-center gap-2 sm:gap-3'>
          <button 
            className='p-2 rounded-lg text-slate-800 hover:bg-slate-100 lg:hidden'
            onClick={onToggleSidebar}
          >
            <Menu className="w-5 h-5"/>
          </button>

          <div className='hidden md:block'>
            <h1 className='text-lg font-bold text-slate-800'>Dashboard</h1>
            <p className='text-xs text-slate-500'>Welcome! Ram</p>
          </div>
        </div>

        {/* Search */}
        <div className='hidden sm:flex items-center gap-2 w-full max-w-md'>
          <div className='relative flex-1'>
            <Search className='w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'/>
            <input
              type="text"
              placeholder='Search...'
              className='w-full pl-10 pr-3 py-2 bg-slate-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
          </div>

          <button className='p-2 rounded-lg bg-slate-100 text-slate-500'>
            <Filter/>
          </button>
        </div>

        {/* Right */}
        <div className='flex items-center space-x-2 sm:space-x-3'>

          <button className='hidden md:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl'>
            <Plus className='w-4 h-4'/>
            <span className='text-sm'>New</span>
          </button>

          <button className='p-2 rounded-lg hover:bg-slate-100'>
            <Sun className='w-4 h-4'/>
          </button>

          <button className='relative p-2 rounded-lg hover:bg-slate-100'>
            <Bell className='w-4 h-4'/>
            <span className='absolute -top-1 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>
              5
            </span>
          </button>

          <button className='p-2 rounded-lg hover:bg-slate-100'>
            <Settings className='w-4 h-4'/>
          </button>

          <AuthButton />

          <div className='hidden sm:flex items-center space-x-2 pl-2 border-l'>
            <img 
              src={userImg}
              alt="User" 
              className='w-8 h-8 rounded-full ring-2 ring-blue-600'
            />
            <div className='hidden md:block'>
              <p className='text-sm font-medium'>Ram Sharma</p>
              <p className='text-xs text-slate-500'>Admin</p>
            </div>
            <ChevronDown className='w-4 h-4 text-slate-400'/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header