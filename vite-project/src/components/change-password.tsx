import { useEffect, useState } from "react";
import HeadInput from "./head-input";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { FieldDescription } from "./ui/field";

export default function ChangePassword(){
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);

    useEffect(() => {
        let score = 0
        if (password.length > 7) score += 25
        if (/[A-Z]/.test(password)) score += 25
        if (/[0-9]/.test(password)) score += 25
        if (/[^A-Za-z0-9]/.test(password)) score += 25
        setStrength(score)
    }, [password])

    const underText = (score:number) => {
        if (score < 50) return "Хуйня пароль";
        if (score < 75) return "Норм, но все равно хуйня";
        if (score < 100) return "Залупа, но можно лучше";
        return "Ахуенно";
    }

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
            {/* <div className="flex justify-center sm:justify-start">
                <h1 className="font-medium text-2xl">Смена пароля</h1>
            </div> */}
            <HeadInput header="Старый пароль" placeholder="Введите старый пароль..." type="password"/>
            <HeadInput header="Новый пароль" placeholder="Введите новый пароль..." type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const value = e.target.value
                        setPassword(value)
                    }} />
            {
                strength != 0 && (
                    <>
                        <Progress 
                        value={strength} 
                    />
                    <FieldDescription className="-mt-2.5">
                        {underText(strength)}
                    </FieldDescription>
                 </>
                )
            }

            <HeadInput header="Повторите пароль" placeholder="Повторите новый пароль..." type="password"/>
            <Button className="sm:">Сохранить</Button>
        </div>
    )
}