import React from 'react'
import Product from './Product'

import '../styles/components/Products.css'

const Products = ({ products }) =>  (
    <section className="products">
        <article className="Product-items">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </article>
    </section>
)

export default Products
