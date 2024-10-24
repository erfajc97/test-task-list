import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NavButton = styled.button`
  margin: 10px;
  padding: 15px 30px;
  font-size: 18px;
  background-color: #62d3d3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const HomePage: React.FC = () => {
  return (
    <HomeContainer>
      <Link to="/tasks">
        <NavButton>Ir a Tasks</NavButton>
      </Link>
      <Link to="/list">
        <NavButton>Ir a Listado</NavButton>
      </Link>
    </HomeContainer>
  );
};

export default HomePage;
