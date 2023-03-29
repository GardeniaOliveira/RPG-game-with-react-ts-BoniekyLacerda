import styled from "styled-components";

export const Container = styled.div`
  background-color: #24272f;
  min-height: 100vh;
  color: white;
`;

export const Map = styled.div`
  height: 480px;
  width: 480px;
  background-image: url("/assets/map.png");
  background-position: left top;
  background-size: 100%;
`;

export const Button = styled.button`
  width: 80px;
  background-color: #0284c7;
  color: white;
  padding: 10px 20px;
  border: 1px solid transparent;
  border-radius: 5px;
  margin: 10px;
  text-transform: uppercase;
  font-weight: 500;
  outline: none;
`;
