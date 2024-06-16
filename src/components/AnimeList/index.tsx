import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface AnimeListProps {
  mal_id: number;
  title: string;
  images: {
    webp: {
      image_url: string;
    }
  }
  [key: string]: any;
}

const AnimeList = async ({ api }:{api: any}) => {
  

  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4'>
      {api.data?.map((anime: AnimeListProps, index: number) => {

        return (
          <Link key={`${anime.mal_id}-${index}`} href={`/anime/${anime.mal_id}`} className='cursor-pointer shadow-xl rounded-xl hover:text-orange-500 hover:scale-105 transform transition-all duration-200'>
            <Image 
              src={anime.images.webp.image_url} 
              alt="..." 
              height={300} 
              width={300} 
              className='w-full max-h-64 object-cover rounded-xl'
              />
            <h3 className='md:text-xl text-md font-bold p-4'>{anime.title}</h3>
          </Link>
        )
      })}
    </div>
  )
}

export default AnimeList;
