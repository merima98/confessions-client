import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  padding-bottom: 0.25rem;
  width: 100%;
  font-size: 0.25rem;
  color: ${(props) => props.theme.colors.color};
`;

function FormControl(props) {
  const { label = "", children } = props;
  return (
    <div>
      {label && <Label>{label}</Label>}
      {React.cloneElement(children)}
    </div>
  );
}

export default FormControl;
