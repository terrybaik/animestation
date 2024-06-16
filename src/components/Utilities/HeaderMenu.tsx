import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const HeaderMenu = ({page}:{page:number}) => {
    return (
        <div className="flex text-2xl font-bold py-6">
            <Link href={"/"} className="ml-4 hover:text-orange-500">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <h1 className="flex justify-center w-full">TOP-ANIME {page}#</h1>
        </div>
    )
}

export default HeaderMenu