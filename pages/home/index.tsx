import StyleContext from "@/stores/style-context"
import { useContext, useEffect } from "react"

export default function Home (){
    const styleCtx: any = useContext(StyleContext);
    useEffect(()=>{
        styleCtx?.changeBgColor?.('bg-primary-');
    },[]);
    return <>
        hi home
    </>
} 