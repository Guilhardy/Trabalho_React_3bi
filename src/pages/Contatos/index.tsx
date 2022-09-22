import React from "react";
import { Footer } from "../../components/Footer";
import { Menu } from "../../components/Menu";
import "./index.css";

export const Contatos = () => {
  return (
    <>
      <Menu />
      {/* >
        <div>
            <label className="form_1">
                Email address
            </label>
            <input type="text" 
            typeof="email"
            className="form_1"
            id="email"
            name="email"
            required
            /> */}

      <h1 className="titulo">Nos informe sua situaçao <br /> em relação a sua saúde</h1>

      <form action="" className="form">
        <div className="mb-3">
          <label className="form_1">Seu Email</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div className="mb-3">
          <label className="">Descreva sua <br /> situação de saúde</label>
          <br />
          <textarea></textarea>

          <div className="form-check">
            <label htmlFor="">Com qual frequencia voce vai</label>
            <br />
            <input
              className=""
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="">Otima</label>
          </div>
          <div className="form-check2">
            <input
              className=""
              type="checkbox"
              value=""
              id="flexCheckDefault2"
            />
            <label className="">Meio capenga</label>
          </div>
          <div className="form-check2">
            <input
              className=""
              type="checkbox"
              value=""
              id="flexCheckDefault2"
            />
            <label className="">PRECARIA</label>
          </div>
        </div>

        <button className="botao" type="submit">Concluido</button>
      </form>

      <h4 className="n">Criado por Guilhardy matos</h4>
      <h5 className="i">Instagram : @Guilhardymatos</h5>

      <Footer />
    </>
  );
};
