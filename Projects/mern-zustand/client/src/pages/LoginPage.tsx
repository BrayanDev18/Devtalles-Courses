import React from 'react'
import { useAuthStore } from '../store/auth';
import { loginRequest, profileRequest } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const setToken = useAuthStore(state => state.setToken);
  const setProfile = useAuthStore(state => state.setProfile);
  const navigate = useNavigate();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;

    const resLogin = await loginRequest(email, password);
    setToken(resLogin.data.token);

    const resProfile = await profileRequest();
    setProfile(resProfile.data.profile);

    navigate('/login')
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px"}}>
      <input type="email" placeholder="Email" style={{ padding: 8, borderRadius: 8}} />
      <input type="password" placeholder="Password" style={{ padding: 8, borderRadius: 8}} />
      <button>Login</button>
    </form> 
  )
}

export default LoginPage
