import axios from 'axios';
import { useEffect, useState } from 'react';

function ProductView() {

    let [products, setProducts] = useState([]);
    useEffect(() => {
        loadAllProducts();
    }, []);

    function loadAllProducts() {
        axios.get("https://fakestoreapi.com/products").
            then(response => setProducts(response.data)).catch(error => console.log(error)
            );
    }

    return (
        <div>
            <h3>View All Products</h3>
            <p>Number of products {products.length}</p>

            {
                products.map(product =>
                    <div key={product.id}>
                        <img src={product.image} width="200px" height="200px" />
                        <span>Id {product.id} Title {product.title} Price {product.price}</span>
                    </div>
                )
            }
        </div>
    )
}

export default ProductView;