import { PerformanceGroupProps } from "./PerformanceGroup.type"
import PerformanceGroupItem from "../PerformanceGroupItem"

const PerformanceGroup = ({date, items}: PerformanceGroupProps) => {
    return (
        <div className="flex flex-col items-center gap-y-6">
            <p className="font-bold text-left w-full">{date}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 w-full">
            {
                items[date]?.map((item) => (
                    <PerformanceGroupItem item={item} />
                ))
            }
            </div>
        </div>
    )
}

export default PerformanceGroup;