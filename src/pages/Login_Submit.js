import React from "react";
import "./login.scss";

const Login_Submit = () => {
  return (
    <section className="section">
      <div className="section__login">
        <h4>Login</h4>
        <div className="input-group">
          <label htmlFor="username">username : </label>
          <input type="text" name="username" id="username" /> <br />
          <label htmlFor="username">password : </label>
          <input type="password" name="password" id="password" />
        </div>
        <button>Login</button>
      </div>
      <a href="#">Forgot your password?</a>
      <div className="section__createAccount">
        <h4>Create Account</h4>
        <div className="input-group">
          <label htmlFor="username">username : </label>
          <input type="text" name="username" id="username" /> <br />
          <label htmlFor="username">password : </label>
          <input type="password" name="password" id="password" />
        </div>
        <button>create account</button>
      </div>
    </section>
  );
};

export default Login_Submit;
