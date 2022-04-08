import DashboardLayout from '../../layout/dashboardLayout';
import styles from '../../styles/Artworks.module.css';
import { useArtist } from '../../layout/dashboardLayout';
import Image from 'next/image';

export default function Artworks() {
  const { artist } = useArtist();
  return (
    <div className="dashboard-container">
      <h2>Artworks of {artist.name}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid soluta
        ab beatae tempore et laboriosam, optio odit placeat nam temporibus
        assumenda molestiae, repudiandae officiis? Fugit maiores dignissimos
        magnam dolorem autem ipsam ex distinctio ducimus voluptatem, itaque
        accusamus dolorum facere. Obcaecati culpa excepturi distinctio, vitae,
        et laborum iste a dolores vero sint aliquid quaerat voluptate eius esse
        velit architecto nihil labore. Fugit dolores magni iusto omnis
        laudantium, accusamus consequuntur numquam repellat vel vitae
        repellendus, error ipsam, animi in nemo dolorum tempore.
      </p>
      <div className={styles.galleryGrid}>
        {artist &&
          artist.artworks.map((artwork) => (
            <div className={styles.galleryItem} key={artwork.title}>
              <img src={artwork.artworkUrl} alt={artwork.title} />
              <h3>{artwork.title}</h3>
              <p>{artwork.description}</p>
            </div>
          ))}
        <div className={styles.galleryItem}>One</div>
        <div className={styles.galleryItem}>Two</div>
        <div className={styles.galleryItem}>Three</div>
        <div className={styles.galleryItem}>Four</div>
        <div className={styles.galleryItem}>Five</div>
        <div className={styles.galleryItem}>Six</div>
        <div className={styles.galleryItem}>Seven</div>
        <div className={styles.galleryItem}>Eight</div>
      </div>
    </div>
  );
}

Artworks.Layout = DashboardLayout;
