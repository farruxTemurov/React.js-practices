// import { useState } from "react";
// function ToggleComponent() {
// const [isOn, setIsOn] = useState(false);
//     const toggle = () => setIsOn((isOn) => !isOn);
//     return(
//     <div>
//     {isOn ? <h1>Hi, I am ON</h1> : <h1>Hi, I am OFF</h1>}
//     <button onClick={toggle}>Click Here</button>
//     </div>
//     )
// }
// export default ToggleComponent;

import useToggle from "./hooks/useToggle";
function ToggleExample() {
    const [visibility, setVisibility] = useToggle(true);
    return (
        <div>
            {visibility ? <h1>Light is ON</h1> : <h1>Light is OFF</h1>}
            <button onClick={setVisibility}>Click Here</button>
        </div>
    )
}

export default ToggleExample;