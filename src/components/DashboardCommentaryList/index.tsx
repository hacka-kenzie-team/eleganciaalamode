"use client";

import { userStore } from "@/contexts/userStore";
import { CommentaryCard } from "../CommentaryCard";
import { UserNameTag } from "../UserNameTag";
import { DefaultButton } from "../_fragments/buttons/DefaultButton";

export const DashboardCommentaryList = () => {
  const user = userStore((state) => state.userData?.user);
  return (
    <section className="flex flex-col gap-8 md:flex-row md:justify-around md:w-full md:items-start">
      <UserNameTag />
      <button className="md:hover:scale-[1.02] transition-all">
        <DefaultButton>apagar conta</DefaultButton>
      </button>
      <div>
        <h1 className="text-2xl">Minhas Avaliações:</h1>
        <ul className="divide-y divide-second">
          {user &&
            (!user.comments ? (
              <li>Nenhum comentário feito ainda.</li>
            ) : (
              user.comments.map((comment) => (
                <CommentaryCard comment={comment} key={comment.id} />
              ))
            ))}
        </ul>
      </div>
    </section>
  );
};
