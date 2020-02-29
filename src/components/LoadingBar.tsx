import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";

interface Props {
  percent: number;
}

const StyledLoadingBar = styled.div`
  height: 4px;
  background-color: black;
`;

const LoadingBar: FC<PropsWithChildren<Props>> = ({ percent, ...props }) => (
  <StyledLoadingBar
    {...props}
    style={{ width: `${String(percent)}%` }}
  ></StyledLoadingBar>
);

export default LoadingBar;
