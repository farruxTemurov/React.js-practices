import { useState } from "react";
import "../App.css";


function counterPage() {
    const [count, setCount] = useState(0);

    const increase = () => setCount(count + 1);
    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const reset = () => setCount(0);

    const btnClassDisabled = count === 0 ? "btn disabled" : "btn";

    return (
        <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center py-10 px-4 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 transition-all duration-500">

                <h1 className="text-3xl font-bold mb-6 text-center tracking-tight">
                    🔢 Counter App
                </h1>

                <div className="flex flex-col items-center gap-4">
                    {/* Count display */}
                    <p className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400">
                        Count: <span className="font-bold">{count}</span>
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={increase}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 active:scale-95 transition-transform shadow-sm"
                        >
                            Increase
                        </button>

                        <button
                            onClick={decrease}
                            disabled={count === 0}
                            className={`px-4 py-2 rounded-lg font-medium transition-transform shadow-sm active:scale-95 ${count === 0
                                    ? "bg-gray-400 text-gray-200 cursor-not-allowed"
                                    : "bg-red-500 text-white hover:bg-red-600"
                                }`}
                        >
                            Decrease
                        </button>

                        <button
                            onClick={reset}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 active:scale-95 transition-transform shadow-sm"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default counterPage;
