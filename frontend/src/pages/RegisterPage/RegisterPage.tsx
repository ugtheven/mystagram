import mobilePreview from "../../assets/mobile-preview.png";
import logo from "../../assets/logo.png";
import "./RegisterPage.scss";
import { InputField } from "../../components/InputField/InputField";
import { Button } from "../../components/Button/Button";

export function RegisterPage() {
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
      <div className="register">
        {/* <!-- Login forms --> */}
        <div className="register-box">
          {/* <!-- Logo --> */}
          <div className="logo">
            <img src={logo} alt=""></img>
          </div>
          {/* <!-- Forms --> */}
          <form className="register-box-forms">
            <InputField label="Nom d'utilisateur" type="text" />
            <InputField label="E-mail" type="text" />
            <InputField label="Mot de passe" type="password" />
            <div className="condition">
              <p>En vous inscrivant, vous acceptez que nous conservions votre e-mail dans le cadre du bon fonctionnement du site.</p>
            </div>
            <Button label="S'enregistrer" />
          </form>
        </div>

        {/* <!-- Link to register --> */}
        <div className="redirection-box">
          <span>Vous avez un compte ?</span>
          <a className="link" href="/register">
            Connectez-vous
          </a>
        </div>
      </div>
    </div>
  );
}
