import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      navigate('/login');
    }
  }, [])
  
  return (
    <div>

    </div>
  )
}

export default Home;