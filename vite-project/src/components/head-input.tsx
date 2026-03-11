import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends React.ComponentProps<"input">{
    header: string;
    placeholder: string;
}

export default function HeadInput({header, placeholder, ...props} : InputProps) {
    const [isShow, setIsShow] = useState(false);
    const isPassword = props.type === "password";


    return (
        <>
            <div className="space-y-2">
                <Label>{header}</Label>
                <div className="relative">
                    <Input {...props} placeholder={placeholder} className="h-11" type={isPassword ? (isShow ? "text" : "password") : props.type} />
                    {
                        isPassword && (
                            <div onClick={() => setIsShow(!isShow)} className="absolute right-3 top-1/2 -translate-y-1/2 text-sm">
                                {isShow ? <EyeOff size={18}/> : <Eye size={18}/>}
                            </div>
                        )
                    }
                    
                </div>
            </div>
        </>
    )
}