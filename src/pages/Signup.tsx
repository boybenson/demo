import React from "react";
import authImage from "../assets/signup.png";

const Signup = () => {
  return (
    <div className="grid grid-cols-3 items-center px-4">
      <div className="col-span-1">
        <img src={authImage} className="" />
      </div>
      <div className="col-span-2 ml-8">
        <form>
          <h1 className="font-semibold text-2xl my-4">Register</h1>
          <p>Manage all your inventoryefficiently</p>
          <p className="font-thin py-3">
            Let's get you all setup so you can verify your personal account and
            begin setting up your work profile
          </p>
          <div className="grid grid-cols-2 space-x-6 my-4">
            <div>
              <label>First Name</label>
              <input
                placeholder="Enter your name"
                className="block p-3 border border-gray-300 w-full bg-[#EDF0F2] rounded-md font-light"
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                placeholder=""
                className="block p-3 border border-gray-300 w-full bg-[#EDF0F2] rounded-md font-light"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 space-x-6 my-10">
            <div>
              <label>Email</label>
              <input
                placeholder="Enter your name"
                className="block p-3 border border-gray-300 w-full bg-[#EDF0F2] rounded-md font-light"
              />
            </div>
            <div>
              <label>Phone</label>
              <input
                placeholder=""
                className="block p-3 border border-gray-300 w-full bg-[#EDF0F2] rounded-md font-light"
              />
            </div>
          </div>

          <div>
            <label>Password</label>
            <input
              placeholder="********************"
              className="block p-3 border border-gray-300 w-full bg-[#EDF0F2] rounded-md font-light"
            />
          </div>

          <div className="my-6 flex items-center space-x-3">
            <input type="checkbox" />
            <p>i agree to all terms, privacy policy and fees</p>
          </div>

          <div>
            <button className="bg-[#101540] text-white w-[120px] p-3 rounded-2xl">
              sign up
            </button>
          </div>
          <p className="mt-2">Already have an account? Log in</p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
