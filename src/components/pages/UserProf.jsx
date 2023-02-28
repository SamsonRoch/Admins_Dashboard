import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

import { Post } from '..';


const UserProf = () => {
    const [data, setData] = useState([]);
    const params=useParams();

    // console.log(userid.userid);
    console.log(params.id);

    useEffect(() => {
        fetch(`https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users/${params.id}`)
        .then(response => response.json())
        .then(data => {setData(data);})
        .catch(error => console.error(error));
    }, []);

    // console.log('data=',data?.recent_posts,data?.recent_posts===[]);
    
    return (
        <div className='flex flex-col justify-center items-center w-full p-5'>
            <div className='flex p-10'>
                <span className='flex text-3xl font-poppins font-bold'>Recent Posts</span>
            </div>
            <div className='flex flex-wrap border shadow-2xl bg-white justify-center items-center rounded-3xl py-10'>
                {data?.recent_posts?.map((user)=>(
                    <span className='flex'><Post post={user}/></span>
                ))}
            </div>
        </div>
    )
}

export default UserProf