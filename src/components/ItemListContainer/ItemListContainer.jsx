import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import RingLoader from "react-spinners/RingLoader";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);
  const productosFiltrados = products.filter(
    (elemento) => elemento.category === categoryName
  );

  useEffect(() => {
    const itemsCollection = collection(db, "products");
    getDocs(itemsCollection).then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });
      setItems(products);
    });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RingLoader
          color={"blue"}
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
