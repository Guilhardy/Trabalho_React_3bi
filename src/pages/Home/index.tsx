import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import img from "./img/home.jpeg";
import "./home.css";
export const Home = () => {
  return (
    <>
      <Menu />

      {/*  
      <p>Quero sair daquiiiii</p>
        <main> 
        <h3>Sou a Home</h3>
        <p>oi</p>
        <Card />
        <p>MEU DEEEEUSSSS.</p>
        </main>
         */}

      <div className="home_i">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={img} className="img_home" alt="home" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1>Em busca de uma saúde melhor </h1>
              <p className="card-text">
                Na busca por mais qualidade de vida para crianças, famílias e
                comunidades brasileiras, acreditamos que a saúde e o bem-estar
                físico e psicológico são fundamentais. Por isso, desenvolvemos
                programas nas áreas de prevenção de doenças, atividades físicas,
                cultura e lazer. Em meio à correria diária, negligenciamos os
                cuidados com nosso corpo e mente, não é mesmo? Mas essa não é a
                melhor escolha se você deseja uma vida com mais qualidade. Para
                ver algumas dicas para sua saúde acesse a área de saúde do corpo
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
