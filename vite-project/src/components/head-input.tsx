import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface InputProps{
    header: string;
    placeholder: string;
}

export default function HeadIpnut({header, placeholder} : InputProps) {
    return (
        <>
            <Label>{header}</Label>
            <Input placeholder={placeholder} className="h-11"></Input>
        </>
    )
}