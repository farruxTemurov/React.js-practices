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
        <div>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <button className="btn" onClick={increase}>Increase</button>
            <button className={btnClassDisabled} onClick={decrease}>Decrease</button>
            <button className="btn" onClick={reset}>Reset</button>
        </div>
    )
}

export default counterPage;
