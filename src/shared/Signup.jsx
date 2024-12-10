import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="max-w-3xl w-fit p-8 bg-white rounded-lg shadow-2xl">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-3xl font-medium text-center">Signup</h1>
          <h2 className="text-sm text-center">Signup to continue</h2>
        </div>
        <div className="mt-8">
          <label className="block text-xl mb-2 text-gray-600">Email</label>
          <input
            className="w-96 h-11  rounded-md border border-gray-300 pl-4"
            placeholder="Email"
            type="email"
          />
        </div>
        <div className="mt-8">
          <label className="block text-xl mb-2 text-gray-600">Password</label>
          <input
            className="w-96 h-11 rounded-md border border-gray-300 pl-4"
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="mt-6">
          <button
            className="bg-red-600 p-3.5 w-full mt-5 rounded-xl text-white text-base"
            onClick={() => navigate("/otp")}
          >
            Send OTP
          </button>
        </div>
        <p className="text-center mt-4 text-gray-400">
          Already have an account? <span className="text-blue-600">login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
