import _style from './home-main.module.css';
export default function HomeDesc () {
    return (<div className={'w-full h-full relative overflow-hidden'}>
    <div className="title m-auto w-[80%] flex justify-center pt-[36px]">
        <img className="inline-block"
        src='/images/svgs/title-web.png'/>
    </div>
    <div className={"relative flex w-[80%] m-auto h-full justify-center"}>
        <div className="absolute top-1/3 translate-y-[-50%] text flex flex-col w-[450px] px-[36px] py-[50px] rounded-lg bg-primary-100 flex items-strech justify-center mr-[40rem]">
            <div className="title flex items-center font-bold mb-[25px]">
                <span className='text-5xl inline-block mr-[20px]'>喵立翰</span>
                <span className='text-3xl'>Miao Li-Han</span>
            </div>
            <div className="content">
                推動更完善貓咪福利和政策，間接投資台灣未來。民眾身心健康是推動經濟的核心動力。透過完善的貓咪福利政策，為台灣GDP經濟帶來巨大效益。讓一同護航台灣幸福經濟，從照顧每一隻貓咪開始。
            </div>
        </div>
        <div className={"relative banner-img ml-[30rem]"}>
            <img className="inline-block"
            src='/images/svgs/cat-fly-web.png'/>
        </div>
    </div>
</div>)
}