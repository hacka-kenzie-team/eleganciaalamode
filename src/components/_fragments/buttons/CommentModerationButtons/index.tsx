"use client";

import { commentStore } from "@/contexts/commentStore";
import Image from "next/image";
import { IComment } from "@/contexts/@commentTypes";

export const CommentModerationButtons = ({
  comment,
}: {
  comment: IComment;
}) => {
  const { commentaryModalToggle, setActiveComment } = commentStore(
    (state) => state
  );

  const handleCommentManageClick = (operation: "delete" | "edit") => {
    commentaryModalToggle(true, operation);
    setActiveComment(comment);
  };

  return (
    <div className="flex gap-5 mt-5 ">
      <button
        type="button"
        onClick={() => handleCommentManageClick("edit")}
        className="bg-second px-5 py-2 rounded-md md:hover:scale-[1.02] transition-all"
      >
        <Image
          src="/icons/editIcon.svg"
          height={10}
          width={10}
          alt="Ícone de uma caneta"
        />
      </button>
      <button
        type="button"
        onClick={() => handleCommentManageClick("delete")}
        className="bg-second px-5 py-2 rounded-md md:hover:scale-[1.02] transition-all"
      >
        <Image
          src="/icons/trashIcon.svg"
          height={10}
          width={10}
          alt="Ícone de uma lata de lixo"
        />
      </button>
    </div>
  );
};
