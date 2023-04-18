import styles from "./NavBar.module.css";
import CardWidget from "../CardWidget/CardWidget";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Navbar = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    const itemsCollection = collection(db, "categories");
    getDocs(itemsCollection).then((res) => {
      let arrayCategories = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategoryList(arrayCategories);
    });
  }, []);
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dxf8ebmi7/image/upload/v1677416673/v83ljquhstuhe6zv8zih.png"
            alt="Logo Diarco"
            style={{ width: "10%", objectFit: "cover", height: "5vh" }}
          />
        </Link>
        <ul className={styles.containerList}>
          {categoryList.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.path}
                className={styles.navbarItem}
              >
                {category.title}
              </Link>
            );
          })}
        </ul>
        <CardWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
