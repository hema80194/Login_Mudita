import React, { useState } from 'react';
import dogPawImage from './dogpaw.gif';
import newDogImage from './dog.jpg';
import './index.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Logging in with email: ${email} and password: ${password}`);
    };

    return (
    <div className="bg-gray-100 flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
      {/* Card */}
      <div className="card flex flex-col items-center bg-white rounded-lg p-8 max-w-md w-full md:mr-8 mb-4 md:mb-0 shadow-md">
        <div className="flex items-center mb-4">
          <img src={dogPawImage} alt="dog-paw img" className="w-20 h-20 mr-4" />
          <h1 className="text-gray-400 font-bold text-3xl">MUDITA</h1>
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center text-black mb-4">Welcome back</h2>
          <p className="text-gray-400 text-center mb-4">Welcome back! Please enter your details</p>
          <input
            type="text"
            name="Email"
            placeholder="Email"
            id="mail"
            className="border-b-2 border-black mb-4 w-full px-2 pb-2 pt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            name="password"
            placeholder="Password"
            id="pwd"
            className="border-b-2 border-black mb-4 w-full px-2 pb-2 pt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-between items-center mb-4 w-full">
            <div className="flex items-center">
            <input type="checkbox" id="rememberMe" name="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-400">Remember me</label>
            </div>
            <a href="https://support.google.com/accounts/answer/41078?hl=en&co=GENIE.Platform%3DDesktop" className="text-black font-bold underline">Forgot your password</a>
            </div>
            <button
            onClick={handleLogin}
            className="bg-black text-white font-bold py-2 px-4 rounded w-full hover:bg-gray-900 transition duration-300"
            >
            Log in
            </button>
        </div>
        </div>

      {/* Dog Image */}
        <div className="md:block ">
        <img src={newDogImage} alt="dog" className="w-80 h-[430px] object-cover" />
        </div>
    </div>
    );
}

export default LoginPage;