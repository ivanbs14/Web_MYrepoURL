import { ButtonHTMLAttributes  } from "react";

import "./styles.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    loading?: boolean;
};

export function Button({ title, loading = false, ...rest}: ButtonProps) {
    return (
        <button className="btn"
            type='button'
            disabled={loading}
            {...rest}
        >
            {loading ? 'Carregando...' : title}
        </button>
    )
}