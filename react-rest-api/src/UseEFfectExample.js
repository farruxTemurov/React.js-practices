import { useEffect, useState } from "react";

function UseEffectExample() {
    let [m, setM] = useState(0);
    let [n, setN] = useState(0);

    useEffect(() => {
        console.log('useEffect is called!');
    }, []);

    return (
        <div>
            <h2>UseEffect Example</h2>
            <p>M value is {m} N value is {n}</p>
            <button onClick={() => setM(m + 1)}>Increment</button>
            <button onClick={() => setN(n + 1)}>Increment</button>
        </div>
    );
}

export default UseEffectExample;