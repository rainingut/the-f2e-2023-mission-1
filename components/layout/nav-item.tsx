import Link from 'next/link';
export default function NavItem(props: any){
    const {name, link, url, activeUrl, mobileUrl } = props;
    return (<li className="inline-flex">
        <Link className="inline-flex content-center items-center"
        href={link}
        >
            <span className="inline-block w-[35px] h-[35px]">
                {url && <img src={url}/>}
            </span>
            <span>{name || ''}</span>
        </Link>
    </li>)
}