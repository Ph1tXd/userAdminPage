import { useEffect, useState } from "react";
import HeadInput from "./head-input";
import { Button } from "./ui/button";


export default function ChangePassword(){
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(0);
    
    useEffect (() => {

    }, [password])
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
            <div className="flex justify-center sm:justify-start">
                <h1 className="font-medium text-2xl">Смена пароля</h1>
            </div>
            <HeadInput header="Старый пароль" placeholder="Введите старый пароль..." type="password"/>
            <HeadInput header="Новый пароль" placeholder="Введите новый пароль..." type="password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const value = e.target.value
                        setPassword(value)
                    }} />
            <HeadInput header="Повторите пароль" placeholder="Повторите новый пароль..." type="password"/>
            <Button className="sm:">Сохранить</Button>
        </div>
    )
}