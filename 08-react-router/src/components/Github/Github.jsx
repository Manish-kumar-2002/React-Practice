import React, { useEffect, useState } from 'react'

const Github = () => {

    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`https://api.github.com/users/manish-kumar-2002`)
        .then(response => response.json())
        .then(data => {
            setData(data)   
        })
    },[])
  return (
    <div className='py-9'><h2 className='text-center mb-5'>followers: {data.followers} </h2><img className='rounded-[100%] block mx-auto my-0 w-48' src={data.avatar_url} alt="profile" /> </div>
  )
}

export default Github