import React, { useState } from "react";
import styled from "styled-components";
import Hamburguer from "./Hamburguer-button";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <div className={`links ${clicked ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink to="/about-me">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/">REPOSTERIA</NavLink>
            </li>
            <li>
              <NavLink to="/">MAQUINAS</NavLink>
            </li>
            <li>
              <NavLink to="/">SENATI</NavLink>
            </li>
          </ul>
        </div>
        <div className="burguer">
          <Hamburguer clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}
export default Navbar;

const NavContainer = styled.nav`
  // ESTO ES NETAMENTE CUANDO EL ICONO SE HACE CLICK Y EL RESPONSIVE

  // ESTO ES ANTES DE DARLE CLICK
  .links {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 100px;
    left: -6000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 2s ease;
    a {
      color: #fff;
      font-size: 2rem;
      display: block;
      text-decoration: none;
      margin-top: 1rem;
      text-transform: uppercase;
    }
    @media (min-width: 9000px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: #fff;
        display: inline;
        margin-top: 1rem;
      }
      display: block;
    }
  }

  // ESTO ES DESPUES DE DARLE CLICK
  .links.active {
    opacity: 1;
    visibility: visible;
    width: 100%;
    display: block;
    left: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
    }
  }

  .burguer {
    @media (min-width: 10000px) {
      width: 150px;
      height: 15px;
      background: red;
    }
    @media (min-width: 768px) {
      top: 20px;
    }
  }
`;

const BgDiv = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  background-color: #000000;
  position: absolute;
  top: 100px;
  left: -3050px;
  width: 10pc;
  height: 20pc;
  z-index: -1;
  transition: all 2s ease;

  &.active {
    border-radius: 0 0 20% 0;
    top: 0;
    left: 0;
    width: 10pc;
    height: 30pc;
  }

  //esto es del responsive del celular

  @media (max-width: 768px) {
    // display: none;
  }
  background-color: red;
  position: absolute;
  top: 100px;
  left: -3050px;
  width: 10pc;
  height: 0pc;
  z-index: -1;
  transition: all 2s ease;

  // esto es cuando se da click en el responsive
  &.active {
    top: -10pc;
    left: -20pc;
    width: 60pc;
    height: 60pc;
  }
`;

// & = es como decir cuando tenga la clase active, hover, etc. Es un característica de style-components
