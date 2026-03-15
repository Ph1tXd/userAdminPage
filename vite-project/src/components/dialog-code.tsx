import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MessageSquare } from "lucide-react"
import { useState } from "react"

export function DialogCode() {
    const [open, setOpen] = useState(true);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
        <form>
            <DialogTrigger asChild>
                {!open && (
                    <Button
                        variant="outline"
                        onClick={() => setOpen(true)}
                        className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg size-12"
                    >
                        <MessageSquare/>
                    </Button>
                )
                }
            </DialogTrigger>
            <DialogContent className="sm:max-w-sm">
            <DialogHeader>
                <DialogTitle>Введите код</DialogTitle>
            </DialogHeader>
            <FieldGroup>
                <Field>
                <Label htmlFor="name-1">Код:</Label>
                <Input id="name-1" name="name" placeholder="Код" />
                </Field>
            </FieldGroup>
            <DialogFooter>
                <DialogClose asChild>
                <Button variant="outline">Выйти</Button>
                </DialogClose>
                <Button type="submit">Сохранить</Button>
            </DialogFooter>
            </DialogContent>
        </form>
        </Dialog>
    )
}
