import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem('token', data.token);
      navigate('/home');
    } else {
      alert('Invalid login credentials');
    }
  };

  return (
    <div className='w-full h-screen items-center justify-center flex bg-zinc-800'>
      <div className='w-80 h-[50vh] bg-gradient-to-b from-black to-gray-500 items-center flex flex-col justify-center rounded-3xl'>
      
        <div style={{backgroundImage: `url("https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png")`}}  className='w-20 h-20 bg-slate-100 rounded-full mb-10 bg-cover bg-center'></div>
      <form onSubmit={handleLogin}>
        <div className='w-72 '>
        <label className='mr-4'>email:</label>
          <input className='bg-transparent ml-10 outline-none text-zinc-200'
            type="email"
            placeholder='Email Id'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
           <div className='w-60 h-[1.8px] bg-black rounded-3xl mb-2'></div>
        </div>
        <div  className='w-72'>
          <label  className='mr-4'>Password:</label>
          <input className='bg-transparent outline-none text-zinc-200 ml-3'
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
           <div className='w-60 h-[1.8px] bg-black rounded-3xl'></div>

        </div>
        <button className='w-60 h-10 bg-slate-800 rounded-2xl text-zinc-200 mt-10 ml-5' type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};

export default Login;
