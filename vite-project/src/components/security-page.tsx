import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Lock, KeySquare, ChevronRight } from 'lucide-react'
import { useState } from "react";
import TwoFa from "./two-fa";
import ChangePassword from "./change-password";

export default function SecurityPage() {
    const [activeTab, setActiveTab] = useState<'main' | '2FA' | 'changePassword'>('main');

    if (activeTab === '2FA'){
        return(
            <div><TwoFa/></div>
        )
    }

    if (activeTab === 'changePassword'){
        return(
            <ChangePassword/>
        )
    }
    return(
        <div>
            <Card className="flex flex-row items-center justify-between gap-4 p-4 border-3 hover:opacity-50"
                onClick={() => setActiveTab('2FA')}
            >
                <div className="border w-16 h-16 rounded-full shrink-0 flex items-center justify-center">
                    <Lock/>
                </div>
                <Label className="flex-1 min-w-0 break-all">Двухфакторная аутентификация</Label>
                <div>
                    <ChevronRight />
                </div>
            </Card>
            <Card className="flex flex-row items-center justify-between gap-4 p-4 border-3 mt-4 hover:opacity-50"
                onClick={() => setActiveTab('changePassword')}
            >
                <div className="border w-16 h-16 rounded-full shrink-0 flex items-center justify-center">
                    <KeySquare/>
                </div>
                <Label className="flex-1 min-w-0 break-all">Смена пароля</Label>
                <div>
                    <ChevronRight />
                </div>
            </Card>
        </div>
    )
}