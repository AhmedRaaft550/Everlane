import SigninWithGoogleButton from "@/app/components/authStructure/SigninWithGoogleButton";

const LoginCard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-900 mb-4">
        Sign in with Google
      </h1>
      <p className="text-gray-200 mb-6">
        Access your account quickly using your Google profile.
      </p>
      <SigninWithGoogleButton />
      <p className="text-gray-300 text-sm mt-6">
        No password required. Just one click and you are in!
      </p>
    </div>
  );
};

export default LoginCard;
