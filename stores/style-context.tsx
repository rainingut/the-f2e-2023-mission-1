import { createContext, useEffect, useState } from 'react';

export const StyleContext: any = createContext({
    styleObj:{},
    changeBgColor:()=>{},
});

export function StyleProvider(props: any){
    const [styleObj, setStyleObj] = useState({
        bgColor: 'bg-gray-100',
    });
    const changeBgColor = (colorClassName: string) => {
        setStyleObj((prev: any) => ({...prev, bgColor: colorClassName }));
    };
    const context = {
        styleObj,
        changeBgColor,
    };
    return (<StyleContext.Provider value={context}>
        {props.children}
    </StyleContext.Provider>);

}

export default StyleContext;