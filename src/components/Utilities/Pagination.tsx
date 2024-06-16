
import React, {useEffect, useState} from "react";


const Pagination = ({page, setPage, lastPage}:{page:number; setPage:any; lastPage:number}) => {

  const scrollTop = () => scrollTo({
    behavior: "smooth",
    top: 0
  });

  const handlerNextPage = () => {
    setPage((prevState: number) => prevState + 1);
    scrollTop();
  };

  const handlerPrevPage = () => {
    setPage((prevState: number) => prevState - 1);
    scrollTop();
  };


  return (
    <div className="flex justify-center p-2 gap-4 text-xl font-bold">
      {page <= 1 ? null :
        <button onClick={handlerPrevPage} className="prevBtn">Prev</button>
      } 
      <h2>{page} of {lastPage}</h2>
      {page >= lastPage ? null :
        <button onClick={handlerNextPage} className="nextBtn">Next</button>
      }
    </div>
  );
};

export default Pagination;
