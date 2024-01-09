import { ReactNode, ChangeEvent } from 'react';
import { Container } from "./styles";

interface TextInputProps {
  icon?: ReactNode;
  placeholder?: string;
  onInputChange?: (value: string) => void;
}

export function InputUser({ icon, placeholder, onInputChange }: TextInputProps) {

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (onInputChange) {
      onInputChange(newValue);
    }
  };

  return (
    <Container>
      <div className="icon">{icon}</div>
      <input 
        type="text"
        placeholder={placeholder} 
        onChange={handleInputChange} 
        name="inputValue"
      />
    </Container>
  )
}