import { useState } from "react";
import useAutoIncrement from "../hooks/useAutoIncrement";
import CounterDisplay from "../components/CounterDisplay";
import CounterButtons from "../components/CounterButtons";

function CounterPage() {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    const increase = () => setCount(prev => prev + 1);
    const decrease = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
    const reset = () => setCount(0);

    useAutoIncrement(toggle, setCount);

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center py-10 px-4 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 transition-all duration-500">

                <h1 className="text-3xl font-bold mb-6 text-center tracking-tight">
                    🔢 Counter App
                </h1>

                <div className="flex flex-col items-center gap-4">
                    <CounterDisplay count={count} />

                    <CounterButtons
                        count={count}
                        increase={increase}
                        decrease={decrease}
                        reset={reset}
                        toggle={toggle}
                        setToggle={setToggle}
                    />
                </div>
            </div>
        </div>
    );
}

export default CounterPage;
