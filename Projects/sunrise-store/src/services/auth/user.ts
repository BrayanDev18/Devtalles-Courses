import { UserLoginProps, UserRegisterProps } from "@/interface/user";

export const UserLogin = async(data : UserLoginProps) => {
const response = await  fetch('http://10.2.20.102:5000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  body: JSON.stringify({
      email: data.email,
      password: data.password
    })
  })

  const res = await response.json()
  console.log(res)
  return res
}

export const UserRegister = async (data: UserRegisterProps) => {
  console.log(data)
  
  const response = await fetch('http://10.2.20.102:5000/api/auth/registrar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userName: data.userName,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password
    })
  })

  const res = await response.json()
  console.log(res)
  return res
}