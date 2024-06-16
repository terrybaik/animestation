import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnime } from "./libs/api"

  
const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recommendedAnime = await getNestedAnime("recommendations/anime");
  recommendedAnime = { data: recommendedAnime.slice(0, 10)};

  return (
    <>
      <section className="py-4">
        <Header title="Top Anime" linkHref="/top-anime" linkTitle="view all" />
        <AnimeList api={topAnime} />
      </section>
      <section className="py-4">
        <Header title="Recommendations" linkHref="/recommendations" linkTitle="view all" />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  )
}

export default Page;
