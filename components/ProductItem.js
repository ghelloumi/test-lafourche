import Link from 'next/link';

const ProductItem = (props) => {
  return (
    <div className="ProductItem">
      <Link href="/product/[product]" as={`/product/${product}`} >
        <img
          className="ProductImage"
          src={props.product.image} />
      </Link>
      <div>
        <Link href={`/product/${product}`} >
          <a className="ProductTitle"> { props.product.title } </a>
        </Link>
        <span
          className="ProductPrice">
          { formatPrice(props.product.price) }
        </span>
      </div>
    </div>
  );
}

const formatPrice = (price) => price ? `${parseFloat(price,10).toFixed(2).replace('.', ',')}€`: '';
export default ProductItem;