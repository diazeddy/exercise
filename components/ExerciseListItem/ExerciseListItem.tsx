'use client'

import Link from "next/link";
import { ExerciseListItemProps } from "./ExerciseLiteItem.type";

const ExerciseListItem = ({exercise}: ExerciseListItemProps) => {
    const handleClick = () => {
        localStorage.setItem("currentExercise", JSON.stringify(exercise));
    }

    return (
        <div className="w-full md:w-[329px]" onClick={handleClick}>
            <Link href="/exercise" className="flex flex-row items-center">
                <div className="flex flex-row gap-6 w-full">
                    <div className="flex flex-col">
                        <div className="w-[60px] h-[t0px]">
                            <img src={exercise.image} className="w-[60px] h-[60px]" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <p className="font-bold text-base">{exercise.name}</p>
                        <p className="text-sm">{exercise.muscle}</p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="w-5 h-10">
                        <img src="https://storage.googleapis.com/fitbod-web-internal/arrow-right.svg" className="w-5 h-10" />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ExerciseListItem;