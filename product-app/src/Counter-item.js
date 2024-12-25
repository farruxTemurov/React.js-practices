import React, { useEffect, useState } from 'react'

const CounterItem = ({ counterGenerate }) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const newItem = counterGenerate()
        setItem(newItem);
        console.log('Render');
    }, [counterGenerate])
}

export default CounterItem;