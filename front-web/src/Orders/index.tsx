import { useEffect, useState } from 'react'
import { fetchProducts } from '../api'
import ProductsList from './ProducstsList'
import StepsHeader from './StepsHeaders'
import './styles.css'
import { Product } from './types'

function Orders(){
    const [products, setProducts] = useState<Product[]>([])
    console.log(products)

    useEffect(()=>{
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))

    }, [])

    return(
        <div className="orders-container">
            <StepsHeader />
            <ProductsList products ={products}/>
        </div>
    )
}

export default Orders