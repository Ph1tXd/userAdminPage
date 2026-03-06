import { DataTable } from "@/components/data-table"
import data from "../app/dashboard/data.json"
import { SiteHeader } from "@/components/site-header"

export default function DashboardPage() {
    return(
        <>
            <SiteHeader />
            <div className="mt-5">
                <DataTable data={data} />
            </div>
            
        </>
    )
}