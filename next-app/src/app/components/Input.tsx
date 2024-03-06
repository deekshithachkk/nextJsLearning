import * as React from "react";
import { styled } from "styled-components";
import { themeColor } from "../helper/constant";

function Input(props: InPutProps) {
  const { name, placeholder, fieldType, register ,formState,type,id} = props;
  return (
    <InputContainer>
      {fieldType === "textarea" ? (
        <TextareaEle
          rows={5}
          id={id}
          name={name}
          className="border-2"
          placeholder={placeholder}
          {...register(name, { required: true })}
        />
      ) : (
        <InputEle className="border-2" id={id} type={type} name={name} placeholder={placeholder} {...register(name)}/>
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
