"use client";

import { signOut } from "next-auth/react";
import { IoLogOutOutline } from "react-icons/io5";

const SignOut = () => {
  return (
    <button
      onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
      className="w-full flex items-center justify-center gap-2 bg-amber-800 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-amber-900 hover:shadow-lg transition duration-300"
    >
      <IoLogOutOutline className="text-xl" />
      Sign out
    </button>
  );
};

export default SignOut;
