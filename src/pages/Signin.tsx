import React from "react";
import authImage from "../assets/auth.png";
import google from "../assets/google.png";

const Signin = () => {
  return (
    <div className="grid grid-cols-3 items-center px-4">
      <div className="col-span-1">
        <form>
          <h1 className="font-bold text-4xl">Login</h1>
          <p className="my-6 font-thin">Save your growth and get support</p>
          <button className="w-full flex items-center justify-center space-x-3 mt-4 border border-gray-400 p-3 rounded-3xl">
            <span className="text-sm">signin with google</span>
            <img src={google} width={20} />
          </button>

          <div className="mt-4">
            <div className="my-6">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="block p-3 border border-gray-300 w-full bg-[#EDF0F2] rounded-md font-light"
              />
            </div>

            <div className="my-6">
              <label>Password</label>
              <input
                type="password"
                placeholder="Minimum 8 characters"
                className="block p-3 border border-gray-300 w-full bg-[#EDF0F2] rounded-md font-light"
              />
            </div>

            <div className="flex items-center justify-between my-4">
              <div className="flex items-center space-x-3">
                <input type="checkbox" />
                <p className="font-light">Remember me</p>
              </div>
              <p className="font-semibold">Forgot password?</p>
            </div>

            <div>
              <button className="text-white bg-[#101540] w-full p-3 rounded-xl mt-8">
                Login
              </button>
            </div>

            <p className="py-3">Not registered yet? Create a new account</p>
          </div>
        </form>
      </div>
      <div className="col-span-2">
        <img src={authImage} className="w-full" />
      </div>
    </div>
  );
};

export default Signin;
