"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { authClient } from '../lib/auth-client';
import { toast } from 'react-toastify';

const LoginPage = () => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm();
  const handleLogin =async (data)=>{
     const {email, password } = data;
        const { data: res, error } = await authClient.signIn.email({
          email,
          password,
          callbackURL: "/",
        });
        {res? toast.success('Login successful'): toast.error(`${error.message}`)}
        // toast.success()
        console.log(res, error);
  }
  return (
    <div className='container mx-auto'>
      <div className=' h-[80vh] flex justify-center items-center '>
        <form onSubmit={handleSubmit(handleLogin)} className="card-body max-w-md border shadow border-gray-100 rounded-2xl">
          <h2 className='font-bold text-3xl text-center mb-12'>Login with account</h2>
        <fieldset className="fieldset">
          
          <label  className="label">Email</label>
          <input {...register("email")} type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input {...register("password")} type="password" className="input w-full" placeholder="Password" />
          <button type='submit' className="btn btn-neutral mt-4">Login</button>
          <p className='my-3 text-sm text-center'>Dont have an account?<Link 
          href='/register' className='text-blue-600'> Registration</Link></p>
        </fieldset>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;