import { ReactNode, ChangeEvent } from 'react';
import './styles.css';

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
    <div className="input-container">
      <div className="icon">{icon}</div>
      <input 
        type="text"
        placeholder={placeholder} 
        className="input-text" 
        onChange={handleInputChange} 
        name="inputValue"
      />
    </div>
  )
}