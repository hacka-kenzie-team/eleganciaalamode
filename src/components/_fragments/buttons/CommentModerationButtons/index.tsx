"use client";

import { commentStore } from "@/contexts/commentStore";
import placeholder from "../../../../../public/vercel.svg";
import Image from "next/image";
import { IComment } from "@/contexts/@commentTypes";
import editIcon from "@/assets/icons/editIcon.svg";
import deleteIcon from "@/assets/icons/trashIcon.svg";

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
    <div className="flex gap-5 mt-5">
      <button type="button" onClick={() => handleCommentManageClick("edit")} className="bg-second px-5 py-2 rounded-md">
        <Image
          src={editIcon}
          height={10}
          width={10}
          alt="Ícone de uma caneta"
        />
      </button>
      <button type="button" onClick={() => handleCommentManageClick("delete")} className="bg-second px-5 py-2 rounded-md">
        <Image
          src={deleteIcon}
          height={10}
          width={10}
          alt="Ícone de uma lata de lixo"
        />
      </button>
    </div>
  );
};
