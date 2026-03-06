import { SiteHeader } from "@/components/site-header"
import { Card } from "@/components/ui/card"
import EditProfile from "@/components/edit-profile"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Secutrity from "@/components/security"

export default function SettingsPage() {

    return (
        <> 
            <SiteHeader />
            <div className="px-4 lg:px-6">
            
            <Tabs defaultValue="profile">
            <TabsList className="bg- ">
                <TabsTrigger value="profile" className="border-none">Edit Profile</TabsTrigger>
                <TabsTrigger value="preferences" className="border-none">Preferences</TabsTrigger>
                <TabsTrigger value="security" className="border-none">Security</TabsTrigger>
                <TabsTrigger value="privacy" className="border-none">Data Privacy</TabsTrigger>
            </TabsList>
            
            <Card className="p-6 mt-2">
                <TabsContent value="profile">
                    <EditProfile/>
                </TabsContent>
                <TabsContent value="preferences"></TabsContent>
                <TabsContent value="security">
                    <Secutrity/>
                </TabsContent>
                <TabsContent value="privacy"></TabsContent>
            </Card>
            </Tabs>
            </div>
        </>
    )
}