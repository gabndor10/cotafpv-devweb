import React, { useState } from "react";
import "./ContactMe.css";

const ContactMe = () => {
  const [formValues, setFormValues] = useState({
    nome: "",
    email: "",
    telefone: "",
    texto: ""
  });

  const attDados = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const attAPI = () => {
    if (!formValues.nome || !formValues.email || !formValues.telefone || !formValues.texto) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    if (formValues.nome.length > 40 || formValues.email.length > 40 || formValues.texto.length > 200) {
      alert("Os campos excederam o limite de caracteres!");
      return;
    }

    fetch("https://api-cota-fpv.vercel.app/mensagem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formValues)
    })
      .then((response) => response.json())
      .then((data) => {

        console.log(data);
        window.alert("Mensagem enviada com sucesso!");
        setFormValues({
          nome: "",
          email: "",
          telefone: "",
          texto: ""
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  return (
    <div className="container">
      <div className="tituloContato">
        <span>MANDE SUA MENSAGEM ABAIXO</span>
        <h1>Contato</h1>
      </div>
      <div className="contato">
        <section className="cardContato">
          <label htmlFor="nome">NOME</label>
          <input type="text" name="nome" value={formValues.nome} onChange={attDados} maxLength={40} required />

          <label htmlFor="email">E-MAIL</label>
          <input type="email" name="email" value={formValues.email} onChange={attDados} maxLength={40} required/>

          <label htmlFor="telefone">TELEFONE</label>
          <input type="tel" name="telefone" value={formValues.telefone} onChange={attDados} maxLength={15} required/>

          <label htmlFor="texto">SUA MENSAGEM</label>
          <textarea className="texto" type="text" name="texto" value={formValues.texto} onChange={attDados} maxLength={200} required/>

          <button type="button" onClick={attAPI}>
            ENVIAR MENSAGEM
          </button>
        </section>
      </div>
      <hr size="1" color="#ffffff" />
    </div>
  );
};

export default ContactMe;
