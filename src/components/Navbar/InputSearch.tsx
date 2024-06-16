// import { MagnifyingGlass } from "@phosphor-icons/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { useRef } from "react";


const InputSearch = () => {
    const router = useRouter();
    const searchRef = useRef<HTMLInputElement>(null);
    

    const handlerSearch = ( event:any ) => {
        const searchInput = (document.getElementById('search') as HTMLInputElement | null)?.value;

        if (event.key === "Enter") {
            router.push(`/search/${searchInput}`)    
        }

        if (searchInput === '' || searchInput === null) {
            router.push(`/`)
        }
        router.push(`/search/${searchInput}`)
    }
    return (
        <div className="relative">
            <input type="text" id="search" placeholder="search anime..." className="w-full px-2 rounded-md text-black" ref={searchRef} onKeyDown={handlerSearch}/>
            <button className="btn absolute bg-red=500 end-3 text-black" onClick={handlerSearch}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    )
}

export default InputSearch;