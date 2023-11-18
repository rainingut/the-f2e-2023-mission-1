import StyleContext from "@/stores/style-context";
import { useContext, useEffect } from "react";
import _style from '@/components/news/news.module.css';

const newsData = [
    {
        imgUrl: `/images/photos/new-paper-web.png`,
        time: `2023.12.26`,
        title: `參與台北寵物論壇，爭取貓咪友善環境`,
        content: `炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。`,
    },
    {
        imgUrl: `/images/photos/new-child-web.png`,
        time: `2023.12.24`,
        title: `掃街模式開啟！帶著你的貓耳，來和我一起走！`,
        content: `街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。`,
    },
    {
        imgUrl: `/images/photos/new-model-web.png`,
        time: `2023.12.20`,
        title: `收容所模特兒大比拼！`,
        content: `今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！`,
    },
];

export default function News (){
    const styleCtx: any = useContext(StyleContext);
    useEffect(()=>{
        styleCtx?.changeBgColor?.('bg-gray-100');
    },[]);
    return <div className="h-full">
        <div className="max-w-[1280px] mx-auto pt-[50px]">
            <h1 className="title w-fit text-center m-auto mb-[30px]"><img className="inline-block" src="/images/svgs/title-news.png" alt="最新活動"/></h1>
            <div className="banner h-[150px]">
                <img className='inline-block' src="/images/svgs/left-cat-cup.png" alt="cat-cup" />
            </div>
            <div className="flex flex-col items-strech pt-3">
                { newsData.map(news => (
                    <div key={news.title} className={"card pb-[18px] ml-[135px] pl-[50px] "+_style.card} >
                        <div className="wrap flex items-strech gap-6 ">
                            <div className="img"><img className="inline-block min-w-[224px]" src={news.imgUrl} alt={news.title} /></div>
                            <div className="news-content">
                                <div className="time bg-black text-primary- text-center font-bold text-xl rounded-full w-fit py-1 px-5 mb-1">{news.time}</div>
                                <div className="title  font-bold text-xl mb-3">{news.title}</div>
                                <div className="text">{news.content}</div>
                            </div>
                        </div>
                    </div>
                )) }

            </div>
        </div>
    </div>
} 