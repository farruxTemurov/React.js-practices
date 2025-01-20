import { useSelector } from "react-redux";

function NameComponent() {
    let data = useSelector(gs => gs.name);

    return (
        <div>
            <h2>Global name value is {data}</h2>
        </div>
    )
}

export default NameComponent;