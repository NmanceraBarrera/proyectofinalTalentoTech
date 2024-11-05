import { useState } from "react";
import styles from "./Login.module.css";
import logo from "../../assets/icono1.svg";
import vector from "../../assets/vector.png";
import { Link } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
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
          <form className={styles.signupForm}>
            <input type="email" placeholder="Correo" />
            <input type="password" placeholder="Contraseña" />
            <button className={styles.signupButton}>Iniciar Sesión</button>
          </form>
        ) : (
          <form className={styles.signupForm}>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo" />
            <input type="password" placeholder="Contraseña" />
            <button className={styles.signupButton}>Registrarse</button>
          </form>
        )}

        <p className={styles.terms}>
          <Link to="/home">Omitir por ahora</Link>
        </p>
      </div>
    </div>
  );
}
