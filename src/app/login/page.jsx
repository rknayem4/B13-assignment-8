import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
  return (
    <div className='container mx-auto'>
      <div className=' h-[80vh] flex justify-center items-center '>
        <form className="card-body max-w-md border shadow border-gray-100 rounded-2xl">
          <h2 className='font-bold text-3xl text-center mb-12'>Login with account</h2>
        <fieldset className="fieldset">
          
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" />
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