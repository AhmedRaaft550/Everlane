import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authOptions";
import Image from "next/image";
import signinBackground from "../../../../public/images/signinBackground.jpg";
import LoginCard from "@components/authStructure/LoginCard";
import LogoutCard from "@components/authStructure/LogoutCard";

const SignIn = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="relative flex flex-col items-center justify-center h-full">
      <Image
        src={signinBackground}
        alt="Background"
        fill
        priority
        className="object-cover -z-10 blur-sm"
      />

      <div className="bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-lg text-center max-w-sm w-full">
        {!session ? (
          <>
            <LoginCard />
          </>
        ) : (
          <>
            <LogoutCard session={session} />
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;
