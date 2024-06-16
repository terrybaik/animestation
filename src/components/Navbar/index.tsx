"use client"
import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
    return (
        <header className="bg-black">
            <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
                <Link href="/" className="text-white font-bold text-2xl">ANIME <span className="text-orange-500">STATION</span></Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar;