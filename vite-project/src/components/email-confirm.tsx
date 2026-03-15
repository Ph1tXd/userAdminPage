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
import { useState } from "react"
import { DialogCode } from "./dialog-code"

export function EmailConfirm() {
    const [open, setOpen] = useState(true);
    const [code, setCode] = useState(false);
    return (
        <>
        {!code && (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>Введите код</DialogTitle>
                </DialogHeader>
                <FieldGroup>
                    <Field>
                    <Label htmlFor="name-1">Подтверждение адреса электронной почты</Label>
                    </Field>
                    <Field>
                    <Button type="submit" onClick={() => setCode(true)}>Отправить код подтверждения</Button>
                    <DialogClose asChild>
                        <Button variant="outline">Выйти</Button>
                    </DialogClose>
                    </Field>
                </FieldGroup>
                <DialogHeader>

                </DialogHeader>
                </DialogContent>
            </Dialog>)
        }
        {code && (
            <DialogCode/>
        )
        }
        </>
    )
}
