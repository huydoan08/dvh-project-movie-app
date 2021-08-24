import ContentModal from "src/components/modal/content-modal";
import { img_300 } from "src/services/services";

export function SingleMovie({ poster }: any) {
  return (
    <div className="flex">
      <ContentModal >
        <div className="flex justify-center hover:bg-white bg-gray-400 w-52 h-80 ml-12 rounded-t-lg mb-10 relative">
          <img className="w-48 h-60 absolute mt-2 rounded-t-lg" src={`${img_300}${poster}`} />
        </div>
      </ContentModal>
    </div>
  );
}
