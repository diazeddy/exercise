import { ExerciseListProps } from "./ExerciseList.type";
import ExerciseListItem from "../ExerciseListItem";


const ExerciseList = ({exercises}: ExerciseListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 w-full">
            {
                exercises.map((exercise) => (
                    <ExerciseListItem exercise={exercise} />
                ))
            }
        </div>
    )
}

export default ExerciseList;