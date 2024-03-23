import React, { useState } from 'react';
import axios from 'axios';

interface LoginFormProps {
  setToken: (token: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setToken }) => {
  const [email, setEmail] = useState('george.bluth@reqres.in');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://reqres.in/api/login', { email, password });
      setToken(response.data.token);
      setError(false);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-96 p-4 rounded-2xl bg-slate-200">
      <input type={`email`} placeholder="Email: george.bluth@reqres.in" value={email} onChange={e => setEmail(e.target.value)} required className={`w-full mb-2 px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`} />
      <input type="password" placeholder="Password: any string" value={password} onChange={e => setPassword(e.target.value)} required className={`w-full mb-2 px-3 py-2 placeholder-gray-500 text-gray-900 rounded-md border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`} />
      <button type="submit" className="mb-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">Login</button>
      {error && <p className="text-red-500">Invalid credentials, please try again.</p>}
    </form>
  );
};

export default LoginForm;