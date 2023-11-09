import StyleContext from "@/stores/style-context"
import { useContext, useEffect } from "react"

export default function News (){
    const styleCtx: any = useContext(StyleContext);
    useEffect(()=>{
        styleCtx?.changeBgColor?.('bg-gray-100');
    },[]);
    return <>
        hi news
    </>
} 