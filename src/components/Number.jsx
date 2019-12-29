import React from "react";
import styled from "styled-components";

const NumberText = styled.span`
  display: block;
`;

function Number({ children, label }) {
  return <NumberText>{`${label ? label + ": " : ""}${children}`}</NumberText>;
}

export default Number;
