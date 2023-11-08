import Link from 'next/link';
export default function NavItem(props: any){
    const {name, link, url, activeUrl, mobileUrl } = props;
    return (<li className="inline-flex">
        <Link className="flex content-center items-center p-[5px]"
        href={link}
        >
            <span className="inline-block w-[35px] h-[35px] mr-[12px]">
                {url && <img src={url}/>}
            </span>
            <span>{name || ''}</span>
        </Link>
    </li>)
}