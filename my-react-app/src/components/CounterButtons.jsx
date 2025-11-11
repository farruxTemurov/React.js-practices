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
            <Button onClick={increase} variant="green">
                Increase
            </Button>

            {/* Decrease */}
            <Button
                onClick={decrease}
                disabled={count === 0}
                variant={count === 0 ? "gray" : "red"}
            >
                Decrease
            </Button>

            {/* Reset */}
            <Button onClick={reset} variant="blue">
                Reset
            </Button>

            {/* Auto Toggle */}
            <Button
                onClick={() => setToggle(prev => !prev)}
                variant={toggle ? "toggleOn" : "toggleOff"}
                className="relative w-28 h-10 rounded-full"
            >
                <span
                    className="
                        absolute top-1 left-1
                        w-12 h-8 
                        flex items-center justify-center
                        rounded-full bg-white text-black text-sm font-semibold
                        shadow-md
                        transition-transform duration-300
                    "
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
