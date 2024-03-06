import React from "react";
import styled from "styled-components";
import { themeColor } from "../helper/constant";

interface ButtonStyleProps {
  cursor: string;
}

function Button(props: ButtonProps) {
  const { name, type, isDirty, handleClick } = props;
  return (
    <ButtonEle
      type={type}
      cursor={isDirty ? "pointer" : "not-allowed"}
      onClick={handleClick}
    >
      {name}
    </ButtonEle>
  );
}

export default Button;

const ButtonEle = styled.button<ButtonStyleProps>`
  background-color: ${themeColor.blueGreen};
  margin: 1rem auto;
  cursor: ${(prop) => prop.cursor};
  width: 50%;
  height: 3rem;
  border: none;
  text-align: center;
  align-content: center;
  color: ${themeColor.white};
`;
