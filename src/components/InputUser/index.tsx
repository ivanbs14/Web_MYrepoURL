import { ReactNode, ChangeEvent, useState } from 'react';
import { Container } from "./styles";

interface TextInputProps {
  icon?: ReactNode;
  placeholder?: string;
  onInputChange?: (value: string) => void;
}

export function InputUser({ icon, placeholder, onInputChange }: TextInputProps) {
  const [inputValue, setInputValue] = useState<string>(''); // Adicionando o estado

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
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
        value={inputValue}
        onChange={handleInputChange} 
        name="inputValue"
      />
    </Container>
  )
}