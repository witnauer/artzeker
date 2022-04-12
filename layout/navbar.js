import Link from 'next/link';
import Logo from './logo';

export default function Navbar() {
  return (
    <div className="">
      <nav>
        <Logo />
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
          <li>
            <Link href="https://dashboard.artzeker.com" passHref={true}>
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
