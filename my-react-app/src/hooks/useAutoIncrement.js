import { useEffect } from "react";

export default function useAutoIncrement(toggle, setCount) {
    useEffect(() => {
        if (!toggle) return;

        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [toggle, setCount]);
}
