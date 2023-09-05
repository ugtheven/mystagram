import mobilePreview from "../../assets/mobile-preview.png";
import logo from "../../assets/logo.png";
import "./LoginPage.scss";
import { InputField } from "../../components/InputField/InputField";
import { Button } from "../../components/Button/Button";

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
            <InputField label="Nom d'utilisateur" type="text"/>
            <InputField label="Mot de passe" type="password" />
            <Button label="Se connecter" />
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
