import axios from 'axios';
import { useState } from 'react';

function SearchProduct() {

    let [product, setProduct] = useState({});
    let [result, setResult] = useState(false);

    function searchProduct(pid) {
        console.log(pid);
        axios.get("https://fakestoreapi.com/products" + pid).
            then(respone => {
                if (respone.data) {
                    setProduct(respone.data);
                    setResult(true);
                } else {
                    setResult(false);
                }
            }).catch(error => console.log(error));
    }

    return (
        <div>
            <h3>Search Products</h3>
            <input type="number" name='pid' placeholder='Enter the produc ID'
                onKeyUp={(event) => searchProduct(event.target.value)} />
            <br />
            {result ? <div>Title {product.title} Price {product.price}</div> : null}
        </div>
    );
}

export default SearchProduct;