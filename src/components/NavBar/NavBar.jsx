import styles from "./NavBar.module.css";
import CardWidget from "../CardWidget/CardWidget";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
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
          <li>
            <Link to="/">
              <Button variant="Text">Todas</Button>
            </Link>
          </li>
          <li>
            <Link to="/category/cocina">
              <Button variant="Text">Cocina</Button>
            </Link>
          </li>
          <li>
            <Link to="/category/lacteos">
              <Button variant="Text">Lacteos</Button>
            </Link>
          </li>
          <li>
            <Link to="/category/bebidas">
              <Button variant="Text">Bebidas</Button>
            </Link>
          </li>
        </ul>
        <CardWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
