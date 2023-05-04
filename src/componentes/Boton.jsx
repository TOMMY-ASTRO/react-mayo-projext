import React from "react";

const Boton = () => {
  //   const [showHome, setShowHome] = useState(false);
  //   const [showAboutMe, setShowAboutMe] = useState(false);
  //   const [showContactMe, setShowContacMe] = useState(false);
  //   const [showPortafolio, setShowPortafolio] = useState(false);

  const Pulsar = () => {
    alert("hola como estas?");
  };
  return (
    <>
      <link
        href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        rel="stylesheet"
      />
      <a
        className="btn"
        onClick={() => {
          Pulsar();
        }}
      >
        <i className="bx bx-menu"></i>
      </a>
    </>
  );
};

export default Boton;
