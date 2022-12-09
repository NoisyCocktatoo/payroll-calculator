import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-tl from-green-700 to-green-300/75 flex justify-center items-center login">
      <div className="w-full h-screen md:w-[900px] md:h-[550px] md:rounded-2xl shadow-2xl shadow-slate-600 flex flex-wrap flex-col items-center p-5 bg-[#34302e]">
        <div className="flex flex-wrap py-7 flex-col">
          <h1 className="text-3xl font-bold text-white">LOGIN PAGE</h1>
        </div>
        <div className="w-full border-white border-2"></div>
        <form className="flex flex-col w-full items-start justify-center md:px-[100px] py-5 ">
          <label className="text-xl pt-4 pb-1 text-white">Name:</label>
          <input
            className="rounded-xl p-2 shadow-md shadow-slate-600 w-full"
            placeholder="Name"
            type="text"
          />
          <label className="text-xl pt-4 pb-1 text-white">Password:</label>
          <input
            className="rounded-xl p-2 shadow-md shadow-slate-600 w-full"
            placeholder="Password"
            type="password"
          />
          <Link
            to="/home"
            className="w-full flex items-center justify-center"
          >
            <button className="mt-10 pt-3 pb-4 text-white px-9 bg-green-800 rounded-2xl text-xl shadow-inner shadow-green-900/75 hover:scale-110 ease-in-out duration-100 hover:shadow-md hover:shadow-green-700">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
