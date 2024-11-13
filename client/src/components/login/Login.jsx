import { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import logo from "../../assets/icono1.png";
import vector from "../../assets/vector.png";
import { Link, useNavigate } from "react-router-dom"; // Importamos useNavigate
import Swal from "sweetalert2";
import { useAuth } from "../../context/authContext";

export default function Login() {
  const { login } = useAuth();
  const [isLogin, setIsLogin] = useState(true); // Determina si es login o registro
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // Para manejar el error de login
  const navigate = useNavigate(); // Usamos useNavigate para la redirección

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // Lógica para login
      try {
        const response = await axios.post(
          "http://localhost:4000/api/users/login", // Llamada a la ruta de login
          {
            email: formData.email,
            password: formData.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          Swal.fire({
            title: "Bienvenido!",
            text: "Inicio de sesión exitoso",
            icon: "success",
          });

          login(); // Establece el estado de autenticación global en true
          navigate("/home");
        }
      } catch (error) {
        console.error("Error:", error);
        setError("Credenciales incorrectas");
        Swal.fire({
          title: "Error",
          text: "Las credenciales son incorrectas. Intenta nuevamente.",
          icon: "error",
        });
      }
    } else {
      // Lógica para registro
      try {
        const response = await axios.post(
          "http://localhost:4000/api/users",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          Swal.fire({
            title: "Registro creado con éxito!",
            text: "Se agregaron los datos a la base de datos",
            icon: "success",
          });
          setFormData({
            name: "",
            email: "",
            password: "",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        Swal.fire({
          title: "Error",
          text: "Hubo un problema al crear el usuario.",
          icon: "error",
        });
      }
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  const handleOmitir = () => {
    // Limpiar los datos de autenticación en localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirigir al usuario a la página de inicio (puedes cambiar '/home' por cualquier ruta)
    navigate("/home");
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginSection}>
        <img src={vector} alt="vector" className={styles.vector} />
        <h1 className={styles.welcome}>Bienvenido!</h1>
        <button className={styles.signinButton} onClick={toggleForm}>
          {isLogin ? "Registrarse" : "Iniciar Sesión"}
        </button>
      </div>
      <div className={styles.signupSection}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h1 className={styles.title}>
          {isLogin ? "Iniciar Sesión" : "Crea tu cuenta"}
        </h1>

        {isLogin ? (
          <form className={styles.signupForm} onSubmit={handleSubmit}>
            {error && <p className={styles.error}>{error}</p>}{" "}
            {/* Mostrar el error */}
            <input
              type="email"
              placeholder="Correo"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button className={styles.signupButton}>Iniciar Sesión</button>
          </form>
        ) : (
          <form className={styles.signupForm} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Correo"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button className={styles.signupButton}>Registrarse</button>
          </form>
        )}

<p className={styles.terms} onClick={handleOmitir}>
          Omitir por ahora
        </p>
        </p>
      </div>
    </div>
  );
}
