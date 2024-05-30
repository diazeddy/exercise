'use client'

import { useState, useEffect } from "react";

import { Exercise, PerformanceItem } from "@/types";
import { AddSet, PerformanceList } from "@/components";

const Page = () => {
    const currentExercise: Exercise = JSON.parse(localStorage.getItem("currentExercise") ?? "{}");
    const [performances, setPerformances] = useState<Record<string, Record<string, PerformanceItem[]>>>(JSON.parse(localStorage.getItem("performances") ?? "{}"));
 
    return (
        <div className="flex flex-col items-center gap-y-8 p-8">
            <p className="text-2xl">{currentExercise.name}</p>

            <div className="w-[150px] h-[150px] rounded-lg">
                <img src={currentExercise.image} className="w-[150px] h-[150px] rounded-lg" />
            </div>

            <div className="flex flex-col gap-y-8 w-full md:w-[548px]">
                <AddSet updatePerformances={setPerformances}/>

                <PerformanceList performances={performances[currentExercise.id]}/>
            </div>
        </div>
    )
}

export default Page;