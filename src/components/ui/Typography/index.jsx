import './index.less';


export const H1=({children,className,style})=>{
    return(
        <>
            <h1
            className={`ha-meem-lib-h1 ${className?className:''}`}
            style={style?style:{}}
            >
                {children}
            </h1>
        </>
    )
}
 
export const H2=({children,className,style})=>{
    return(
        <>
            <h2
            className={`ha-meem-lib-h2 ${className?className:''}`}
            style={style?style:{}}
            >
                {children}
            </h2>
        </>
    )
}
 
export const H3=({children,className,style})=>{
    return(
        <>
            <h3
            className={`ha-meem-lib-h3 ${className?className:''}`}
            style={style?style:{}}
            >
                {children}
            </h3>
        </>
    )
}
export const H4=({children,className,style})=>{
    return(
        <>
            <h4
            className={`ha-meem-lib-h4 ${className?className:''}`}
            style={style?style:{}}
            >
                {children}
            </h4>
        </>
    )
}
 
export const SPAN=({className,style,children})=>{
    return(
        <>
            <span
            className={`ha-meem-lib-span ${className?className:''}`}
            style={style?style:{}}
            >
                {children}
            </span>
        </>
    )
}