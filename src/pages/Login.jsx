import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import loginimg from '../assets/login.svg';
import { OauthLogin, LoginAPI } from '../Api';

function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowpassword] = useState(false);

  useEffect(() => {
    /* if (sessionStorage.getItem('token')) {
      navigate('/home');
    } */
  }, [])

  function handleCallbackResponse(response) {
    OauthLogin({ credential: response.credential }).then((res) => {
      if (res.status) {
        navigate('/home');
        sessionStorage.setItem('token', res.token);
      } else {
        console.log('message');
      }
    })
    console.log('google login', response);
  }

  useEffect(() => {
    /* try {
      google.accounts.id.initialize({
        client_id: "188209669690-4bdtqf9dea2q449c190j46nudq1nhabc.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });

      google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large", width: '420px' }
      );
    } catch (error) {
      console.log('Google is not Defined');
      window.location.reload();
    } */
  }, []);

  const handleLogin = () => {
    const reqbody = {
      email: email,
      password: password
    }
    LoginAPI(reqbody).then((res) => {
      if (res.status) {
        sessionStorage.setItem('token', res.token);
        navigate('/home');
      } else {
        console.log('message');
      }
    })
  }

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-blue-700'>
      <div className="border p-5 h-5/6 w-5/6 rounded-xl shadow mt-5 flex bg-white">
        <div className='flex-1 p-5 justify-center flex flex-col'>
          <div>
            <h4 className='font-bold text-2xl text-center'>Sign In!</h4>
            <p className='text-center'>Sign in, if you have an account.</p>
          </div>
          <div>
            <div className='flex gap-2 my-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
              </svg> Email</div>
            <input className=" mb-2 w-full px-4 py-2 border rounded-xl text-sm focus:outline-none focus:ring-0" onChange={(e) => setEmail(e.target.value)} ></input>
          </div>
          <div>
            <div className='flex gap-2 my-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg> Password</div>
            <input type='password' className=" mb-2 w-full px-4 py-2 border rounded-xl text-sm focus:outline-none focus:ring-0" onChange={(e) => setPassword(e.target.value)} ></input>
          </div>
          <div className='flex justify-center'>
            <button onClick={() => handleLogin()} className="p-3 w-48 bg-blue-700 text-white rounded-full active:bg-blue-600">
              Join
            </button>
          </div>
          <div className="flex items-center justify-center mt-5">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or sign in with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className='flex justify-center items-center mt-6' id='signInDiv' />
          <p className='text-center'>Don't have an account? <span className='cursor-pointer text-blue-700'>Sign Up</span></p>
        </div>
        <div className='h-full border border-l-0'></div>
        <img className='w-1/2 h-full' src={loginimg} />
      </div>
    </div>
  )
}

export default Login;