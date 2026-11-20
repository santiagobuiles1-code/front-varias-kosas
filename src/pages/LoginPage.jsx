import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { generalAlert, redirectAlert } from '../utils/alerts';
import { end_points } from '../api/endpoints';

export function LoginPage() {
  const [getEmail, setEmail] = useState("")
  const [getPassword, setPassword] = useState("")
  const [getUsers, setUsers] = useState({})
  let redireccion = useNavigate()

  useEffect(() =>{
    fetch(end_points.users)
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [])

  function buscarUsuario(){
    let auth = getUsers.data.find((item) => item.email == getEmail && item.phone == getPassword)
    return auth
  }

  function iniciarSesion(){
    if(buscarUsuario()){
      redirectAlert("Bienvenido al sistema", "success", redireccion, "/home")
    } else{
      generalAlert("Error de credenciales", "Usuario o correo incorrecto", "error")
    }
  }

  return (
    <main className="container">
      <section className="form-panel">
        <h1>Iniciar sesión</h1>
        <p className="form-subtitle">
          POST /api/auth/login // Accede para publicar, editar y eliminar tus kosas.
        </p>

        <form>
          <div className="form-group">
            <label htmlFor="login-email">Correo electrónico</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="login-email"
              type="email"
              className="input"
              placeholder="jaime@variaskosas.co"
            />
          </div>

          <div className="form-group">
            <label htmlFor="login-password">Contraseña</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              id="login-password"
              type="password"
              className="input"
              placeholder="••••••••"
            />
          </div>

          <div className="hero-actions">
            <button onClick={iniciarSesion} type="button" className="btn btn-yellow">
              Entrar
            </button>
            <Link to="/register" className="btn btn-white">
              Crear cuenta
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
