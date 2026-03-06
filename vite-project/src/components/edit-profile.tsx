import { AvatarBadgeIcon } from "./avatar-badge";
import HeadIpnut from "./head-input";

export default function EditProfile() {
    return(
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <div className="flex justify-center sm:justify-start">
                <div className="w-24 h-24 sm:w-32 sm:h-32">
                    <AvatarBadgeIcon/>
                </div>
            </div>
            <div className="w-full max-w-2xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <HeadIpnut header="First name" placeholder="Enter your first name..."/>
                    </div>
                    <div className="space-y-2">
                        <HeadIpnut header="Last name" placeholder="Enter your last name..."/>
                    </div>
                </div>
                <div className="space-y-2">
                    <HeadIpnut header="Email adress" placeholder="hui@gmail.com"/>
                </div>
                <div className="space-y-2">
                    <HeadIpnut header="Phone number" placeholder="+7-(999)-999-222"/>
                </div>
            </div>
        </div>
    )
}