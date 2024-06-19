import AuthContext from "../context/AuthContext";
import { useState, useContext, useEffect } from "react";

const initForm = {
  user_name: "",
  password: "",
};

const LoginPage = () => {
  const [form, setForm] = useState(initForm);
  const { user, message, iniciarSesion } = useContext(AuthContext);

  useEffect(() => {
    // Mostrar el mensaje en la consola si existe
    if (message) {
      console.log(message);
    }
  }, [message]);

  const handleIniciarSesion = async (e) => {
    e.preventDefault();
    await iniciarSesion(form);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <header className="row col">
        <h1>Login Page</h1>
      </header>
      <main className="row">
        <article className="col">
          <form onSubmit={handleIniciarSesion}>
            <div className="mb-3">
              <label htmlFor="inputUserName" className="form-label">
                User name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputUserName"
                name="user_name"
                value={form.user_name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </form>
          {message === "Usuario o contraseña incorrectos" && (
            <div className="alert alert-info mt-3">{message}</div>
          )}
        </article>
      </main>
      <section className="row">
        <article className="col">
          {Object.keys(user).length > 0 && (
            <pre>{JSON.stringify(user, null, 2)}</pre>
          )}
        </article>
      </section>
    </>
  );
};

export default LoginPage;
