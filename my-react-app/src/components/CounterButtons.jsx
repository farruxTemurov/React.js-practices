import Button from "./Button";

export default function CounterButtons({ count, increase, decrease, reset, toggle, setToggle }) {
    return (
        <div className="flex flex-wrap gap-3 justify-center">
            {/* Increase */}
            <Button
                onClick={increase}
                className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-all shadow-sm"
            >
                Increase
            </Button>

            {/* Decrease */}
            <Button
                onClick={decrease}
                disabled={count === 0}
                className={`px-4 py-2 rounded-lg font-medium transition-all shadow-sm ${count === 0
                    ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                    : "bg-red-500 text-white hover:bg-red-600"
                    }`}
            >
                Decrease
            </Button>

            {/* Reset */}
            <Button
                onClick={reset}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-all shadow-sm"
            >
                Reset
            </Button>

            {/* Auto Toggle - pill style */}
            <Button
                onClick={() => setToggle(prev => !prev)}
                className={`bg-purple-600 relative w-28 h-10 rounded-full font-medium transition-all duration-300 shadow-sm flex items-center`}
            >
                <span
                    className={`absolute top-1 left-1 w-12 h-8 flex items-center justify-center rounded-full bg-white text-black text-sm font-semibold shadow-md transition-transform duration-300`}
                    style={{ transform: toggle ? "translateX(100%)" : "translateX(0)" }}
                >
                    {toggle ? "ON" : "OFF"}
                </span>
                {/* Background text for color indication */}
                <span className="absolute left-0 right-0 text-center text-white font-medium pointer-events-none">
                    {toggle ? "" : ""}
                </span>
            </Button>
        </div>
    );
}
