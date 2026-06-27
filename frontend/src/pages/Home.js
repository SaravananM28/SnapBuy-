import { Fragment } from "react/jsx-runtime";
import ProductCart from "../components/productCart";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Home() {
    const [searchParams, setsearchParams] = useSearchParams()
    const [products , setproducts] = useState([])

    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
        .then((res)=> res.json())
        .then(res => setproducts(res.products))
    },[searchParams])
    return <Fragment>

                <h1 id="products_heading">Latest Products</h1>

                <section id="products" className="container mt-5">
                <div className="row">
                    {products.map(product=> <ProductCart products={product}/>)}
                    
                </div>
                </section>


            </Fragment>
}