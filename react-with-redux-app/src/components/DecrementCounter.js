import { useDispatch } from "react-redux";

function DecrementCounter() {
    let dispatch = useDispatch();   // this hook helps us to dispatch an action.

    let handleDecrement = function () {
        dispatch({ type: "DECREMENT" })    // dispatching an action to increment the counter. mean it all reducer function. 
    }
    return (
        <div>
            <h3>Decrement Counter</h3>
            <input type="button" value="Decrement" onClick={handleDecrement}></input>
        </div>
    )
}

export default DecrementCounter;