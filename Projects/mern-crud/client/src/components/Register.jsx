import React from 'react'
import { useForm } from "react-hook-form"
import { registerRequest } from '../api/auth'

export const Register = () => {
  const { register, handleSubmit } = useForm()

  const onSubmitRegister = async (data) => {
    console.log(data);
    const newUser = await registerRequest(data)
    console.log(newUser);
  }

  return (
    <div className='grid place-items-center h-screen'>
      <form onSubmit={handleSubmit(onSubmitRegister)} className="w-[500px] bg-[#191919] p-10 rounded-[30px]">
        <div className="mb-5">
          <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your user name</label>
          <input
            type="text"
            id="userName"
            {...register('userName', { required: true })}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light focus:outline-none"
            placeholder="Jhon Doe"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light focus:outline-none"
            placeholder="jhondoe@gmail.com"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input
            type="password"
            id="password"
            placeholder="******"
            {...register('password', { required: true })}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light focus:outline-none"
          />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new user</button>
      </form>
    </div>
  )
}