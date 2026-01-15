/** @format */
import { Link } from "react-router-dom";
import { IMG_BASE_URL } from "../constants/tmdb";

function MovieCard({ movie }) {
  const PosterURL = movie.poster_path ? `${IMG_BASE_URL}${movie.poster_path}` : "이미지가 없습니다";

  return (
    <>
      <div>
        <Link to={`/details/${movie.id}`}>
          <div>
            <img src={PosterURL} alt="posterImage" />
            {movie.title}
            <span> 평점 :{movie.vote_average}</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MovieCard;
