import { image } from "../../assets/assets";
import "./home.scss";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <section className="home">
        <img src={image.Logo03} alt="Logo" />

        <button className="btn-next" onClick={() => navigate("/login")}>
          Suivant
        </button>
      </section>
    </div>
  );
}

export default Home;
