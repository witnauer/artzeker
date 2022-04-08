// import Navbar from '../layout/navbar';
import dynamic from 'next/dynamic';
import { AuthContextProvider } from '../stores/authContext';
import '../styles/globals.css';

const Navbar = dynamic(() => import('../layout/navbar'));

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  return (
    <AuthContextProvider>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

export default MyApp;

const EmptyLayout = ({ children }) => <>{children}</>;
