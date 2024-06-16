"use client"
import React, {useState, useEffect} from "react";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";

const TopAnime = () => {
    const [anime, setAnime] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    
    

    useEffect(() => {
        async function fetchAnime() {
            const response = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`)
            const data = await response.json();
        
            setAnime(data)
            setLastPage(data.pagination.last_visible_page);
        };
        fetchAnime()
    }, [page]);

    return (
        <div>
            <HeaderMenu page={page}/>
            <AnimeList api={anime} />
            <Pagination 
            page={page}
            setPage={setPage}
            lastPage={lastPage}/>
        </div>
    )
}
export default TopAnime;