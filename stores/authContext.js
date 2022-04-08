import { createContext, useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { useRouter } from 'next/router';
const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  authReady: false,
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);

  const router = useRouter();

  useEffect(() => {
    netlifyIdentity.on('login', (user) => {
      setUser(user);
      netlifyIdentity.close();
      router.push('/dashboard');
      console.log('login event');
    });

    netlifyIdentity.on('logout', () => {
      setUser(null);
      console.log('logout event');
      router.push('/');
    });

    netlifyIdentity.on('init', (user) => {
      setUser(user);
      setAuthReady(true);
      console.log('init event');
    });

    netlifyIdentity.init();

    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, []);

  const login = () => {
    netlifyIdentity.open();
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  const context = { user, login, logout, authReady };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
