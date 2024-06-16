// components/TopAnimeServer.tsx
import React from 'react';
import AnimeList from '@/components/AnimeList';
import HeaderMenu from '@/components/Utilities/HeaderMenu';
import Pagination from '@/components/Utilities/Pagination';

const TopAnimeServer = async ({ page }: { page: number }) => {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime?page=${page}`);
    const data = await response.json();

    return (
        <div>
            <HeaderMenu page={page} />
            <AnimeList api={data} />
            <Pagination 
                page={page}
                setPage={() => {}}
                lastPage={data.pagination.last_visible_page}
            />
        </div>
    );
};

export default TopAnimeServer;
