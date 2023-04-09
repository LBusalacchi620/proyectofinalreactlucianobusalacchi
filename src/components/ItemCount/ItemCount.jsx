import { Button } from "@mui/material";
import { useState } from "react";
import "./ItemCount";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h2>{contador}</h2>

      <button variant="outlined" onClick={sumar}>
        Sumar
      </button>

      <button variant="outlined" onClick={restar}>
        Restar
      </button>

      <button variant="outlined" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
