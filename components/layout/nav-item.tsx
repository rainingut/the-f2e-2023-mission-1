import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
export default function NavItem(props: any){
    const router = useRouter();
    const {name, link, url, activeUrl, mobileUrl } = props;
    const calActive = (_url?:any) => {
        const pathname = router.pathname;
        const isActive = link === (_url??pathname);
        const result = !isActive ? url : activeUrl;
        return result;
    }
    const [iconUrl, setIconUrl] = useState(()=>calActive());
    useEffect(()=>{
        setIconUrl(()=>calActive());
    },[router]);
    return (<li className="inline-flex"
    onMouseOver={()=>setIconUrl(activeUrl)}
    onMouseLeave={()=>setIconUrl(()=>calActive())}
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