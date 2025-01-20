import { useState } from "react";
import { useSelector } from "react-redux";
import NameComponent from "./NameComponent";
function FirstComponent() {
    let data = useSelector(gs => gs.counter);
    let [n, setN] = useState(10);
    let changeValue = function () {
        data = data + 1
        console.log(data);
        setN(n + 1);
    }
    console.log(data);
    return (
        <div>

            <NameComponent />
            <hr />
            <h4>First Component</h4>
            <p>Global state Counter value is {data}</p>
            <p>Local state Value of n is {n}</p>
            <input type="button" value="Change Value" onClick={changeValue}></input>
        </div>
    )
}

export default FirstComponent;