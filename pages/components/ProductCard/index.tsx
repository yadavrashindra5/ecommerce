import { laptop } from "@/public";
import Image from "next/image";
import style from "./style.module.scss";

const ProductCard = () => {
  return (
    <main className={style.mainContainer}>
      <section className={style.container}>
        <section className={style.imageSection}>
          <Image src={laptop} alt="laptop" />
        </section>
        <section className={style.details}>
          <div className={style.title}>iPhone 9</div>
          <section className={style.addSection}>
            <div className={style.price}>$67</div>
            <button className={style.cartButton}>Add to Cart</button>
          </section>
        </section>
      </section>
    </main>
  );
};

export default ProductCard;
