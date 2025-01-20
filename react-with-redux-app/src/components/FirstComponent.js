import { useState } from "react";
import { useSelector } from "react-redux";
import NameComponent from "./NameComponent";
function FirstComponent() {
    let data = useSelector(gs => gs.counter);
    let [n, setN] = useState(10);

    const increment = () => setN(n + 1);
    const decrement = () => setN(n - 1);

    return (
        <div>

            <NameComponent />
            <hr />
            <h4>First Component</h4>
            <p>Global state Counter value is {data}</p>
            <p>Local state Value of n is {n}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default FirstComponent;