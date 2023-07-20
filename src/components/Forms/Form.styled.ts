import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 16px;
  margin-bottom: 16px;
  padding: 16px;
  width: 500px;
  border: 2px solid black;
  border-radius: 4px;
`;

export const ButtonEye = styled.button`
  position: absolute;
  top: 67%;
  left: 90%;  
`;

export const SvgEye = styled.svg`
  width: 18px;
  height: 20px;

  fill: grey;
`;
