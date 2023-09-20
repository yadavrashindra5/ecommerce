import { client } from "@/pages/api/hello";
import { IProduct } from "@/utils/types";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";
import style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { countDecrease, countIncrease,insertData } from "@/pages/stores/card/CardSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.user);
  console.log(state,'state');
  const [addToCartButtonState, setAddToCartButton] = useState(false);
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
              count:0
            };
          }
        );
        dispatch(insertData(productCollection));
      });
    };
    fetchProductData();
  }, []);

  const cardClickHandler = (e: any) => {
    if (e.target.getAttribute("data-id") === "addition") {
      const productInfo = JSON.parse(
        e.target.closest("[data-info]").getAttribute("data-info")
      );
      dispatch(countIncrease(productInfo))
    } else if (e.target.getAttribute("data-id") === "substract") {
      const productInfo = JSON.parse(
        e.target.closest("[data-info]").getAttribute("data-info")
      );
      dispatch(countDecrease(productInfo))
    } else if (e.target.getAttribute("data-id") === "add-to-cart") {
      const productInfo = JSON.parse(
        e.target.closest("[data-info]").getAttribute("data-info")
      );
      dispatch(countIncrease(productInfo))
    }
    setAddToCartButton(!addToCartButtonState);
    e.stopPropagation();
  };
  return (
    <main className={style.mainContainer} onClick={cardClickHandler}>
      {state.map.map((product:IProduct) => (
        <ProductCard
          title={product.title}
          id={product.id}
          thumbnail={product.thumbnail}
          images={product.images}
          price={product.price}
          key={product.id}
          count={product.count}
        />
      ))}
    </main>
  );
};


export default ProductList;
