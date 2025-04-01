import React, { useState } from 'react';
import { useForm } from "react-hook-form";

function Login({ handleLogin,  authData }) {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [showPass, setShowPass] = useState(false);

  const onSubmit = (data) => {
    handleLogin(data.email, data.password);
    reset({ email: "", password: "" });
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-black">
      <div className='border-2 border-teal-600 p-20 rounded-xl'>
        <form className='flex flex-col justify-center items-center gap-3' onSubmit={handleSubmit(onSubmit)}>
          <input
            className='text-white text-xl border-2 bg-transparent border-teal-600 py-3 px-5 rounded-full placeholder:text-gray-400'
            placeholder='Enter your email'
            {...register("email", { required: true })}
            type="email"
          />
          <div className='flex flex-col gap-2'>
            <input
              className='text-white text-xl border-2 bg-transparent border-teal-600 py-3 px-5 rounded-full placeholder:text-gray-400'
              placeholder='Enter your password'
              {...register("password", { required: true })}
              type={showPass ? "text" : "password"}
            />
            <div className='flex gap-1 items-center px-4'>
              <input type="checkbox" onClick={() => setShowPass(!showPass)} />
              <span className='text-white text-sm font-medium'>Show Password</span>
            </div>
           </div>
          <input
            disabled={isSubmitting}
            value="Log In"
            className='mt-3 text-white text-xl border-none outline-none bg-teal-600 py-2.5 px-25 rounded-full'
            type="submit"
          />
          {isSubmitting && <h2>Loading...</h2>}
        </form>
      </div>
    </div>
  );
}

export default Login;
