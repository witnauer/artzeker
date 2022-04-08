import Link from 'next/link';
import styles from '../styles/Dashboard.module.css';
import { createContext, useContext } from 'react';
import { useFetchArtist } from '../hooks/useFetchArtist';

const DashboardContext = createContext(useFetchArtist);

export function useArtist() {
  const artist = useContext(DashboardContext);
  if (artist === null) {
    throw new Error('useArtist must be used within a DashboardProvider');
  }
  return artist;
}

export default function DashboardLayout({ children }) {
  const artist = useFetchArtist();
  console.log('artist', artist);
  return (
    <DashboardContext.Provider value={{ artist }}>
      <div className={styles.dashboard}>
        <div className={styles.dashboardGrid}>
          <div className={styles.dashboardNav}>
            <h2 className={styles.membershipLevel}>PRO</h2>
            <ul>
              <li>
                <h2>{artist.name}</h2>
              </li>
              <li>
                <Link href="/dashboard/artworks">Artworks</Link>
              </li>
              <li>
                <Link href="/dashboard/statement">Statement</Link>
              </li>
              <li>
                <Link href="/dashboard/resume">Resume</Link>
              </li>
              <li>
                <Link href="/dashboard/social">Social</Link>
              </li>
              <li>
                <Link href="/dashboard/contact">Contact</Link>
              </li>
              <li>
                <Link href="/dashboard/settings">Settings</Link>
              </li>
              <li>
                <Link href="/dashboard/">Overview</Link>
              </li>
            </ul>
          </div>
          <div className={styles.dashboardMain}>{children}</div>
        </div>
      </div>
    </DashboardContext.Provider>
  );
}
