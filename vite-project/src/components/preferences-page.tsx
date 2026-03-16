import { useTheme } from "next-themes";
import { Card } from "./ui/card";
import { Moon, Sun } from "lucide-react";
import { Label } from "./ui/label";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react";

export default function PreferencesPage() {
    const { setTheme } = useTheme();
    const [icon, setIcon] = useState('moon');

    return (
        <>
                <Card className="flex flex-row items-center justify-between gap-4 p-4 border-3"
                >
                    <div className="border w-16 h-16 rounded-full shrink-0 flex items-center justify-center">
                        {icon === 'moon' && 
                            <Moon/>
                        }
                        {icon === 'sun' && 
                            <Sun/>
                        }
                    </div>
                    <Label className="flex-1 min-w-0 break-all">
                        {icon === 'moon' && 
                            <>Темная тема</>
                        }
                        {icon === 'sun' && 
                            <>Светлая тема</>
                        }
                    </Label>
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            Выбрать тему
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => {setTheme("light") 
                            setIcon('sun')}}>
                        Светлая
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => {setTheme("dark")
                            setIcon('moon')
                        }}>
                        Темная
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                    </DropdownMenu>
                </Card>
        </>
    )
}