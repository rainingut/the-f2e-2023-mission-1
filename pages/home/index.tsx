import _style from '../../components/home/home-main.module.css';
import HomeDesc from "@/components/home/home-desc";
import HomeMain from "@/components/home/home-main";
import StyleContext from "@/stores/style-context"
import { useContext, useEffect, useState } from "react"

export default function Home (){
    const styleCtx: any = useContext(StyleContext);
    const [current, setCurrent] = useState(1);
    useEffect(()=>{
        styleCtx?.changeBgColor?.('bg-primary-');
    },[]);
    const changeCurrentView = () => {
        setCurrent(2);
    };
    return <div className={"w-full h-full " + _style.bottomImg}>
        { current===1 && <HomeMain changeView={changeCurrentView} /> }
        { current===2 && <HomeDesc/> }
    </div>
} 