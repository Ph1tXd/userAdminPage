import { SiteHeader } from "@/components/site-header"
import { Card } from "@/components/ui/card"
import EditProfile from "@/components/edit-profile"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Session from "@/components/session"
import { DialogCode } from "@/components/dialog-code"
import { useState, useEffect } from "react"
import SecurityPage from "@/components/security-page"

export default function SettingsPage() {
    const [clicked, setClicked] = useState(false)
    const [changed, setChanged] = useState(false)
    const [showHelpIcon, setShowHelpIcon] = useState(false)


    useEffect (() => {
        if (clicked && changed) {
            setShowHelpIcon(true)
            return;
        }
        if (clicked && !changed) {
            setClicked(false)
            return;
        }
        setShowHelpIcon(false);
    }, [clicked, changed])

    const isValidEmail = (email: string) => {
        const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        return isValid;
    }

    return (
        <> 
            <SiteHeader />
            <div className="px-4 lg:px-6">
            
            <Tabs defaultValue="profile">
            <TabsList className="bg- ">
                <TabsTrigger value="profile" className="border-none">Edit Profile</TabsTrigger>
                <TabsTrigger value="preferences" className="border-none">Preferences</TabsTrigger>
                <TabsTrigger value="session" className="border-none">Session</TabsTrigger>
                <TabsTrigger value="privacy" className="border-none">Security</TabsTrigger>
            </TabsList>
            
            <Card className="p-6 mt-2">
                <TabsContent value="profile">
                    <EditProfile onButtonClick={() => setClicked(true)} onTypeChange={(value) => setChanged(value.trim() !== "" && isValidEmail(value))}/>
                </TabsContent>
                <TabsContent value="preferences"></TabsContent>
                <TabsContent value="session">
                    <Session />
                </TabsContent>
                <TabsContent value="privacy">
                    <SecurityPage/>
                </TabsContent>
            </Card>
            </Tabs>
            </div>
            {showHelpIcon && (
                <DialogCode/>
            )}
        </>
    )
}