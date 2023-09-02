import { icon } from "@/public";
import Image from "next/image";
import style from "./style.module.scss";

interface propsType {
  count: number;
}

const Navbar = (props: propsType) => {
  const { count } = props;
  return (
    <main className={style.mainContainer}>
      <section className={style.innerContainer}>
        <Image src={icon} alt="cart" />
        <div className={style.count}>{count}</div>
      </section>
    </main>
  );
};

export default Navbar;
