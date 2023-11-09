import Link from 'next/link';
import { useState } from 'react';
export default function NavItem(props: any){
    const {name, link, url, activeUrl, mobileUrl } = props;
    const [iconUrl, setIconUrl] = useState(url);
    return (<li className="inline-flex"
    onMouseOver={()=>setIconUrl(activeUrl)}
    onMouseLeave={()=>setIconUrl(url)}
    >
        <Link className="flex content-center items-center p-[5px]"
        href={link}
        >
            <span className="inline-block w-[35px] h-[35px] mr-[12px]">
                {iconUrl && <img src={iconUrl} />}
            </span>
            <span>{name || ''}</span>
        </Link>
    </li>)
}