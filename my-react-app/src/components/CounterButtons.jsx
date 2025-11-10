import Button from "./Button";

export default function CounterButtons({
    count,
    increase,
    decrease,
    reset,
    toggle,
    setToggle
}) {
    return (
        <div className="flex flex-wrap gap-3 justify-center">

            {/* Increase */}
            <Button
                onClick={increase}
                className="bg-green-500 text-white hover:bg-green-600"
            >
                Increase
            </Button>

            {/* Decrease */}
            <Button
                onClick={decrease}
                disabled={count === 0}
                className={
                    count === 0
                        ? "bg-gray-300 text-gray-700"
                        : "bg-red-500 text-white hover:bg-red-600"
                }
            >
                Decrease
            </Button>

            {/* Reset */}
            <Button
                onClick={reset}
                className="bg-blue-500 text-white hover:bg-blue-600"
            >
                Reset
            </Button>

            {/* Auto Toggle — pill switch */}
            <Button
                onClick={() => setToggle(prev => !prev)}
                className={`relative w-28 h-10 rounded-full ${
                    toggle ? "bg-purple-600" : "bg-gray-400"
                }`}
            >
                <span
                    className={`
                        absolute top-1 left-1 
                        w-12 h-8 
                        flex items-center justify-center
                        rounded-full bg-white text-black text-sm font-semibold 
                        shadow-md 
                        transition-transform duration-300
                    `}
                    style={{
                        transform: toggle ? "translateX(100%)" : "translateX(0)"
                    }}
                >
                    {toggle ? "ON" : "OFF"}
                </span>
            </Button>
        </div>
    );
}
