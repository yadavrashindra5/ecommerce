import { laptop } from "@/public";
import Image from "next/image";
import style from "./style.module.scss";
import { IProduct } from "@/utils/types";
import cx from "classnames";

const ProductCard = (props: IProduct) => {
  const { price, thumbnail, id, title, images, state } = props;
  const stateValue = state?.get(id);
  return (
    <main
      className={style.mainContainer}
      data-id={id}
      data-price={price}
      data-title={title}
      data-info={JSON.stringify({ id: id, title })}
    >
      <section className={style.container}>
        <section className={style.imageSection}>
          <Image
            src={`${images?.[0]}`}
            alt="laptop"
            width={36}
            height={36}
            placeholder="empty"
            sizes="100vw"
          />
        </section>
        <section className={style.details}>
          <div className={style.title}>{title}</div>
          <section className={style.addSection}>
            <div className={style.price}>${price}</div>
            {stateValue?.id === id ? (
              <section className={cx(style.cartButton, style.productQuantity)}>
                <div data-id='substract'>-</div>
                <div>{stateValue?.count}</div>
                <div data-id='addition'>+</div>
              </section>
            ) : (
              <button className={style.cartButton} data-id="add-to-cart">Add to Cart</button>
            )}
          </section>
        </section>
      </section>
    </main>
  );
};

export default ProductCard;
