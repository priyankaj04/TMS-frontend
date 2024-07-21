import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import Kanban from '../components/Kanban';
import { GetUserByUserid } from '../Api';

function Home() {

  const navigate = useNavigate();
  const userid = sessionStorage.getItem('userid');
  const [userData, setUserdata] = useState([])

  useEffect(() => {
    if (userid) {
      GetUserByUserid(userid).then((res) => {
        if (res.status) {
          setUserdata(res.data);
        } else {
          toast.error(res.message)
        }
      })
    }

  }, [])

  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      navigate('/login');
    }
  }, [])

  return (
    <div>
      <Toaster />
      <Navbar userDetails={userData?.[0]} />
      <Kanban />
    </div>
  )
}

export default Home;