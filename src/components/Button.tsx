import React, { FC } from "react";

export interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ onClick, children, disabled }) => (
  <button onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

export default Button;
