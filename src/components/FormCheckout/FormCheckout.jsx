import React, { useState } from "react";

const FormCheckout = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  return (
    <div>
      <form>
        <imput
          type="text"
          placeholder="Nombre"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <imput
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <imput
          type="text"
          placeholder="Teléfono"
          value={userData.phone}
          onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
        />
      </form>
    </div>
  );
};

export default FormCheckout;
