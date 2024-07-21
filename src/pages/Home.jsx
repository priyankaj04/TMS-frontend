import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      navigate('/login');
    }
  }, [])

  return (
    <div>
      <Toaster />

    </div>
  )
}

export default Home;