import StyleContext from "@/stores/style-context"
import { useContext, useEffect } from "react";

const policys:{
    imgUrl:string,
    title:string,
    container: {
        title: string,
        content: string,
    }[]
}[] = [
    {
        imgUrl: '/images/svgs/policy-1-web.png',
        title: `為毛孩子謀福利！\n推動寵物醫療保障方案`,
        container: [
            {
                title: '設立寵物醫療基金',
                content: '每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用',
            },
            {
                title: '提供醫療補助',
                content: '每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力',
            },
            {
                title: '合作動物醫院',
                content: '目前已有和超過 200 家動物醫院進行初步的合作討論',
            },
        ],
    },
    {
        imgUrl: '/images/svgs/policy-2-web.png',
        title: `打造休閒天堂！\n推廣寵物休閒與娛樂場所`,
        container: [
            {
                title: '建立寵物公園',
                content: '每年撥款新台幣 5 億元，在各大都市建立專屬的寵物公園。預計在第一年內，將在全國範圍內建立至少 10 座寵物公園',
            },
            {
                title: '推廣寵物友善商家',
                content: '鼓勵商家提供寵物友善環境，並為參與商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫',
            },
        ]
    },
    {
        imgUrl: '/images/svgs/policy-3-web.png',
        title: `推廣寵物飼養教育\n讓愛更加專業`,
        container: [
            {
                title: '建立寵物飼養教育中心',
                content: '每年撥款台幣 3 億元，在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心',
            },
            {
                title: '推廣寵物飼養課程',
                content: '與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益',
            },
        ]
    },
];

export default function Policy (){
    const styleCtx: any = useContext(StyleContext);
    useEffect(()=>{
        styleCtx?.changeBgColor?.('bg-primary-');
    },[]);
    return <div className="h-full pt-[50px] max-w-[1280px] mx-auto">
        <h1 className="title w-fit text-center m-auto mb-[30px]"><img className="inline-block" src="/images/svgs/title-policy.png" alt="政治議題"/></h1>

        <div className="flex gap-8 items-strech justify-between">
            {policys.map(policy => (<div key={policy.title} className="flex flex-col items-strech w-[350px] py-6 px-[15px]">
                <div className="img w-fit mx-auto"><img className="h-[168px] inline-block mb-3" src={policy.imgUrl}/></div>
                <h3 className="title font-bold text-3xl text-center whitespace-pre mb-3">{policy.title}</h3>
                <ul className="card rounded-xl py-6 px-[18px] bg-primary-100 grow">
                    {policy.container.map(item => (<li key={item.title} className="mb-5">
                        <h4 className="font-bold text-xl">{item.title}</h4>
                        <p className="mb-0 text-lg">{item.content}</p>
                    </li>))}
                </ul>
            </div>))}
        </div>
    </div>
} 