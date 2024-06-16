
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import AnimeList from "@/components/AnimeList";
import { getNestedAnime } from "@/app/libs/api";
import Link from "next/link";


const Page = async () => {
    let recommendationsAnime = await getNestedAnime("recommendations/anime")
    recommendationsAnime = {data: recommendationsAnime};


    return (
        <div>
            <div className="flex text-2xl font-bold py-6">
                <Link href={"/"} className="ml-4 hover:text-orange-500">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
                <h1 className="flex justify-center w-full">#RECOMMENDED</h1>
            </div>
            <AnimeList api={recommendationsAnime} />
        </div>
    )
}
export default Page;