import StyleContext from "@/stores/style-context"
import { useContext, useEffect, useRef, useState } from "react"

export default function Contact (){
    const styleCtx: any = useContext(StyleContext);
    const [count, setCount] = useState(0);
    const contactFormRef = useRef(null);
    useEffect(()=>{
        styleCtx?.changeBgColor?.('bg-primary-');
    },[]);

    return (<div className="relative w-full h-full">
        <div className="max-w-[1280px] m-auto pt-[50px] ">
            <h1 className="mb-7 text-center"><img className="inline-block" src="/images/svgs/title-mail.png" alt="服務信箱" /></h1>
            <div className="description w-fit mx-auto mb-[42px] text-center font-bold text-gray-300 text-xl">
                <p>親愛的鄉親，每位市民的意見是我們社區前進的原動力。</p>
                <p>分享您的想法，一同為我們的未來打造更美好！</p>
            </div>
            <form ref={contactFormRef} className="bg-white w-[500px] mx-auto py-[18px] px-14 rounded-xl flex flex-col justify-center items-center">
                <div className="control-item w-full mb-3">
                    <label className="text-xl text-gray-300">
                        <span className="block font-bold mb-1">您的姓名</span>
                        <input type="text" name="name" className="rounded-lg block p-3 border w-full" />
                    </label>
                </div>
                <div className="control-item w-full mb-3">
                    <label className="text-xl text-gray-300">
                        <span className="block font-bold mb-1">電子郵件</span>
                        <input type="email" name="email" className="rounded-lg block p-3 border w-full" />
                    </label>
                </div>
                <div className="relative control-item w-full mb-4 ">
                    <label className="text-xl text-gray-300">
                        <span className="block font-bold mb-1">您的建言</span>
                        <textarea name="recommendation" rows={3} maxLength={50} className="rounded-lg block p-3 border w-full" onInput={(e:any)=>setCount(e?.target?.value?.length||0)}></textarea>
                        <span className="absolute right-0 bottom-0 count m-3 text-gray-200 font-bold select-none">{count} / 50</span>
                    </label>
                </div>
                <div className="control-item w-full text-center text-2xl">
                    <button type="button" className="w-fit rounded-full py-[6px] px-7 text-white bg-black">送出意見</button>
                </div>
            </form>
        </div>

        <div className="footer absolute bottom-0 left-0 w-full bg-black text-white">
            <div className="relative flex justify-between items-center  py-10 max-w-[960px] mx-auto">
                <div>© 2023 喵立翰 版權所有。</div>
                <ul>
                    <li>地址：喵星區，毛茸茸大道88號，喵喵大樓3樓</li>
                    <li>電話：(02) 888-5678</li>
                    <li>郵件：mailto:meowoffice@linmeow.tw</li>
                </ul>
                <img src="/images/svgs/cat-hands.png" alt="paws" className="absolute inline-block bottom-full right-0 ml-[-40px] mb-[-1px]"/>
            </div>
        </div>
    </div>
)} 