import { useEffect, useState } from "react";

export default function useAutoIncrement(toggle, count, setCount) {
    const [hasLoaded, setHasLoaded] = useState(false);
    useEffect(() => {
        if (!toggle) return;

        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [toggle, setCount]);

    useEffect(() => {
        let initValue =
            parseInt(localStorage.getItem("count"));
        if (!isNaN(initValue)) setCount(initValue);
        setHasLoaded(true);
    }, []);

    useEffect(() => {
        if (hasLoaded) {
            localStorage.setItem("count", JSON.stringify(count));
        }
    }, [count, hasLoaded]);
}
