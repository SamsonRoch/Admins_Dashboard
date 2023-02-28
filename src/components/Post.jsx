import React,{useState} from 'react'

const Posts = ({post}) => {
  console.log(post);
  return (
    <div className='flex flex-col justify-between border rounded-lg hover:shadow-2xl shadow-lg p-5 m-5 h-[20rem] w-[20rem] '>
      <div className='flex flex-col w-full'>
        {/* <img src={post.avatar} className='flex rounded-full h-16 w-16'/> */}
        <span className='flex text-2xl font-bold text-left border-b p-5 truncate'>{post?.Title}</span>
        <span className='flex text-lg font-bold text-left p-5'>{post?.content}</span>
      </div>
    </div>
  )
}

export default Posts