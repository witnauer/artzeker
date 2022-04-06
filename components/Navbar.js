import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import AuthContext from '../stores/authContext';

export default function Navbar() {
  const { user, login, logout } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="">
      <nav>
        <div className="logo-holder">
          <Image
            className="logo"
            src="/images/logo.png"
            alt="Artzeker"
            width={35}
            height={35}
          />
        </div>
        <h1>artzeker</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="">Blog</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li onClick={logout} className="btn">
            Logout
          </li>
          <li onClick={login} className="btn">
            Login/Signup
          </li>
        </ul>
      </nav>
    </div>
  );
}
