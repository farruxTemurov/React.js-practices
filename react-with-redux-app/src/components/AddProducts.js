import { useState } from "react";
import { useDispatch } from "react-redux";
function AddProducts() {
    let [pid, setPid] = useState("");
    let [pname, setPname] = useState("");
    let [price, setPrice] = useState("");

    let dispatch = useDispatch();
    let handleAddProduct = (event) => {
        event.preventDefault();
        let newProduct = { pid, pname, price };
        console.log(newProduct);    // product object
        dispatch({ type: "ADD_PRODUCT", payload: newProduct });  // dispatching action along with payload ie newProduct to reducer. 
        setPid('');
        setPname('');
    }
    return (
        <div>
            <h3>Add Product</h3>
            <form onSubmit={handleAddProduct}>
                <label>Product Id</label>
                <input type="number" value={pid} onChange={(e) => { setPid(e.target.value) }} /><br />
                <label>Product Name</label>
                <input type="text" value={pname} onChange={(e) => { setPname(e.target.value) }} /><br />
                <label>Price</label>
                <input type="number" value={price} onChange={(e) => { setPrice(e.target.value) }} /><br />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    )
}

export default AddProducts;