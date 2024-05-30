import { PerformanceListProps } from "./PerformanceList.type";
import PerformanceGroup from "../PerformanceGroup";

const PerformanceList = ({performances}: PerformanceListProps) => {
    return (
        performances ?
        <div className="flex flex-col gap-y-8">
            <p className="font-bold text-base">Performances:</p>

            {
                Object.keys(performances).sort((a, b) => a < b ? 1 : -1).map((key) => (
                    <PerformanceGroup date={key} items={performances} />
                ))
            }
        </div> :
        <></>
    )
}

export default PerformanceList;