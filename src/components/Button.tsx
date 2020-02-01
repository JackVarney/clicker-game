import React, { FC } from "react";

interface Props {
  onClick: () => void;
}

const Button: FC<Props> = ({ onClick, children }) => (
  <button onClick={onClick}>{children}</button>
);

export default Button;
