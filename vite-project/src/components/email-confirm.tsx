import { Button } from "@/components/ui/button"
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"

export function EmailConfirm() {
    const [code, setCode] = useState(false);
    const [timer, setTimer] = useState(60);
    useEffect(() => {
        if (timer <= 0) return;

        const timeout = setTimeout(() => {
            setTimer(timer - 1);
        }, 1000)
        
        return () => clearTimeout(timeout);
    }, [timer])

    return (
        <>
        <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Введите код</DialogTitle>
                    </DialogHeader>
            {!code ? (
                    

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
                    ) : (
                <form>
                    <FieldGroup>
                        <Field>
                        <Label htmlFor="name-1">Код:</Label>
                        <Input id="name-1" name="name" placeholder="Код" className="mb-5"/>
                        </Field>
                    </FieldGroup>
                    <DialogHeader>
                        {timer != 0 ?(
                            <DialogDescription className="flex justify-center">Отправить код повтороно через 00:{String(timer).length === 1 && 0}{timer}</DialogDescription>
                        ):
                        (
                            <Button type="submit">Отправить код повторно</Button>
                        )
                        }
                        
                        <Button type="submit">Отправить код</Button>
                        <DialogClose asChild>
                        <Button variant="outline">Выйти</Button>
                        </DialogClose>
                    </DialogHeader>
                    
                </form>
            )
            }
        </DialogContent>
        </>
    )
}
