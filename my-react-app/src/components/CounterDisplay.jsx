import { useRef } from "react";
import useCountAnimation from "../hooks/useCountAnimation";

export default function CounterDisplay({ count }) {
    const countRef = useRef(null);
    useCountAnimation(countRef, count);
    return (
        <p className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
            Count: <span
                ref={countRef}
                className="inline-block font-semibold text-blue-600 transition-transform duration-300"
            >
                {count}
            </span>
        </p>
    );
}



