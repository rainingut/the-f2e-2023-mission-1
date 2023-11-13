import _style from './home-main.module.css';
export default function HomeMain (props: any) {
    const {changeView} = props;
return (
    <div className={'w-full h-full ' + _style.bannerImg}>
        <div className={"flex  justify-center m-auto max-w-[1280px] h-full items-center "}>
            <div className="text flex flex-col w-[60%]">
                <img className="inline-block mb-[48px] max-w-[600px]" src='./images/svgs/banner.png'/>
                <button className="w-fit bg-black text-white px-[20px] py-[10px] rounded-full flex items-center"
                onClick={changeView}>
                    <span>候選人簡介</span>
                    <img className="inline-block w-[32px] h-[32px]"
                    src='./images/btns/right.png'/>
                </button>
            </div>
            <div className={"banner-img w-[50%] ml-[-2px] "}>
                {/* <img className="w-full"
                src='/images/svgs/cat-web.png'/> */}
            </div>
        </div>
    </div>
);
}