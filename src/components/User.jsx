import React,{useState} from 'react'
 
import axios from 'axios';

const User = ({user}) => {
  
  // console.log(user);

  return (
    <div className='flex py-4 flex-col border rounded-lg hover:shadow-2xl shadow-lg w-full h-[5rem] '>
      <div className='flex flex-row'>
        <img src={user.avatar} className='flex rounded-full h-10 w-10'/>
        <span className='flex text-2xl font-bold text-left px-5'>{user.name}<span className='flex font-normal'>#{user.id}</span></span>
      </div>
    </div>
  )
}

export default User