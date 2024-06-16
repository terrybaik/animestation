

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// const SearchPage = () => {
//     return (
//         <div className="text-2xl font-bold">
//             <Link href="/" passHref>
//                 <a className="hover:text-orange-500 m-4">
//                     <FontAwesomeIcon icon={faArrowLeft} />
//                 </a>
//             </Link>
//             <div className="flex justify-center items-center h-screen">
//                 <MagnifyingGlassPlus size={32} className="text-orange-600" />
//                 <h1 className="text-white">Search Something..</h1>
//             </div>
//         </div>
//     );
// };

// export default SearchPage;

export default function Page() {
    return (
        <div className="text-2xl font-bold ">
             <Link href={"/"} className="">
                 <div className="hover:text-orange-500 m-4">
                     <FontAwesomeIcon icon={faArrowLeft} />
                 </div>
             </Link>
             <div className="flex justify-center items-center h-screen">
                 <FontAwesomeIcon icon={faMagnifyingGlass} className="text-orange-500"/>
                 <h1 className="text-white">Search Something..</h1>
             </div>
        </div>
    )
}