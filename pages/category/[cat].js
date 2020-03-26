import React from 'react'
import ProductCard from '../../components/ProductCard';
import {getProducts} from '../../services/product.service.js';
import {PAGE_SIZE} from '../../constants'
import Layout from "../../components/Layout";

import '../styles.scss'

const Category = (props) => {
    const {products} = props;

    return (
        <Layout>
            {products && <ul className="ProductCardsContainer">
                {products.map(product =>
                    <li key={product.handle}>
                        <ProductCard product={product}/>
                    </li>
                )}
            </ul>}
        </Layout>
    )
};

Category.getInitialProps = async function ({query}) {
    try {
        const {page, hash} = query;
        const products = await getProducts(page, PAGE_SIZE);
        return {products, page, hash};
    } catch (e) {
        console.error(e)
    }
};

export default Category;