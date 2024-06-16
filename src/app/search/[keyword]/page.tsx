

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/app/libs/api";





const SearchAnime = async ({ params }: {params: any}) => {
  const { keyword } = params;
  const searchAnime = await getAnimeResponse("anime", `q=${keyword}`)
  const decode = decodeURIComponent(keyword)

  return (
    <>
      <section>
        <Header title={`Search for ${decode}..`} linkHref={""} linkTitle={""}  />
        <AnimeList api={searchAnime} />
      </section>
    </>
  )
}

export default SearchAnime;
