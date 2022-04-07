import Navbar from '../layout/navbar';
import { AuthContextProvider } from '../stores/authContext';
import '../styles/globals.css';

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
