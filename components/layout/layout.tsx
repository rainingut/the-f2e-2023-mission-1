import { Fragment } from 'react';
import { useContext } from 'react';
import StyleContext from '@/stores/style-context';
import Link from 'next/link';
import NavItem from './nav-item';
const navList = [
    {
        name: '最新活動',
        url: '/images/btns/paw-white.png', 
        activeUrl: '/images/btns/paw-black.png', 
        mobileUrl: '/images/btns/paw-black.png',
        link: '/news',
    },
    {
        name: '政策議題',
        url: '/images/btns/paw-white.png', 
        activeUrl: '/images/btns/paw-yellow.png', 
        mobileUrl: '/images/btns/paw-yellow.png',
        link: '/policy',
    },
    {
        name: '小額捐贈',
        url: '/images/btns/paw-white.png', 
        activeUrl: '/images/btns/paw-cow.png', 
        mobileUrl: '/images/btns/paw-cow.png',
        link: '/donate',
    },
    {
        name: '服務信箱',
        url: '/images/btns/paw-white.png', 
        activeUrl: '/images/btns/paw-sock.png', 
        mobileUrl: '/images/btns/paw-sock.png',
        link: '/contact',
    },
];


export default function Layout(props: any) {
    const styleCtx: any = useContext(StyleContext);
    const {bgColor} = styleCtx?.styleObj;
    return (<div className={'h-screen overflow-auto ' + bgColor}>
        <nav className='flex items-center justify-around mt-[32px]'>
            <Link className='logo inline-flex h-[87px]' href={'/'} >
                <img src="/images/svgs/logo.png"
                className='block w-full h-full object-contain'/>
            </Link>
            <ul className='flex justify-around gap-[25px]'>
                {navList.map(item => <NavItem
                key={item.name}
                {...item}
                />)}
            </ul>
        </nav>
        <main>{props.children}</main>
    </div>);
}