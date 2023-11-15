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
    const [selectType, setSelectType] = useState<any>(donateTypes[0]);
    const [totalMoney, setTotalMoney] = useState(9876558736);
    const custeomRef = useRef(null);
    const styleCtx: any = useContext(StyleContext);
    useEffect(()=>{
        styleCtx?.changeBgColor?.('bg-gray-100');
    },[]);
    return <div className="h-full grow pt-[50px] max-w-[1280px] mx-auto">
        <h1 className="pb-[50px] w-fit mx-auto"><img className="inline-block" src="/images/svgs/title-donate.png"/></h1>
        <div className="flex items-strech">
            <ul className="flex flex-col w-1/2">
                {donateTypes.map(item => (<li 
                key={item.title}
                onClick={()=>setSelectType(item)}
                className={`flex items-center cursor-pointer mb-6 p-6 border-[3px] border-black rounded-xl text-2xl `
                +(selectType?.title===item.title?'bg-primary- shadow-lg':'')
                }>
                    {!item?.custom
                    ?(<>
                        <div className="w-2/3 flex items-center justify-between font-bold">
                            <span className="inline-block">{item.title}</span>
                            <span>NT${item.money?.toLocaleString('en')}</span>
                        </div>
                        <div className="w-1/3 text-right">
                            已有 {item.count?.toLocaleString('en')}人贊助
                        </div>
                    </>)
                    :(<>
                        <div className="w-full">
                            <div className="mb-2 font-bold">{item.title}</div>
                            <div className="relative">
                                <span className="absolute m-3">NT$</span>
                                <input ref={custeomRef}
                                type="number" placeholder="請輸入金額"
                                className="w-full rounded-xl p-3 pl-[70px]"/>
                            </div>
                        </div>
                    </>)}
                </li>))}
            </ul>
            <div className="img w-1/2 items-center justify-center flex flex-col">
                <img className="inline-block w-fit mb-8" src={selectType?.imgUrl || ''}/>
                <button className="inline-flex items-center bg-black text-white rounded-full py-[10px] px-6 text-2xl">
                    <span>前往捐款</span>
                    <img src="/images/btns/right.png"/>
                </button>
            </div>
        </div>

        <div className="mt-2 mb-4 p-3 bg-primary-100 rounded-xl text-center">
            <span className="block text-lg">目前贊助總金額</span>
            <span className="block text-[40px] font-bold">${totalMoney?.toLocaleString('en')}</span>
        </div>
        <div className="font-bold text-[28px] text-center">您的小筆捐款，是每隻毛孩未來的大大動力！</div>
    </div>
} 