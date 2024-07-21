import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      navigate('/home');
    }
  }, [])

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="border p-5 h-[400px] w-[500px] rounded-xl shadow mt-5 flex flex-col justify-center">
        <h2 className='font-bold text-2xl text-center my-5'>Welcome to Amigos!</h2>
        <div>
          <div className='flex gap-2 my-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg> Username</div>
          <input className=" mb-2 w-full px-4 py-2 border rounded-xl text-sm focus:outline-none focus:ring-0" onChange={(e) => { }} ></input>
        </div>
        <button onClick={() => { }} className="px-8 py-1 bg-[#3A6EDE] text-white rounded-md active:bg-blue-600">
          Join
        </button>
      </div>
    </div>
  )
}

export default Login;