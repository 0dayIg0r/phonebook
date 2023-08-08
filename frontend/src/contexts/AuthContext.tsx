import { createContext, ReactNode, useState, useEffect } from 'react'
import { destroyCookie, setCookie, parseCookies } from 'nookies'

import { api } from '../services/apiClient'


interface AuthProviderProps {
    children: ReactNode
}
type AuthContextData = {
    signed: boolean,
    loadingAuth: boolean
    handleInfouser: ({ id, email }: UserProps) => void,
    person: PersonProps | null,
    phone: PhoneProps | null,
    user: UserProps | null
}

interface UserProps {
    id: string,
    email: string | null
}

interface PersonProps {
    id: string,
    name: string,
    created_at: string,
    updated_at: string
}

interface PhoneProps {
    id: string,
    number: string,
    personId: string,
    created_at: string,
    updated_at: string
}


interface AuthProviderProps {
    children: ReactNode;
  }
  

  
  interface UserProps {
    id: string;
    email: string | null;
  }
  
  interface PersonProps {
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
  }
  
  interface PhoneProps {
    id: string;
    number: string;
    personId: string;
    created_at: string;
    updated_at: string;
  }
  
  export const AuthContext = createContext({} as AuthContextData);
  
  function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps | null>(null);
    const [loadingAuth, setLoadingAuth] = useState(true);
    const [person, setPerson] = useState<PersonProps | null>(null);
    const [phone, setPhone] = useState<PhoneProps | null>(null);
  
    useEffect(() => {
      const { 'Authorization': token } = parseCookies();
      
      if (token) {
        // Here, you can call your authentication endpoint to get user data
        // based on the token and set it in the state.
        api.get('/user').then(response => {
          const userData = response.data;
          setUser(userData);
          setLoadingAuth(false);
        });
      } else {
        setLoadingAuth(false);
      }
    }, []);
  
    const handleInfouser = ({ id, email }: UserProps) => {
      setUser({ id, email });
      // You can set your authentication token cookie here.
      setCookie(null, 'token', 'token', {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      });
    }
  
    return (
      <AuthContext.Provider
        value={{ signed: !!user, loadingAuth, handleInfouser, person, phone, user }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
  
  export default AuthProvider;