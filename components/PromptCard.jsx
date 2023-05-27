"use client"

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";


const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  return (
    <div className="prompt_card">
      <div className=" flex justify-between items-start gap-5">
        <Image 
          src={post.creator.image}
          alt="user_image"
        />
      </div>
    </div>
  )
}

export default PromptCard