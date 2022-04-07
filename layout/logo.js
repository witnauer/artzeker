import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <>
      <div className="logo-holder">
        <Link href="/">
          <a>
            <Image
              className="logo"
              src="/images/logo.png"
              alt="Artzeker"
              width={35}
              height={35}
            />
          </a>
        </Link>
      </div>
      <h1>artzeker</h1>
    </>
  );
}
