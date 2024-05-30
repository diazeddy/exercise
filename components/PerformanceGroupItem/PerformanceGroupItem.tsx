import { PerformanceGroupItemProps } from "./PerformanceGroupItem.type";

const PerformanceGroupItem = ({item}: PerformanceGroupItemProps) => {
    return (
        <div className="flex flex-row w-full md:w-[250px] justify-between items-center">
            <p className="text-left">{item.reps} * {item.weight} lb</p>

            <div className="flex flex-row">
                <p className="font-bold">Estimated 1RM</p>
                <p>: ${item.estimation.toFixed(0)} lb</p>
            </div>
        </div>
    )
}

export default PerformanceGroupItem;