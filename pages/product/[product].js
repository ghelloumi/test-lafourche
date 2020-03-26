import React from 'react'
import Layout from "../../components/Layout";
import ProductCard from '../../components/ProductCard';
import {getProduct} from '../../services/product.service.js';

const Product = (props) => {
    const {product} = props;

    return (
        <>
            <Layout>
                {product && <div>
                    <img
                        className="ProductImage"
                        src={product.image}
                        alt="Product image"/>
                    <ProductCard product={product}/>
                </div>}
            </Layout>
        </>
    )
};

Product.getInitialProps = async function ({query}) {
    try {
        const product = await getProduct(query.handle);
        return {product};
    } catch (e) {
        console.error(e)
    }
};

export default Product;