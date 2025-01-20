import { useSelector } from "react-redux";

function DisplayProducts() {

    let productsData = useSelector(gs => gs.products);

    return (
        <div>
            <h3>Product List</h3>
            <ul>
                {
                    productsData.map(p =>
                        <li key={p.pid}>{p.pname} - {p.price}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default DisplayProducts;