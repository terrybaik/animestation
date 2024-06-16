import { getAnimeResponse } from "@/app/libs/api";
import Image from "next/image";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faClose } from "@fortawesome/free-solid-svg-icons";

const Page = async ({params: { id }}) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    return (
        <div className="p-4">
            <div className="flex justify-between">
                <h1 className="text-2xl font-semibold my-4">{anime.data.title} - {anime.data.year}</h1>
                <Link href={"/"} className="hover:text-orange-500 font-bold text-2xl">
                    <FontAwesomeIcon icon={faClose} />
                </Link>
            </div>
            <div className="flex w-full flex-col">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full px-2 gap-2">
                    <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={450}
                    height={100}
                    className="max-h-96 lg:w-full md:w-auto object-cover hover:scale-105"
                    /> 
                    <VideoPlayer youtubeID={anime.data.trailer.youtube_id} />
                </div>
                <div>
                    <div className="flex p-4 lg:mx-36 md:mx-0">
                        <h3 className="bg-orange-500 rounded-xl px-2 mx-1 font-semibold text-sm">Score {anime.data.score}</h3>
                        <h3 className="bg-orange-500 rounded-xl px-2 mx-1 font-semibold text-sm">Rank #{anime.data.rank}</h3>
                        <h3 className="bg-orange-500 rounded-xl px-2 mx-1 font-semibold text-sm">Popularity #{anime.data.popularity}</h3>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold my-4">{anime.data.duration} | {anime.data.rating}</h3>
                        <p>{anime.data.synopsis}</p>
                        <Link href={anime.data.url} className="underline text-indigo-500">official website</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
