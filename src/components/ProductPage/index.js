import React from 'react'
import DescriptionAndBuy from './DescriptionAndBuy/DescriptionAndBuy.component'

const ProductPage = () => {
    return (
        <DescriptionAndBuy heading="Product Tags" disease="Diabetes" type="Groceries" price={468} count={1} description1="A delicious combination of premium nuts, seeds & raisins. Roasted & seasoned with our secret spice mix. Good health and taste in every bite."
            description2="Taste profile: A little savoury, a little sweet. A little crunchy a little chewy. A hint of pepper a tinge of chilly. Good health & great taste in every bite." />
    )
}

export default ProductPage