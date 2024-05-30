import { Exercise } from "@/types";
import { ExerciseList } from "@/components";

const fetchExercises = async (): Promise<Exercise[]> => {
  const res = await fetch("https://storage.googleapis.com/fitbod-web-internal/exercises.json");

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json();
}

const Page = async () => {
  const exerciseList = await fetchExercises();

  return (
    <div className="flex flex-col p-8 items-center">
      <div className="pb-12 text-center text-2xl">Top Exercises</div>

      <div className="flex w-full justify-center">
        <ExerciseList exercises={exerciseList}/>        
      </div>
    </div>
  );
}

export default Page;