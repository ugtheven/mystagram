import React from "react";
import mobilePreview from "./mobile-preview.png";
import logo from "./logo.png";
import "./LoginPage.scss";

export function LoginPage() {
  return (
    <div className="container">
      {/* <!-- Mobile preview --> */}
      <div className="mobile">
        <img
          className="mobile-preview"
          src={mobilePreview}
          alt=""
        ></img>
      </div>

      {/* <!-- Login --> */}
      <div className="login">
        {/* <!-- Login forms --> */}
        <div className="login-box">
          {/* <!-- Logo --> */}
          <img src={logo} alt=""></img>
          {/* <!-- Forms --> */}
          <form className="login-box-forms">
            {/* <!-- Field --> */}
            <div className="inputbox">
              <input type="text" id="username" required></input>
              <span>Nom d'utilisateur</span>
            </div>
            {/* <!-- Field --> */}
            <div className="inputbox">
              <input type="password" id="password" required></input>
              <span>Mot de passe</span>
            </div>
            {/* <!-- Button --> */}
            <input className="button" value="Se connecter"></input>
          </form>
          {/* <!-- Link --> */}
          <a className="link" href="/sendResetPass">
            Mot de passe oublié ?
          </a>
        </div>

        {/* <!-- Link to register --> */}
        <div className="redirection-box">
          <span>Vous n'avez pas de compte ?</span>
          <a className="link" href="/register">
            Inscrivez-vous
          </a>
        </div>
      </div>
    </div>
  );
}
