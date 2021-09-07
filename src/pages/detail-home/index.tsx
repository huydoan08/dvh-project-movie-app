import Comment from "src/components/comment/comment";
import { FilmDetail } from "src/modules/detail-film";
export default function FilmDetailPage() {
  return (
    <div>
      <FilmDetail />
      <Comment />
    </div>
  );
}
