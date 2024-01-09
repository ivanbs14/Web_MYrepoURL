import React, { ChangeEvent, ReactNode, useState } from 'react';
import { Container } from "./style";
import { IconType } from 'react-icons';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface InputWithIconProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  icon?: IconType;
  type?: string;
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
    <Container>
      {Icon && <Icon className="input-icon" />}
      <input
        type={type === 'password' && showPassword ? 'text' : type}
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
    </Container>
  );
}
