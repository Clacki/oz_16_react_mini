/** @format */
import movieDetailData from "../data/movieDetailData.json";
import { IMG_BASE_URL } from "../constants/tmdb";

function MovieDetail() {
  const movie = movieDetailData;
  const posterSrc = movie.poster_path ? `${IMG_BASE_URL}${movie.poster_path}` : "";

  return (
    <div className="flex gap-6">
      <img className="w-100 shrink-0" src={posterSrc} alt={movie.title} />

      <div className="space-y-3 w-[600px]">
        <div className="">
          {movie.title} / {movie.vote_average}
        </div>
        <div>{(movie.genres ?? []).map((g) => g.name).join(" · ")}</div>
        <div>{movie.overview}</div>
      </div>
    </div>
  );
}

export default MovieDetail;
