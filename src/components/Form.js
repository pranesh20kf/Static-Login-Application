import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form({setUser}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // to navigate to a new page

    const handleLogin = () => {
        // Simple login validation
        if (email === '123' && password === '123') {
            // If login is successful, redirect to a new page
            navigate('/dashboard');   
            setUser('Pranesh')
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="flex w-full h-screen">
        <div className='w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100'>
            <h1 className='text-5xl font-semibold'>Welcome Back</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
            <div className='mt-8'>
                <div className='flex flex-col'>
                    <label className='text-lg font-medium'>Email</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // update email state
                    />
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='text-lg font-medium'>Password</label>
                    <input
                        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // update password state    //event handler 
                    />
                </div>
                <div className='mt-8 flex justify-between items-center'>
                    <button className='font-medium text-base text-violet-500'>Forgot password</button>
                </div>
                <div className='mt-8 flex justify-center items-center'>
                    <p className='font-medium text-base'>Don't have an account?</p>
                    <button
                        onClick={() => {}}
                        className='ml-2 font-medium text-base text-violet-500'>Sign up</button>
                </div>
                <div className='mt-8'>
                    <button
                        onClick={handleLogin} // onClick handler for login
                        className='w-full bg-violet-500 text-white py-4 rounded-xl hover:bg-violet-600 transition-colors'
                    >
                        Log in
                    </button>
                </div>
                </div>
            </div>
            <div className=" hiddend relative flex h-full w-1/2 items-center justify-center bg-gray-200 "> 
                <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-red-500 rounded-full animate-bounce" />
                <div className=" w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
        </div>
        </div>
    );
}
