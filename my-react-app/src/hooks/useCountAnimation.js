import { useEffect } from "react";

export default function useCountAnimation(ref, dependency) {
    useEffect(() => {
        if (!ref.current) return;
        const el = ref.current;

        el.style.transform = "scale(1.3)";
        el.style.opacity = "0.6";

        const timeout = setTimeout(() => {
            el.style.transform = "scale(1)";
            el.style.opacity = "1";
        }, 300);

        return () => clearTimeout(timeout);
    }, [dependency]);
}
