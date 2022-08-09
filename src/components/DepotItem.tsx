import React from 'react'

import type {Product} from '../types'


type Props = {
    product: Product,
    style: React.CSSProperties
}

const DepotItem = (props: Props) => {
    const {product, style} = props

    return <div>
        <div style={style}>{`Item: ${product.item}`}</div>
        <div style={style}>{`Price: ${product.price}`}</div>
    </div>
}

export default DepotItem