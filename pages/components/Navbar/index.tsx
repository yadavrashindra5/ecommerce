import { icon } from "@/public";
import Image from "next/image";
import style from "./style.module.scss";

const Navbar = () => {
  return (
    <main className={style.mainContainer}>
      <section className={style.innerContainer}>
        <Image src={icon} alt="cart" />
        <div className={style.count}>3</div>
      </section>
    </main>
  );
};

export default Navbar;
