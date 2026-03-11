import { ChevronRight, Phone } from "lucide-react";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { FieldDescription } from "./ui/field";

export default function TwoFA() {
    return (
        <>
            <Card className="flex flex-row items-center justify-between gap-4 p-4 border-3 hover:opacity-50"
            >
                <div className="border w-16 h-16 rounded-full shrink-0 flex items-center justify-center">
                    <Phone/>
                </div>
                <div className="flex-1 min-w-0"> 
                    <Label className="flex-1 min-w-0 break-all">Телефон</Label>
                    <FieldDescription className="flex-1 min-w-0 break-all">dqw</FieldDescription>
                </div>
                <div>
                    <ChevronRight className=""/>
                </div>
                
            </Card>
        </>
    )
}