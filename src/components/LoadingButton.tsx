import React, { FC, useState } from "react";
import styled from "styled-components";
import Button, { ButtonProps } from "./Button";
import LoadingBar from "./LoadingBar";

const DURATION = 1000;
interface Props extends ButtonProps {}

const Wrapper = styled.div`
  display: inline-block;
`;

const LoadingButton: FC<Props> = props => {
  const [percentage, setPercentage] = useState(0);

  const onClick = () => {
    props.onClick();

    updatePercentage(Date.now());
  };

  function updatePercentage(timeOnClick: number) {
    if (!timeOnClick) {
      setPercentage(0);
      return;
    }

    const difference = Date.now() - timeOnClick;
    const percentage: number = (DURATION - difference) / 10;

    if (percentage > 0) {
      setPercentage(percentage);
      window.requestAnimationFrame(() => updatePercentage(timeOnClick));
    } else {
      setPercentage(0);
    }
  }

  return (
    <Wrapper>
      <Button {...props} onClick={onClick} disabled={percentage > 0} />
      <LoadingBar percent={percentage} />
    </Wrapper>
  );
};

export default LoadingButton;
