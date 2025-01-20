import { useDispatch } from "react-redux";

function IncrementCounter() {
    let dispatch = useDispatch();

    let handleIncrement = function () {
        console.log("Increment Counter in same component");
        dispatch({ type: "INCREMENT" })
    }
    return (
        <div>
            <h3>Increment Counter</h3>
            <input type="button" value="Increment" onClick={handleIncrement}></input>
        </div>
    )
}

export default IncrementCounter;