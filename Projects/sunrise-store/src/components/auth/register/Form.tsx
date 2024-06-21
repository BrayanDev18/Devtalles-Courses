'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { UserRegisterProps } from '@/interface/user';
import { UserRegister } from '@/services/auth/user';
import { Divider } from '@/components/common/Divider';

import Google from '../../../../public/icons/google.svg';
import Apple from '../../../../public/icons/apple.svg';
import Facebook from '../../../../public/icons/faceb.svg';
import { useState } from 'react';

import { signIn, useSession } from 'next-auth/react';

export const RegisterUIForm = () => {
  const InfoButtons = [
    { label: 'Google', icon: Google },
    { label: 'Facebook', icon: Facebook },
    { label: 'Apple ID', icon: Apple }
  ];

  const { data: session } = useSession()

  const fullNameUser = session?.user?.name || 'user sunrise'
  const [firstName, lastName] = fullNameUser?.split(' ')

  const [userInfo, setUserInfo] = useState({
    firstName,
    lastName,
    userName: 'user sunrise',
  })

  console.log(session)

  const { register, handleSubmit, formState: { errors } } = useForm<UserRegisterProps>();

  const onSubmit = async (data: UserRegisterProps) => {
    const res = await UserRegister(data)
    console.log(res);

    console.log(data);
  }

  return (
    <div className="flex flex-col bg-white justify-center items-center px-10 py-8 rounded-[30px] z-[1]">
      <form onSubmit={handleSubmit(onSubmit)} className="grid w-full h-full gap-6 place-items-center">
        <div className='grid place-items-center leading-7'>
          <h1 className="text-[30px] font-bold"><span className='text-green-primary'>Sunrise</span> store</h1>
          <p className='text-slate-500 text-[14px] text-center'>Discover a new way to shop</p>
        </div>

        <div className="flex flex-col gap-5 w-max">
          <div>
            <input
              type="text"
              {...register('userName', { required: true })}
              placeholder="User name"
              className="border-2 border-gray-300 py-2 px-4 rounded-md focus:border-green-primary focus:outline-none w-full"
            />
            {errors.userName && errors.userName.type === "required" && (
              <p className="text-green-primary text-[14px]">Email is required.</p>
            )}
          </div>
          <div className='flex gap-2'>
            <div>
              <input
                type="text"
                {...register('firstName', { required: true })}
                placeholder="First name"
                className="border-2 border-gray-300 py-2 px-4 rounded-md focus:border-green-primary focus:outline-none"
              />
              {errors.firstName && errors.firstName.type === "required" && (
                <p className="text-green-primary text-[14px]">First name is required.</p>
              )}
            </div>
            <div>
              <input
                type="text"
                {...register('lastName', { required: true })}
                placeholder="Last name"
                className="border-2 border-gray-300 py-2 px-4 rounded-md focus:border-green-primary focus:outline-none"
              />
              {errors.lastName && errors.lastName.type === "required" && (
                <p className="text-green-primary text-[14px]">Last name is required.</p>
              )}
            </div>
          </div>
          <div>
            <input
              type="email"
              {...register('email', { required: true })}
              placeholder="Email"
              className="border-2 border-gray-300 py-2 px-4 rounded-md focus:border-green-primary focus:outline-none w-full"
            />
            {errors.email && errors.email.type === "required" && (
              <p className="text-green-primary text-[14px]">Email is required.</p>
            )}
          </div>
          <div>
            <input
              type="password"
              {...register('password', { required: true })}
              placeholder="Password"
              className="border-2 border-gray-300 py-2 px-4 rounded-md focus:border-green-primary focus:outline-none w-full"
            />
            {errors.password && errors.password.type === "required" && (
              <p className="text-green-primary text-[14px]">Password is required.</p>
            )}
          </div>
          <p className='text-sm'>Having trouble logging up?</p>
          <button type="submit" className="bg-green-primary text-white font-bold py-2.5 rounded-md transition-colors">
            Sign up
          </button>
        </div>

        <div className='flex flex-row gap-2 justify-center items-center text-center'>
          <Divider styles="w-[30px] h-0.5 bg-green-light-primary" />
          <p className='text-sm'>Or Sigup with</p>
          <Divider styles="w-[20px] h-0.5 bg-green-light-primary" />
        </div>

        <div className="flex flex-row justify-center gap-2">
          {InfoButtons.map(({ label, icon }, index) => (
            <button key={index} type="button" className="flex gap-1 items-center justify-center text-[13px] text-gray-900 bg-white border border-gray-300 focus:outline-none font-medium rounded-lg  px-5 py-3" onClick={() => signIn('google', { callbackUrl: '/store' })}>
              <Image src={icon} alt={label} width={17} height={16} /> {label}
            </button>
          ))}
        </div>

        <p className='text-[14.5px] gap-2'>Do you have an account? <Link href="/auth/login" className='text-green-primary font-semibold pl-1'>Sign in</Link></p>
      </form>
    </div>
  );
}
