import Image from "next/image";
import SignOut from "@/app/components/authStructure/SignOut";
import { Session } from "next-auth";

const LogoutCard = async ({ session }: { session: Session }) => {
  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 text-center transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className="relative w-24 h-24 mx-auto mb-4">
        {session.user?.image && (
          <Image
            src={session.user.image}
            alt="Profile Picture"
            width={96}
            height={96}
            className="rounded-full border-4 border-white/40 shadow-md"
          />
        )}

        <span className="absolute inset-0 rounded-full border-2 border-amber-400 animate-pulse blur-sm"></span>
      </div>

      <h1 className="text-3xl font-extrabold text-black tracking-wide mb-2 font-mono">
        {session.user?.name}
      </h1>
      <p className="text-black text-sm italic mb-6">{session.user?.email}</p>

      <SignOut />
    </div>
  );
};

export default LogoutCard;
