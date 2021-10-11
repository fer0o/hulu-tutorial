import Image from "next/dist/client/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div 
     className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="p-2">
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">Title: {result.title || result.original_name || result.name}</h2>
        <h2> International Name: {result.name || result.title}</h2>
        <h2> Original Languaje: {result.original_language}</h2>
        <p className="truncate max-w-md"> Descriptio: {result.overview}</p>
        <p>
            Release date: {result.release_date || result.first_air_date} </p>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          <ThumbUpIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
