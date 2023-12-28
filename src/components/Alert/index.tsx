import React, { useState, useEffect } from "react";
import { Container } from "./style";

interface AlertProps {
  children: React.ReactNode;
  message: string; 
  onClickOff: () => void;
}

export function Alert({ message, onClickOff }: AlertProps) {
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

  // Set a timeout to automatically close the alert after 5 seconds
  useEffect(() => {
      const timeoutId = setTimeout(() => {
      if (!disabled) {
         setDisabled(true);
         if (onClickOff) {
            onClickOff();
         }
      }
      }, 3000);

      return () => clearTimeout(timeoutId);
  }, [disabled, onClickOff]);

  return (
    <Container onClick={handleClick} disabled={disabled}>
      <h3>{message}</h3>
    </Container>
  );
}
