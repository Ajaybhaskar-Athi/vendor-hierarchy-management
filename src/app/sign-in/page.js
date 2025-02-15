
'use client'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/authSlice';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = () => {
    if (name && role) {
      dispatch(login({ name, role }));
      router.push('/dashboard'); 
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section - Info */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-gray-800 text-white p-10">
        <h1 className="text-3xl font-bold mb-4">Vendor Cab & Driver Onboarding</h1>
        <p className="text-lg text-gray-300 text-center">
          A comprehensive Vendor Hierarchy Management system designed for <b>MoveInSync</b> to streamline onboarding and operational efficiency.
        </p>
        <div className="mt-6 italic text-gray-400 text-center">
          <p>🚀 "Great journeys start with a single move!"</p>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-1/2 flex justify-center items-center bg-white">
        <div className="w-2/3 p-6 shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
          
          <input
            type="text"
            placeholder="Enter your name"
            className="border p-2 w-full rounded mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <select
            className="border p-2 w-full rounded mb-4"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="Super Vendor">Super Vendor</option>
            <option value="Regional Vendor">Regional Vendor</option>
            <option value="City Vendor">City Vendor</option>
            <option value="Local Vendor">Local Vendor</option>
            <option value="DeployAssociate">Deploy Associate</option>
          </select>

          <button 
            onClick={handleLogin} 
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
