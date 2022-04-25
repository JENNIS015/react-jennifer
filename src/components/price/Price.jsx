import {isEmpty} from "lodash";
import { useCartContext } from "../../context/AppContext";
const Price = ({ regularPrice = 0, salesPrice }) => {
    // const { formatNumber } = useCartContext();
    if ( isEmpty( salesPrice ) ) {
    	return null;
    }

    /**
     * Get discount percent.
     *
     * @param {String} regularPrice
     * @param {String} salesPrice
     */
    const discountPercent = ( regularPrice, salesPrice ) => {
        if( isEmpty( regularPrice ) || isEmpty(salesPrice) ) {
            return null;
        }

        const formattedRegularPrice = parseInt( regularPrice?.substring(1) );
        const formattedSalesPrice = parseInt( salesPrice?.substring(1) );

        const discountPercent = ( ( formattedRegularPrice - formattedSalesPrice ) / formattedRegularPrice ) * 100;

        return {
            discountPercent: formattedSalesPrice !== formattedRegularPrice ? `${discountPercent.toFixed(2)}% OFF` : null,
            strikeThroughClass: formattedSalesPrice < formattedRegularPrice ? 'regular-price' : ''
        }
    }

    const productMeta = discountPercent( regularPrice, salesPrice );

    return (
        <div className="product-price">
            {/* Regular price */}

            { productMeta?.discountPercent ? <span className="product-price-discount">{ (salesPrice)}</span> : null }

            {/* Discounted price */}
            <div className="discount"><span className="regular-price">{ (regularPrice) }</span>

            {/* Discount percent */}
            <span className="price-discount">{productMeta?.discountPercent}  </span>
            </div>
        </div>
    )
}

export default Price