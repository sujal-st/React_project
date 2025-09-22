import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setDate]=useState([])
    useEffect(()=>{
        fetch('https://api/github.com/users/sujal-st')
        .then(response=>response.json)
        .then(data=>{
            console.log(data)
            setDate(data)
        })
    },[])
  return (
    <div className='m-24 text-3xl bg-gray-600 text-white'>
      Github: {data.followers}
    </div>
  )
}

export default Github
