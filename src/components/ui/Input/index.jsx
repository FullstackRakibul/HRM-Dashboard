import { 
    Input 
} from 'antd';
import './index.less';

export const NormalInput=({placeholder,style,className,onChange,value,name})=>{
    return(
        <>
            <Input
            placeholder={`${placeholder?placeholder:""}`}
            className={`${className?className:''}`}
            style={style?style:{}}
            onChange={onChange?onChange:''}
            name={name?name:""}
            value={value?value:''}
            />
        </>
    )
}