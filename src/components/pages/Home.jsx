import React,{useState,useEffect} from 'react'
import User from '../User';



const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://637de434cfdbfd9a63a00317.mockapi.io/test/v2/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);
  console.log(data);

  const handleClick=(id)=>{
    console.log(id);
    window.open(`/user/${id}`,'_self','noopener');
  }

  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-wrap w-full border shadow-2xl bg-[#E8C99B]  rounded-3xl py-10'>
        {data?.map((user)=>(
          <div key={user.id} onClick={()=>handleClick(user.id)} className='flex flex-row w-full'>
            <span className='flex w-full shadow-xl'><User user={user}/></span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home