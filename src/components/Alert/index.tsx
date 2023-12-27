import React, { useState } from "react";
import { Container } from "./style";

interface AlertProps {
  children: React.ReactNode;
  onClickOff: () => void;
}

export function Alert({ children, onClickOff }: AlertProps) {
  const [disabled, setDisabled] = useState(false);

  // Function to close the alert
  const handleClick = () => {
    if (!disabled) {
      setDisabled(true);
      if (onClickOff) {
        onClickOff();
      }
    }
  };

  return (
    <Container onClick={handleClick} disabled={disabled}>
      {children}
    </Container>
  );
}
