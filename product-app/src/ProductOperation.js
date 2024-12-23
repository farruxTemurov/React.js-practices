import { useState } from "react";

function ProductOperation({ products, setProducts }) {
    const [pid, setPid] = useState("");
    const [pname, setPname] = useState("");
    const [price, setPrice] = useState("");
    const [url, setUrl] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        const product = { pid, pname, price, url };
        setProducts([...products, product]);
    }

    return (
        <div className="mt-5 d-flex justify-content-center">
            <form
                onSubmit={handleSubmit}
                className="p-4 bg-white shadow rounded"
                style={{ maxWidth: '30rem', width: '100%', marginBottom: '2rem' }}
            >
                <div className="mb-3">
                    <label>ID</label>
                    <input
                        type="number"
                        name="pid"
                        onChange={(event) => setPid(event.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label>Name</label>
                    <input
                        type="text"
                        name="pname"
                        onChange={(event) => setPname(event.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label>Price</label>
                    <input
                        type="number"
                        name="price"
                        onChange={(event) => setPrice(event.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label>Image URL</label>
                    <input
                        type="url"
                        name="url"
                        onChange={(event) => setUrl(event.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="d-flex gap-3">
                    <button className="btn btn-primary flex-grow-1">Submit</button>
                    <button type="reset" className="btn btn-secondary flex-grow-1">Reset</button>
                </div>

            </form>
        </div>
    );
}

export default ProductOperation;
