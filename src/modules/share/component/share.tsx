import { FacebookShareButton, FacebookIcon } from "react-share";
export function Share({ video }: any) {
  const shareUrl = `https://www.youtube.com/watch?v=${video}`;
  return (
    <div>
      <FacebookShareButton url={shareUrl} className="flex ml-5">
        <FacebookIcon size={25} round={true} />
        <p className="ml-2 text-gray-400">Facebook share</p>
      </FacebookShareButton>
    </div>
  );
}
