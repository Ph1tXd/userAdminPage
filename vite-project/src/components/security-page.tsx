import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Lock, KeySquare, ChevronRight } from 'lucide-react'
import { useState } from "react";
import TwoFa from "./two-fa";
import ChangePassword from "./change-password";
import { ChevronLeft } from 'lucide-react';
import { EmailConfirm } from "./email-confirm";

export default function SecurityPage() {
    const [activeTab, setActiveTab] = useState<'main' | '2FA' | 'changePassword'>('main');

    if (activeTab === '2FA'){
        return(
            // <div className="flex flex-col">
            //     <div className="flex items-center space-x-2 mb-4 cursor-pointer" onClick={() => setActiveTab('main')}>
            //         <ChevronLeft />
            //         <span className="text-xl font-semibold">Двухфакторная аутентификация</span>
            //     </div>
            //     <TwoFa/>
            // </div>
            <EmailConfirm/>
        )
    }

    if (activeTab === 'changePassword'){
        return(
            <div className="flex flex-col">
                <div className="flex items-center space-x-2 mb-4 -ml-1.5 cursor-pointer" onClick={() => setActiveTab('main')}>
                    <ChevronLeft />
                    <span className="text-xl font-semibold">Смена пароля</span>
                </div>
                <ChangePassword/>
            </div>
        )
    }

    if (activeTab === 'main'){
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
}