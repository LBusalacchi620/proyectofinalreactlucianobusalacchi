import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Footer.module.css";

const Footer = ({ children }) => {
  return (
    <div className={styles.containerFooter}>
      {children}
      {/* <ItemListContainer nombre={"Luciano"} /> */}
    </div>
  );
};

export default Footer;
