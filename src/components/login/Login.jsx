import { useState } from "react";
import { image } from "../../assets/assets";
import "./login.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    phone: "",
    passWord: "",
  });
  const navigate = useNavigate();

  const { phone, passWord } = credentials;

  return (
    <div>
      <button
        className="back"
        onclick={() => {
          navigate("/");
        }}
      >
        ⬅
      </button>
      <div className="container">
        <section className="login">
          <div className="login-head">
            <h2>Bienvenue sur</h2>
            <h1>MA PHARMACIE</h1>
            <h3></h3>
          </div>

          <center>
            <div className="login-middle">
              <div className="one">
                <img src={image.Pharmacien03} alt="Pharmacien" />
              </div>

              <div className="two">
                <fieldset>
                  <form action="#">
                    <p>Connectez-vous pour continuer</p>
                    <label>
                      📞
                      <input
                        type="text"
                        value={phone}
                        placeholder="6XX XXX XXX."
                      />
                    </label>
                    <br />
                    <label>
                      🔒
                      <input
                        type="password"
                        value={passWord}
                        placeholder="Mot de passe"
                      />
                    </label>

                    <article>
                      <p>
                        <a href="">Mot de passe oublié ?</a>
                      </p>
                      <button type="submit" className="btn-submit">
                        Se connecter
                      </button>
                    </article>
                  </form>
                </fieldset>
              </div>
            </div>
          </center>

          <div className="new-account">
            <p>Vous n'avez pas de compte</p>

            <h2>
              <a href="">S'inscrire</a>
            </h2>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Login;
