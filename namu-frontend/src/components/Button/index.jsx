import React from "react";
import styled from "styled-components";

const BasicBtn = styled.div`
  width: 130px;
  padding: 10px;
  border: 2px solid #fff4e6;
  border-radius: 4px;

  border-color: ${(props) => {
    if (props.reverse) return "#fff4e6";
    else if (props.brown) return "#592b18";
    else if (props.gold) return "#d9aa8a";
    else if (props.white) return "#fff4e6";
    else return "#fff4e6";
  }};

  color: ${(props) => {
    if (props.reverse) return "#fff4e6";
    else if (props.brown) return "#592b18";
    else if (props.gold) return "#d9aa8a";
    else if (props.white) return "#fff4e6";
    else return "#333";
  }};

  background-color: ${(props) => {
    if (props.reverse) return "transparent";
    else if (props.brown) return "#592b18";
    else if (props.gold) return "#d9aa8a";
    else if (props.white) return "transparent";
    else return "transparent";
  }};

  font-size: 16px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  transition: 0.4s;

  &:hover {
    background-color: #343a40;
    color: #fff4e6;

    border-color: ${(props) => {
      if (props.reverse) return "#fff4e6";
      else if (props.brown) return "#592b18";
      else if (props.gold) return "#d9aa8a";
      else if (props.white) return "#343a40";
      else return "#fff4e6";
    }};
  }
`;

const Button = () => {
  return (
    <>
      <BasicBtn white>후원버튼예정</BasicBtn>
    </>
  );
};

export default Button;
