import React from 'react'
import "./styles.scss"

const ProductCard = (props) => {
    const {product} = props;

    const InfoItem =
        <React.Fragment>
            <div className="ProductTitle">{product.title}</div>
            <div className="ProductVendor">{product.vendor} - {product.weight}</div>
            <div className="ProductPrice">
                <span>{formatPrice(product.price)}</span>
                <span
                    className="ProductPriceNonMember">Non Member price : <s> {formatPrice(product.compare_at_price)} </s>
                </span>
            </div>
            <div className="ProductButtons">
                {product.inventory_quantity > 0 ?
                    <button><span> Add Product </span>
                    </button> :
                    <button><span> Notify me! </span></button>}
            </div>
            <div className="ProductMessage">
                {product.inventory_quantity > 0 ?
                    `${product.inventory_quantity} remains in stock` :
                    `No Stock !`}
            </div>
        </React.Fragment>


    return (
        <div
            className="ProductCard">
            {InfoItem}
        </div>
    )
}

export default ProductCard;

const formatPrice = (price) => price ? `${parseFloat(price, 10).toFixed(2).replace('.', ',')}€` : '';