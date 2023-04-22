import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../contex/CartContex";

import Swal from "sweetalert2";
import { getDoc, collection, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);
  const [productSelected, setProductSelected] = useState({});
  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setProductSelected({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let producto = {
      ...productSelected,
      quantity: cantidad,
    };

    agregarAlCarrito(producto);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "El producto ha sido agregaro",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  let quantity = getQuantityById(Number(id));

  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      quantity={quantity}
    />
  );
};

export default ItemDetailContainer;
