import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/48517851?s=460&u=e10285ca90c276061678115ab64518cfdba2699b&v=4"
          alt="Arthur Amaral"
        />
        <div>
          <strong>Arthur Amaral</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Aulas de Matemática e de Lógica.
        <br /> <br />
        Estude para com um matérial personalizado e totalmente didático, para
        que possa aprender muitos conteúdos com grande absorção destes.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 15,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
