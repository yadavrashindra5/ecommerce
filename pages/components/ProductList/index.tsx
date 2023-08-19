import { client } from "@/pages/api/hello";
import { IProduct } from "@/utils/types";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const [productState, setProductState] = useState<IProduct[]>([]);
  useEffect(() => {
    const fetchProductData = async () => {
      await client.get("/products").then((response) => {
        const productCollection = response.data.products.map(
          (product: IProduct) => {
            return {
              id: product.id,
              title: product.title,
              price: product.price,
              thumbnail: product.thumbnail,
              images: product.images,
            };
          }
        );
        setProductState([...productCollection]);
      });
    };
    fetchProductData();
  }, []);
  const cardClickHandler = (e: any) => {
    const productInfo = JSON.parse(
      e.target.closest("[data-info]").getAttribute("data-info")
    );
    e.stopPropagation();
  };

  return (
    <main className={style.mainContainer} onClick={cardClickHandler}>
      {productState.map((product) => (
        <ProductCard
          title={product.title}
          id={product.id}
          thumbnail={product.thumbnail}
          images={product.images}
          price={product.price}
          key={product.id}
        />
      ))}
    </main>
  );
};

export default ProductList;
