import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { users } from "../utils/dataAdm";

interface User {
  email: string;
  password: string;
  name?: string;
  isAdmin?: boolean;
}

interface AuthContextData {
  user?: User;
  signIn: ({ email, password }: User) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

const resetState = (): AuthContextData => ({
  user: undefined,
  signIn: async () => {},
  signOut: () => {},
});

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthContextData>(resetState);

  async function signIn({ email, password }: User): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        const user = users.find(u => u.email === email && u.password === password);
  
        if (user) {
          localStorage.setItem("@REALB:user", JSON.stringify(user));
          setData({ user, signIn, signOut });
          resolve(); // Resolvendo a Promise com sucesso
        } else {
          console.error("Usuário não existe");
          reject(new Error("Usuário não encontrado")); // Rejeitando a Promise com um erro
        }
      } catch (error) {
        console.error('Erro ao realizar login:', error);
        alert("Não foi possível entrar.");
        reject(error); // Rejeitando a Promise com o erro
      }
    });
  }

  function signOut(): void {
    localStorage.removeItem("@REALB:user");
    setData(resetState);
  }

  useEffect(() => {
    const storedUser = localStorage.getItem("@REALB:user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setData({ user, signIn, signOut });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser utilizado dentro de um AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
