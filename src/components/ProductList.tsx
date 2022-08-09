import React from 'react';
import DepotItem from './DepotItem'

import type {Product} from '../types'

type Props = {
    products: Array<Product>,
    style: React.CSSProperties;
}

const ProductList = (props: Props): React.ReactElement => {
    const {products, style} = props

    return <>
        {products.map((product, index) => <DepotItem product={product} key={index} style={style}/>)}
    </>
}

export default ProductList
