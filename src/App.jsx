import React,{useState,useEffect} from 'react'
import { Route, Routes,Link } from 'react-router-dom';

import {AddUser, Home,Post,User,UserProf} from './components'

function App() {
  
  return (
    <div className='flex flex-col'>
      <div className='flex h-[5rem] bg-[#A55C1B] text-white px-16 justify-between items-center'>
        <div className='flex text-4xl font-poppins font-bold'>Admin's Dashboard</div>
        <div className='flex text-xl font-poppins font-semibold'>
          <span className='flex px-5'><Link to={'/adduser'}>Add User</Link></span>
          {/* <span className='flex px-5 hover:text-white'><Link to={'/'}>Posts</Link></span> */}
        </div>
      </div>
      <div className='flex flex-row h-[95vh]'>
        <div className='flex bg-amber-500  w-1/5 overflow-y-auto'>
          <Home/>
        </div>
        <div className='flex w-4/5 bg-[#F1DFD1]'>
          <Routes>
            <Route path='/user/:id' element={<UserProf/>}/>
            <Route path='/adduser' element={<AddUser/>}/>
          </Routes>
        </div>
      </div>
      <div className='flex bg-header justify-center items-center'>CopyRight</div>
    </div>
  )
}

export default App
