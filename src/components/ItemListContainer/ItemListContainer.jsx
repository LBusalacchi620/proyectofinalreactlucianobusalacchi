import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import RingLoader from "react-spinners/RingLoader";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);
  const productosFiltrados = products.filter(
    (elemento) => elemento.category === categoryName
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 2000);
    });
    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RingLoader
          color={"blue"}
          // loading={loading}
          // cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
