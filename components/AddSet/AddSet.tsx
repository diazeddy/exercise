'use client'

import { useState } from "react";
import { format, addDays } from 'date-fns'

import { AddSetProps } from "./AddSet.typs";
import TextField from "../TextField";
import { PerformanceItem } from "@/types";

const AddSet = ({updatePerformances}: AddSetProps) => {
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");
    const currentExercise = JSON.parse(localStorage.getItem("currentExercise") ?? "{}");
    const performances: Record<string, Record<string, PerformanceItem[]>> = JSON.parse(localStorage.getItem("performances") ?? "{}");

    const handleClick = () => {
        const date = format(new Date(), "MM/dd/yyyy");
        if (!performances[currentExercise.id]) {
            performances[currentExercise.id] = {};
        }
        if (!performances[currentExercise.id][date]) {
            performances[currentExercise.id][date] = [];
        }
        performances[currentExercise.id][date].push({
            weight: Number(weight),
            reps: Number(reps),
            estimation: Number(weight) * (36 / (37 - Number(reps)))
        });
        updatePerformances(performances);
        localStorage.setItem("performances", JSON.stringify(performances));
    }

    return (
        <div className="flex flex-col gap-y-6">
            <p className="font-bold text-base">Add set:</p>

            <div className="flex flex-row gap-x-8">
                <div className="flex flex-row gap-x-4">
                    <TextField label="Reps" value={reps} onChange={setReps} />
                    <TextField label="Weight" value={weight} onChange={setWeight} />
                </div>

                <button 
                    className="bg-blue text-white text-2xl border border-black w-[42px] h-[35px] rounded-lg"
                    onClick={handleClick}
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default AddSet;