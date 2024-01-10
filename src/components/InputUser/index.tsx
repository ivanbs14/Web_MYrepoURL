import { ReactNode, ChangeEvent, useState, useEffect } from 'react';
import { Container } from "./styles";

interface TextInputProps {
  icon?: ReactNode;
  placeholder?: string;
  value: string;
  onInputChange?: (value: string) => void;
}

export function InputUser({ icon, placeholder, value, onInputChange }: TextInputProps) {
  const [inputValue, setInputValue] = useState<string>(value || '');

  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

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