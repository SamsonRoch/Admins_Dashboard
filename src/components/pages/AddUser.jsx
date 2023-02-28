import react, { useState } from 'react'

import axios from 'axios'

const AddUser=()=>{

    const [name,setName]=useState(null);
    const [pic,setPic]=useState(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name,pic);
        const data={name:name,avatar:pic};
        axios.post('https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users', data)
        .then(response => console.log(response));

        // window.open('/','_self');
    }

return (
        <div className='flex justify-center items-center mx-auto'>
            <form className='flex flex-col gap-10 justify-center items-center' onSubmit={(e)=>handleSubmit(e)}>
                <span className='flex text-xl font-bold'>Enter Name</span>
                <input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)} required />
                <span className='flex text-xl font-bold'>Enter Photo</span>
                <input type='text' placeholder='Photo' onChange={(e)=>setPic(e.target.value)} required/>

                <input type='submit' className='flex border-2 p-3 hover:cursor-pointer'/>
            </form>
        </div>
    )    
}

export default AddUser;