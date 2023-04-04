import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);

    // VALIDACIONES
    if (userData.name.length < 5) {
      setError(true);
      setErrorMessage("el nombre no puede ser menor a 5");
      return;
    }

    const incluye = userData.email.includes("@");

    if (!incluye) {
      setError(true);
      setErrorMessage("el email debe incluir un @");
      return;
    }

    const str = userData.password.trim();
    const passwordIsValid = userData.password === str;

    if (!passwordIsValid || userData.password.length < 5) {
      setError(true);
      setErrorMessage(
        "la contraseña no debe tener espacios en blanco y debe tener como minimo 5 caracteres"
      );
      return;
    }

    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-password-input"
          label="nombre"
          type="name"
          autoComplete="Luciano"
          onChange={handleChange}
          name="name"
        />
        <TextField
          id="outlined-password-input"
          label="email"
          type="email"
          autoComplete="lucianobusalacchi@gmail.com"
          onChange={handleChange}
          name="email"
        />
        <TextField
          id="outlined-password-input"
          label="password"
          type="pasword"
          autoComplete=""
          onChange={handleChange}
          name="password"
        />
        <button type="submit">Enviar</button>
      </form>

      {error && <h1>{errorMessage}</h1>}
    </div>
  );
};

export default Form;
