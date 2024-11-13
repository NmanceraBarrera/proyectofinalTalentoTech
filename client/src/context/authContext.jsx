import React, { createContext, useState, useContext, useEffect } from "react";
import Swal from "sweetalert2"; // Asegúrate de importar Swal

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Recuperar los datos de usuario y token desde localStorage si existen
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setIsAuthenticated(true);
      setUser(storedUser);
    }
  }, []);

  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem("token", userData.token);
    localStorage.setItem("user", JSON.stringify(userData));
    console.log("Usuario logueado:", userData);
  };

  const logout = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Si cierras sesion debes voler a loguearte para crear un anuncio",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        Swal.fire({
          title: "Cerrado sesión!",
          text: "Has cerrado sesión con éxito.",
          icon: "success",
        });
      }
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
