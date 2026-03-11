import SessionCard from "./session-card";

export default function Session() {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SessionCard deviceName="desktop"/>
            <SessionCard deviceName="smartphone"/>
            <SessionCard deviceName="desktop"/>
            <SessionCard deviceName="desktop"/>
        </div>
    )
}