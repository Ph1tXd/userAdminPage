import { Monitor, Smartphone } from "lucide-react";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { FieldDescription } from "./ui/field";
interface Icons {
    deviceName: string;
}

export default function SessionCard({ deviceName } : Icons) {
    return (
        <Card className="flex flex-row items-center gap-4 p-4 border-3">
            <div className="border w-16 h-16 rounded-full shrink-0 flex items-center justify-center">
                { deviceName == "desktop" && <Monitor strokeWidth={1.5}/>}
                { deviceName == "smartphone" && <Smartphone strokeWidth={1.5}/>}
            </div>
            <div>
            <Label className="flex-1 min-w-0 break-all">Desktop</Label>
            <FieldDescription className="flex-1 min-w-0 break-all">2001:0db8:85a3:0000:0000:8a2e:0370:7334</FieldDescription>
            </div>
            <Button variant="outline" className="shrink-0">Удалить</Button>
        </Card>
    )
}