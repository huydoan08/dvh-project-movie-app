import ContentModal from "src/components/modal/content-modal";
import React from "react";
import { img_300 } from "src/services/services";

interface Props {
  poster: string;
  title: string;
}

export function SingleMovie({ poster, title }: Props) {
  return (
    <div className="flex">
      <ContentModal>
        <div className="flex justify-center hover:bg-white bg-gray-400 w-52 h-80 ml-12 rounded-t-lg mb-10 relative">
          <img
            className="w-48 h-60 absolute mt-2 rounded-t-lg"
            src={`${img_300}${poster}`}
            alt={title}
          />
        </div>
      </ContentModal>
    </div>
  );
}
