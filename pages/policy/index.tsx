import StyleContext from "@/stores/style-context"
import { useContext, useEffect } from "react"

export default function Policy (){
    const styleCtx: any = useContext(StyleContext);
    useEffect(()=>{
        styleCtx?.changeBgColor?.('bg-primary-');
    },[]);
    return <>
        hi Policy
    </>
} 