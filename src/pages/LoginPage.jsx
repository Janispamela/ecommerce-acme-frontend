import { loginService } from "../services/authServices";
import { useState } from "react";

const initForm = {
    user_name: "",
    password: "",
  };

const LoginPage = () => {

    const [form, setForm] = useState(initForm);
  
    const handleIniciarSesion = async (e) => {

        e.preventDefault();

    //    console.log(form);

        try {
            const resp = await loginService(form);
            console.log(resp.data.data);
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    const handleChange = (e) => {

        setForm(
          {
            ...form,
            [e.target.name]: e.target.value,
          }
        );

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
                <input type="text" className="form-control" id="inputUserName" name="user_name" value={form.user_name} onChange={handleChange}/>
                
            </div>
            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">
                    Password
                </label>
                <input type="password" className="form-control" id="inputPassword" name="password" value={form.password} onChange={handleChange}/>
            </div>
            
            <button type="submit" className="btn btn-primary">
                Sign In
            </button>
            </form>

          </article>
        </main>
      </>
    );
  };
  
  export default LoginPage;