import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
export default function Secutrity() {
    return(
        <Card className="flex flex-row items-center justify-between p-4 w-100">
            <div className="border w-16 h-16 rounded-full shrink-0">
            </div>
            <Label className="">Desktop</Label>
            <Button variant="outline" className="">Удалить</Button>
        </Card>
    )
}