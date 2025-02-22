"use client";

import { CommentType } from "@/types/comment.type";
import Image from "next/image";

type CommentListProps = {
  comments: CommentType[];
};

export function CommentList({ comments }: CommentListProps) {
  return (
    <div className="space-y-6">
      {comments.map(comment => {
        const dateTime = new Date(comment.createdAt).toLocaleString();
        return (
          <div key={comment.id} className="card p-4 sm:p-5">
            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between mb-3 gap-2">
              <div className="flex items-center gap-3">
                <Image
                  src={comment.avatar}
                  alt={comment.author}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <span className="text-base sm:text-16-medium">
                  {comment.author}
                </span>
              </div>
              <span className="text-xs sm:text-sm text-gray-500">
                {dateTime}
              </span>
            </div>

            <p className="text-sm sm:text-base text-black-200">
              {comment.content}
            </p>

            <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <button className="text-blue-600 hover:underline">Like</button>
              <span>{comment.likes} likes</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
