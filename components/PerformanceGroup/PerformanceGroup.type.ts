import { PerformanceItem } from "@/types";

export interface PerformanceGroupProps {
    date: string;
    items: Record<string, PerformanceItem[]>
}