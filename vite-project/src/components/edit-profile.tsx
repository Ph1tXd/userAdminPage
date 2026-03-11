import { useState } from "react";
import { AvatarBadgeIcon } from "./avatar-badge";
import HeadIpnut from "./head-input";
import { Button } from "./ui/button";

interface Props {
  onButtonClick: () => void;
  onTypeChange: (value: string) => void;
}

export default function EditProfile({ onButtonClick, onTypeChange }: Props) {
    const [email, setEmail] = useState("");

    return(
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="flex justify-center sm:justify-start">
                <div className="w-24 h-24 sm:w-32 sm:h-32">
                    <AvatarBadgeIcon/>
                </div>
            </div>
            <div className="w-full max-w-2xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <HeadIpnut header="First name" placeholder="Enter your first name..."/>
                    </div>
                    <div className="space-y-2">
                        <HeadIpnut header="Last name" placeholder="Enter your last name..."/>
                    </div>
                </div>
                <div className="space-y-2">
                    <HeadIpnut header="Email adress" value={email} placeholder="hui@gmail.com" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        const value = e.target.value
                        setEmail(value)
                        onTypeChange(value)
                    }} />   
                </div>
                <div className="space-y-2">
                    <HeadIpnut header="Phone number" placeholder="+7-(999)-999-222"/>
                </div>
                <div className="flex justify-center gap-3 sm:justify-end">
                    <Button variant="outline">
                        Отмена
                    </Button>

                    <Button onClick={onButtonClick}>
                        Сохранить
                    </Button>
                </div>
            </div>
        </div>
    )
}