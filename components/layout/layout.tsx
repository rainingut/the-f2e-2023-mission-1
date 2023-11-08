import { Fragment } from 'react';
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
    return (<div className='bg-gray-100'>
        <nav className='flex items-center'>
            <Link className='logo  h-[87px]'
            href={'/'}
            >
                <img src="/images/svgs/logo.png"
                className='block h-full'/>
            </Link>
            <ul className=''>
                {navList.map(item => <NavItem 
                key={item}
                {...item}
                />)}
            </ul>
        </nav>
        <main>{props.children}</main>
    </div>);
}