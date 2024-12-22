const { useState } = require("react");

function ProductOperation() {
    let [pid, setPid] = useState("");
    let [pname, setPname] = useState("");
    let [price, setPrice] = useState("");
    let [url, setUrl] = useState("");

    let [products, setProducts] = useState([{
        pid: 1, pname: "TV", price: 200, url: "data:image/jpeg;base64,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"
    }]);

    function handleSubmit(event) {
        event.preventDefault();
        let product = { pid, pname, price, url };
        setProducts([...products, product]);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>ID</label>
                <input type="number" name="pid" onChange={(event) => setPid(event.target.value)} /> <br />
                <label>Name</label>
                <input type="text" name="pname" onChange={(event) => setPname(event.target.value)} /> <br />
                <label>Price</label>
                <input type="number" name="price" onChange={(event) => setPrice(event.target.value)} /> <br />
                <label>Image URL</label>
                <input type="url" name="url" onChange={(event) => setUrl(event.target.value)} /> <br />
                <button>Submit</button>
                <button type="reset">Reset</button>
            </form>
            <hr />
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr>
                                <td>{product.pid}</td>
                                <td>{product.pname}</td>
                                <td>{product.price}</td>
                                <td><img src={product.url} width="100px" height="100px" /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductOperation;