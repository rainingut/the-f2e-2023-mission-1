import StyleContext from "@/stores/style-context"
import { useContext, useEffect, useRef, useState } from "react"

const donateTypes = [
    {
        imgUrl: '/images/svgs/sponsor-friend.png',
        title: '喵星人之友',
        money: 600,
        count: 9957,
    },
    {
        imgUrl: '/images/svgs/sponsor-master.png',
        title: '喵星大使',
        money: 6000,
        count: 2000,
    },
    {
        imgUrl: '/images/svgs/sponsor-legend.png',
        title: '喵星傳奇',
        money: 60000,
        count: 999,
    },
    {
        imgUrl: '/images/svgs/sponsor-custom.png',
        title: '自訂贊助金額',
        custom: true,
    },
];

export default function Donate (){
    const [selectType, setSelectType] = useState(null);
    const [customMoney, setCustomMoney] = useState(null);
    const custeomRef = useRef(null);
    const styleCtx: any = useContext(StyleContext);
    useEffect(()=>{
        styleCtx?.changeBgColor?.('bg-gray-100');
    },[]);
    return <div className="h-full grow pt-[50px] max-w-[1280px] mx-auto">
        <h1 className="pb-[50px] w-fit mx-auto"><img className="inline-block" src="/images/svgs/title-donate.png"/></h1>
        <div className="flex">
            <ul className="flex flex-col w-1/2">
                {donateTypes.map(item => (<li className={`flex items-center cursor-pointer mb-6 p-6 border-[3px] border-black rounded-xl`}>
                    {!item?.custom
                    ?(<>
                    <div className="w-2/3 flex items-center">
                        <span className="inline-block whitespace-nowrap">{item.title}</span>
                        <span>NT${item.money?.toLocaleString('en')}</span>
                    </div>
                    <div className="w-1/3 whitespace-nowrap">
                        已有 {item.count?.toLocaleString('en')}人贊助
                    </div>
                    </>)
                    :(<>
                    
                    </>)}
                </li>))}
            </ul>
            <div className="img w-1/2"></div>
        </div>
    </div>
} 