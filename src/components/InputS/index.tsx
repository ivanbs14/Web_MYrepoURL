import React, { ChangeEvent, ReactNode, useState } from 'react';
import "./style.css";
import { IconType } from 'react-icons';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface InputWithIconProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  icon?: IconType;
  type?: string; // Adicionando a propriedade 'type' para controlar o tipo de input
}

export function InputS({ placeholder, value, onChange, icon: Icon, type = 'text' }: InputWithIconProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-with-icon">
      {Icon && <Icon className="input-icon" />}
      <input
        className='inputS'
        type={type === 'password' && showPassword ? 'text' : type} // Alterando o tipo de input para 'text' se for senha e a senha estiver visível
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      {type === 'password' && (
        <button
          type="button"
          className="password-visibility-button"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? < FiEye /> : < FiEyeOff/>}
        </button>
      )}
    </div>
  );
}
