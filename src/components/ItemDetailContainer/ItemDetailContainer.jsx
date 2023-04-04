import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {
  useParams();
  const { id } = useParams();
  const productSelected = products.find((element) => element.id === Number(id));
  const onAdd = (cantidad) => {
    console.log(`Se agregó al carrito ${cantidad} productos`);
  };

  return (
    <div>
      <h1>{productSelected.title}</h1>
      <img src={productSelected.img} alt="Foto del producto" />
      <ItemCount stock={productSelected.stock} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
