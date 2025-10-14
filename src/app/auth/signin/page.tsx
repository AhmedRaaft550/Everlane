import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/authOptions";
import LoginCard from "@components/authStructure/LoginCard";
import LogoutCard from "@components/authStructure/LogoutCard";

export const revalidate = 60;

const SignIn = async () => {
  const session = await getServerSession(authOptions);

  return (
    <section className="relative flex flex-col items-center justify-center h-full overflow-hidden">
      {/*  background image */}
      <div
        className="absolute inset-2 bg-[url('/images/signinBackground.avif')] bg-cover bg-center filter blur-sm scale-105 -z-10"
        aria-hidden="true"
      ></div>

      {/*  overlay */}
      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      {/* Auth card */}
      <div className="bg-white/20 backdrop-blur-sm p-10 rounded-2xl shadow-lg text-center max-w-sm w-[90%] sm:w-full">
        {!session ? <LoginCard /> : <LogoutCard session={session} />}
      </div>
    </section>
  );
};

export default SignIn;
