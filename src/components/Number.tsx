import React, { FC } from "react";
import styled from "styled-components";

const NumberText = styled.span`
  display: block;
`;

interface Props {
  label?: string;
}

const Number: FC<Props> = ({ children, label }) => (
  <NumberText>{`${label ? label + ": " : ""}${children}`}</NumberText>
);

export default Number;
