import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import ProductsList from "./ProducstsList";
import StepsHeader from "./StepsHeaders";
import "./styles.css";
import { OrderLocationData, Product } from "./types";
import OrderLocation from "./OrderLocation";

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);

  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="orders-container">
      <StepsHeader />
      <ProductsList products={products} />
      <OrderLocation
        onChangeLocation={(location) => setOrderLocation(location)}
      />
    </div>
  );
}

export default Orders;
