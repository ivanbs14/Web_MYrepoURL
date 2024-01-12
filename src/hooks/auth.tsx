import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { auth } from "../ConfigFireB/firebase"; // Importando o objeto auth do Firebase
import { UserCredential, signInWithEmailAndPassword } from "firebase/auth";

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
        // Signing in with Firebase authentication
        signInWithEmailAndPassword(auth, email, password)
          .then(async (userCredential: UserCredential) => {
            const user = userCredential.user;

            if (user) {
              // Creating user data object
              const userData: User = {
                email: user.email || "",
                password: "",
                name: user.displayName || "",
                isAdmin: false,
              };

              // Storing user data in localStorage
              localStorage.setItem("@REALB:user", JSON.stringify(userData));
              setData({ user: userData, signIn, signOut });
              resolve();
            } else {
              reject(new Error("USER DOES NOT EXIST."));
            }
          })
          .catch((error) => {
            console.error('Error logging in with Firebase:', error);
            reject(error);
          });
      } catch (error) {
        console.error('Error during login:', error);
        reject(error);
      }
    });
  }

  // Clearing user data from localStorage and resetting state
  function signOut(): void {
    localStorage.removeItem("@REALB:user");
    setData(resetState);
  }

  // Checking for a stored user on component mount
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
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
