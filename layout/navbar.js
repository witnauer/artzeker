import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '../stores/authContext';
import Logo from './logo';

export default function Navbar() {
  const { user, login, logout, authReady } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="">
      <nav>
        <Logo />
        {authReady && (
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
            {user && (
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            )}
            {user && <li>{user.user_metadata.full_name}</li>}
            {user && (
              <li onClick={logout} className="btn">
                Logout
              </li>
            )}
            {!user && (
              <li onClick={login} className="btn">
                Login/Signup
              </li>
            )}
          </ul>
        )}
      </nav>
    </div>
  );
}
