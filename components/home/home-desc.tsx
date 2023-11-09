import _style from './home-main.module.css';
export default function HomeDesc () {
    return (<div className={'w-full h-full relative overflow-hidden'}>
    <div className={"flex m-auto w-[80%] h-full items-center "}>
        <div className="text flex flex-col w-[60%]">
        </div>
        <div className={"banner-img w-[50%] ml-[-2px] "}>
            <img className="absolute inline-block w-full"
            src='/images/svgs/cat-fly-web.png'/>
        </div>
    </div>
</div>)
}