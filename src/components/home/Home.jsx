import "./home.scss";
import Logo03 from "../../assets/Logo03.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="home">
        <img src={Logo03} alt="Logo" />

        <button className="btn-next" onClick={() => navigate("/login")}>
          Suivant
        </button>
      </section>
    </div>
  );
}

export default Home;
