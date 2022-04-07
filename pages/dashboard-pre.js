import { useEffect, useContext, useState } from 'react';
import styles from '../styles/Dashboard.module.css';
import AuthContext from '../stores/authContext';
import Image from 'next/image';
import Link from 'next/link';

export default function Dashboard({ children }) {
  const { user, authReady } = useContext(AuthContext);
  const [portfolio, setPortfolio] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      fetch(
        '/.netlify/functions/dashboard',
        user && {
          headers: {
            Authorization: 'Bearer ' + user.token.access_token,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error('Please login to view your Dashboard');
          }
          return res.json();
        })
        .then((data) => {
          setPortfolio(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setPortfolio(null);
        });
    }
  }, [user, authReady]);

  return (
    // <div className={styles.dashboard}>
    //   <div className={styles.dashboardGrid}>
    //     <div className={styles.dashboardNav}>
    //       <h2 className={styles.membershipLevel}>STUDENT</h2>
    //       <ul>
    //         <li>
    //           <Link href="">Artworks</Link>
    //         </li>
    //         <li>
    //           <Link href="">Statement</Link>
    //         </li>
    //         <li>
    //           <Link href="">Resume</Link>
    //         </li>
    //         <li>
    //           <Link href="">Social</Link>
    //         </li>
    //         <li>
    //           <Link href="">Contact</Link>
    //         </li>
    //         <li>
    //           <Link href="">Settings</Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className={styles.dashboardMain}>{children}</div>
    //   </div>
    // </div>

    // <div className="inner-container">
    //   <h1>Dashboard</h1>
    //   {!authReady && <div>Loading...</div>}

    //   {error && (
    //     <div className={styles.error}>
    //       <p>{error}</p>
    //     </div>
    //   )}

    //   {portfolio &&
    //     portfolio.artwork.map((art) => (
    //       <div key={art.title} className={styles.artwork}>
    //         <h2>{art.title}</h2>
    //         <p>{art.description}</p>
    //         <Image src={art.image} alt={art.title} width="600" height="400" />
    //       </div>
    //     ))}
    // </div>
  );
}