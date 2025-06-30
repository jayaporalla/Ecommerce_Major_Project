import { Navbar } from "../../components/Navbar"
import { Fragment, useEffect, useState } from "react"
import { getAllProducts } from "../../api/getAllProducts"
import { ProductCard } from "../../components/ProductCard"
import axios from 'axios';
import { useCart } from '../../'

export const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getAllProducts();
            setProducts(data);
        })()
    }, [])

    return (
        <Fragment>
            <Navbar />
            <main className="main d-flex gap wrap">
                {
                   products?.length > 0 && products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </main>
        </Fragment>
    )
}