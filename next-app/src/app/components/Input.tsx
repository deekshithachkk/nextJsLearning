import * as React from "react";
import { styled } from "styled-components";
import { themeColor } from "../helper/constant";

function Input(props: InPutProps) {
  const { name, placeholder, fieldType, register ,formState} = props;
  return (
    <InputContainer>
      {fieldType === "textarea" ? (
        <TextareaEle
          rows={5}
          name={name}
          placeholder={placeholder}
          {...register(name, { required: true })}
        />
      ) : (
        <InputEle name={name} placeholder={placeholder} {...register(name)}/>
      )}
    </InputContainer>
  );
}
export default Input;

const InputContainer = styled.div`
  width: 100%;
  padding: 1rem 2rem;
`;
const InputStyle = `
  width: 100%;
  padding: 1rem;
  &:hover {
    border:2px solid ${themeColor.yellow};
    outline:none;
  }
`;

const InputEle = styled.input`
  ${InputStyle}
`;
const TextareaEle = styled.textarea`
  ${InputStyle}
`;
