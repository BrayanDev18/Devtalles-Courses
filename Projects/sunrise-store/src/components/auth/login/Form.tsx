'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form'

import Google from '../../../../public/icons/google.svg';
import Apple from '../../../../public/icons/apple.svg';
import Facebook from '../../../../public/icons/faceb.svg';

import { Divider } from '@/components/common/Divider';
import { UserLogin } from '@/services/auth/user';
import { UserLoginProps } from '@/interface/user';
import { signIn } from 'next-auth/react';

export const LoginUIForm = () => {
  const InfoButtons = [
    { label: 'Google', icon: Google },
    { label: 'Facebook', icon: Facebook },
    { label: 'Apple ID', icon: Apple }
  ];

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserLoginProps>();

  const onSubmit = async (data: UserLoginProps) => {
    
    const res = await UserLogin(data)

    console.log(res)
  };

  return (
    <div className="flex flex-col bg-white px-10 py-10 rounded-[30px] w-[460px] z-[1]">
      <form onSubmit={handleSubmit(onSubmit)} className="grid w-full h-full gap-8 place-items-center">
        <div className='grid place-items-center leading-7'>
          <h1 className="text-[30px] font-bold"><span className='text-coral-red'>Sunrise</span> store</h1>
          <p className='text-slate-500 text-[14px] text-center'>Discover a new way to shop</p>
        </div>

        <div className="flex flex-col gap-5 w-full"> 
          <div>
            <input
              type="email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              placeholder="E-mail"
              className="border-2 border-gray-300 py-2 px-4 rounded-md focus:border-coral-red focus:outline-none w-full"
            />
            {errors.email && errors.email.type === "required" && (
              <p className="text-coral-red text-[14px]">Email is required.</p>
            )}
          </div>
          <div>
            <input
              type="password"
              {...register("password", { required: true, minLength: 8, maxLength: 20 })}
              placeholder="Password"
              className="border-2 border-gray-300 py-2 px-4 rounded-md focus:border-coral-red focus:outline-none w-full"
            />
            {errors.password && errors.password.type === "required" && (
              <p className="text-coral-red text-[14px]">Email is required.</p>
            )}
          </div>
          <p className='text-sm'>Having trouble logging in?</p>
          <button type="submit" className="bg-coral-red text-white font-bold py-2.5 rounded-md transition-colors">
            Sign in
          </button>
        </div>

        <div className='flex flex-row w-full gap-2 justify-center items-center text-center'>
          <Divider styles="w-[30px] h-0.5 bg-green-light-primary" />
          <p className='text-sm'>Or Sign with</p>
          <Divider styles="w-[20px] h-0.5 bg-green-light-primary" />
        </div>

        <div className="flex flex-row w-full justify-center gap-2">
          {InfoButtons.map(({ label, icon }, index) => (
            <button key={index} type="button" className="flex gap-1 items-center justify-center text-[13px] text-gray-900 bg-white border border-gray-300 focus:outline-none font-medium rounded-lg  px-5 py-3" onClick={() => signIn('google', { callbackUrl: '/store'})}>
              <Image src={icon} alt={label} width={17} height={16} /> {label}
            </button>
          ))}
        </div>
        
        <p className='text-[14.5px] gap-2'>Don´t have an account? <Link href="/auth/register" className='text-coral-red font-semibold pl-1'>Sign up</Link></p>
      </form>
    </div>
  );
}
