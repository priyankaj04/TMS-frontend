import React, { useState, useEffect, useTransition } from 'react'
import { useNavigate } from "react-router-dom";
import loginimg from '../assets/login.svg';
import { OauthLogin, LoginAPI } from '../Api';
import toast, { Toaster } from 'react-hot-toast';

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowpassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const google = window.google

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      navigate('/home');
    }
  }, [])

  function handleCallbackResponse(response) {
    OauthLogin({ credential: response.credential }).then((res) => {
      if (res.status) {
        toast.success("Login successful!")
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('userid', res.data?.[0].userid);
        navigate('/home');
      } else {
        toast.error(res.message);
        console.log('message', res.message);
      }
    })
  }

  useEffect(() => {
    try {
      google.accounts.id.initialize({
        client_id: "188209669690-4bdtqf9dea2q449c190j46nudq1nhabc.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });

      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large", width: '420px' }
      );
    } catch (error) {
      console.log(error, 'Google is not Defined');
      window.location.reload();
    }
  }, []);

  const handleLogin = () => {
    const reqbody = {
      email: email,
      password: password
    }
    LoginAPI(reqbody).then((res) => {
      if (res.status) {
        toast.success("Login successful!")
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('userid', res.data?.[0].userid);
        navigate('/home');
      } else {
        toast.error(res.message);
        console.log('message', res.message);
      }
    })
  }

  const handleNavigate = () => {
    startTransition(() => navigate('/register'))
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-violet-500'>
      <Toaster />
      <div className="border border-neutral-700 p-5 h-5/6 w-5/6 rounded-xl shadow mt-5 flex bg-neutral-900">
        <div className='flex-1 p-5 justify-center flex flex-col'>
          <div className='mb-5'>
            <h4 className='font-bold text-2xl text-center text-violet-500'>Sign In!</h4>
            <p className='text-center text-white'>Sign in, if you have an account.</p>
          </div>
          <div>
            <div className='flex gap-2 my-2 text-gray-300'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
              </svg> Email</div>
            <input className=" mb-2 w-full text-gray-300 px-4 py-3 bg-neutral-800 rounded-xl text-sm focus:outline-none focus:ring-0" onChange={(e) => setEmail(e.target.value)} ></input>
          </div>
          <div>
            <div className='flex gap-2 my-2 text-gray-300'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg> Password</div>
            <div className='mb-2 w-full px-4 py-3 bg-neutral-800 rounded-xl flex'>
              <input type={showPassword ? 'text' : 'password'} className="text-sm text-gray-300 w-full bg-neutral-800 focus:outline-none focus:ring-0" onChange={(e) => setPassword(e.target.value)} ></input>
              {
                showPassword ?
                  <svg onClick={() => setShowpassword(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  : <svg onClick={() => setShowpassword(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-gray-500 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>

              }
            </div>
          </div>
          <div className='flex justify-center'>
            <button onClick={() => handleLogin()} className="p-3 w-48 bg-violet-500 text-white rounded-full active:bg-blue-600">
              Continue
            </button>
          </div>
          <div className="flex items-center justify-center mt-5">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-200 text-sm">or sign in with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className='flex justify-center items-center mt-6' id='signInDiv' />
          <div onClick={() => handleNavigate()}>
            <p className='text-center mt-5 text-gray-300'>Don't have an account? <span className='cursor-pointer text-violet-500'>Sign Up</span></p>
          </div>
        </div>
        <div className='h-full border border-neutral-700 border-l-0'></div>
        <img className='w-1/2 h-full' src={loginimg} />
      </div>
    </div >
  )
}

export default Login;