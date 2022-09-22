import React from "react";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import img from "./img/agua.jpg";
import img_q from "./img/dormindo.jpg";
import img_a from "./img/exercicio.jpg";
import img_b from "./img/medico.jpg";
import img_c from "./img/doces.jpg";

import "./index.css";
export const Servicos = () => {
  return (
    <>
      <Menu />
    
      <body className="saude_corpo">
        <img src={img} className="agua" alt="agua" />
        <div className="foto1">
          <div className="row g-0">
            <div className="col-md-4">
           
            </div>

            <div className="col-md-8">
              <div className="ta">
                <h2 className="card-title">Beba bastante água</h2>
                <p className="a_p">
                  Sempre que falamos sobre como ter uma boa saúde, lembramos
                  dela: a água. Além de matar a sede, ela é muito importante
                  para manter seu corpo hidratado e diminuir a retenção de
                  líquidos, o que contribui para a perda de peso. A bebida
                  também ajuda na desintoxicação do organismo e seu intestino
                  funciona bem melhor. O indicado é consumir dois litros por
                  dia. “Uma boa hidratação é de extrema importância para nossa
                  saúde, por isso, nós nutricionistas, achamos importante frisar
                  o uso de estratégias como levar garrafas para a rotina e ir
                  tomando durante o dia”.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

       
        <img src={img_q} className="dormindo" alt="trabalho" />
        <div className="card mb-3">
          <div className="td">
            <div className="col-md-4">
              <br />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Tenha uma boa noite de sono</h2>
                <p className="card-text">
                  Sempre que falamos sobre como ter uma boa saúde, lembramos
                  dela: a água. Além de matar a sede, ela é muito importante
                  para manter seu corpo hidratado e diminuir a retenção de
                  líquidos, o que contribui para a perda de peso. A bebida
                  também ajuda na desintoxicação do organismo e seu intestino
                  funciona bem melhor. O indicado é consumir dois litros por
                  dia. “Uma boa hidratação é de extrema importância para nossa
                  saúde, por isso, nós nutricionistas, achamos importante frisar
                  o uso de estratégias como levar garrafas para a rotina e ir
                  tomando durante o dia”, acrescenta Gabriela.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
       

        <img src={img_a} className="exercicio" alt="exercicio" />
        <div className="te">
          <div className="row g-0">
            <div className="col-md-4">
              <br />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Faça atividades físicas</h2>
                <p className="card-text">
                  Exercícios devem fazer parte da sua rotina, até mesmo se você
                  não quer emagrecer. Se feitos regularmente, eles diminuem os
                  riscos de doenças cardíacas, dão força para os músculos e
                  aceleram o metabolismo.
                </p>
              </div>
            </div>
          </div>
        </div>

       
        
        <img src={img_b} className="medico" alt="trabalho" />
        <div className="tm">
          <div className="row g-0">
            <div className="col-md-4">
              <br />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Visite seu médico regularmente</h2>
                <p className="card-text">
                  Exames de sangue, para verificar o nível de colesterol e taxa
                  de glicose no sangue, devem fazer parte do check-up anual do
                  paciente. Homens, a partir dos 40 anos, precisam ir ao
                  proctologista de seis em seis meses, caso tenham histórico de
                  câncer na família. Mulheres têm que se consultar com o
                  ginecologista de duas a três vezes por ano.
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <img src={img_c} className="doces" alt="trabalho"/>
        <div className="tdc">
          <div className="row g-0">
            <div className="col-md-4">
              <br />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">Evite açúcar</h2>
                <p className="card-text">
                  De acordo a pesquisa do International Diabetes Federation
                  (IDF), o Brasil é o quarto país com a maior quantidade de
                  pessoas com diabetes do mundo. Além disso, o número de
                  diabéticos só aumenta no país e, como se sabe, uma das
                  principais causas de diabetes e de obesidade ao nível mundial
                  é o consumo excessivo de açúcar. Não estamos dizendo que é
                  preciso retirar o açúcar completamente da sua dieta, mas que é
                  preciso reduzir as quantidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
      <div className="rodape">
       
        <Footer />
      </div>
    </>
  );
};
