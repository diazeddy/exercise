import { PerformanceItem } from "@/types";

export interface AddSetProps {
    updatePerformances: (data: Record<string, Record<string, PerformanceItem[]>>) => void;
}