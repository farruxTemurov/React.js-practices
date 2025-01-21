import { useState } from 'react';

function Counter() {
    let [count, setCount] = useState(10);


    return (
        <div>
            <h3>Count:{count}</h3>
        </div>
    )
}

export default Counter;