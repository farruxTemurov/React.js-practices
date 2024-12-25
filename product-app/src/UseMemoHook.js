import { Component, useMemo, useState } from "react";

function UseMemoHook() {
    const bigCountNumber = number => {
        console.log('render');
        let i = 0;
        while (i < 10000000) { // trying to simulate hard, time-consuming fucntion to use useMemo hook
            i++
        }
        return number * 2
    }

    const [counter, setCount] = useState(0);
    const [active, setActive] = useState(true);

    const onIncrement = () => setCount(prevState => prevState + 1);

    const onToggle = () => setActive(prevState => !prevState);

    const colors = {
        fontWeight: 'bold',
        color: active ? 'green' : 'red'
    };

    const number = useMemo(() => bigCountNumber(counter), [counter]);

    return (
        <div className="w-50 mx-auto mb-5">
            <div className="border p-3 mt-5">
                <p className="text-center" style={colors}>User activated {number}</p>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success" onClick={onIncrement}>Increase</button>
                    <button className="btn btn-warning" onClick={onToggle}>Toggle</button>
                </div>
            </div>
        </div>
    )
}

export default UseMemoHook;
