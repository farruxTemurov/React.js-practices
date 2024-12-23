function ProductTableDisplay({ products }) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.pid}>
                                    <td>{product.pid}</td>
                                    <td>{product.pname}</td>
                                    <td>{product.price}</td>
                                    <td>
                                        <img
                                            src={product.url || "https://via.placeholder.com/100"}
                                            alt="Product"
                                            width="100"
                                            height="100"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ProductTableDisplay;
