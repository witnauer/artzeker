import Link from 'next/link';
import styles from '../styles/Dashboard.module.css';

export default function DashboardLayout({ children }) {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardGrid}>
        <div className={styles.dashboardNav}>
          <h2 className={styles.membershipLevel}>PRO</h2>
          <ul>
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
  );
}
