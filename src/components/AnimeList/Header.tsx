import Link from "next/link";
import { FC } from "react";
interface HeaderProps {
    title: string;
    linkHref: string;
    linkTitle: string;
}
const Header: FC<HeaderProps> = ({title, linkHref, linkTitle}) => {
    return (
        <div className="p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            {
                linkHref && linkTitle ? 
                <Link href={linkHref} className="md:text-xl text-sm hover:text-indigo-500 underline transition-all">{linkTitle}</Link>
                : null
            }
        </div>
    )
}

export default Header;