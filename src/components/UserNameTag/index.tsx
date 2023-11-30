"use client";

import Image from "next/image";
import placeholder from "../../../public/vercel.svg";
import { userStore } from "@/contexts/userStore";
import { useSession } from "next-auth/react";

export const UserNameTag = () => {
  const user = userStore((store) => store.userData?.user);
  const { data: session } = useSession();

  return (
    <div className="flex items-start gap-5">
      <div>
        {session?.user ? (
          <Image
            src={session.user.image ?? placeholder}
            height={70}
            width={70}
            alt="User picture"
          />
        ) : (
          <div>
            <Image height={70} width={70} src="/icons/userImageProfile.svg" alt="" />
          </div>
        )}
      </div>
      <span className="flex flex-col justify-center items-center gap-5">
        <p className="text-2xl">{user?.name}</p>
        <p>@{!session ? user?.username : "Conta-google"}</p>
      </span>
    </div>
  );
};
