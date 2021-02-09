import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  padding-bottom: 0.25rem;
  width: 100%;
  font-size: 0.25rem;
  color: ${(props) => props.theme.colors.color};
`;

const Caption = styled.span`
  display: block;
  padding: 0.25rem 0.5rem;
  font-size: 0.25rem;
`;
function FormControl(props) {
  const { label = "", children, caption = "" } = props;

  return (
    <div>
      {label && <Label>{label}</Label>}
      {React.cloneElement(children)}
      {caption && <Caption>{caption}</Caption>}
    </div>
  );
}

export default FormControl;
