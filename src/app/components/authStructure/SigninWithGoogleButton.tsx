"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

const SigninWithGoogleButton = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="w-full flex cursor-pointer items-center justify-center gap-2 bg-white text-gray-700 font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition duration-300"
    >
      <FcGoogle className="text-xl" />
      Sign in with Google
    </button>
  );
};

export default SigninWithGoogleButton;
