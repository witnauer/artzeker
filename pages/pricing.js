import styles from '../styles/Pricing.module.css';

export default function Pricing() {
  return (
    <div className="inner-container">
      <h1>Pricing</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos
        aspernatur illum libero ab voluptates, accusamus corrupti voluptas
        optio, repudiandae laudantium minima minus, aut repellat architecto!.
      </p>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2>Student</h2>
          <h3 className="price">$10 month / $100 year</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aperiam
            quasi in animi consequuntur, error saepe pariatur accusamus dolores
            ipsa atque sint deleniti. Quidem asperiores ipsum debitis nihil non
            tempora! Consectetur quia eligendi natus sint vero fugit ducimus
            corporis, nam distinctio excepturi accusantium molestiae, ipsam
            animi, soluta quasi delectus beatae.
          </p>
          <a href="" className={styles.subBtn}>
            Student Plan
          </a>
        </div>
        <div className={styles.card}>
          <h2>Pro</h2>
          <h3 className="price">$15 month / $150 year</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aperiam
            quasi in animi consequuntur, error saepe pariatur accusamus dolores
            ipsa atque sint deleniti.
          </p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              tenetur autem in vitae libero ab.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              harum.
            </li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus.
            </li>
          </ul>
          <a href="" className={styles.subBtn}>
            Pro Plan
          </a>
        </div>
        <div className={styles.card}>
          <h2>Master</h2>
          <h3 className="price">$40 month / $450 year</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aperiam
            quasi in animi consequuntur, error saepe pariatur accusamus.
          </p>
          <ul className={styles.featureList}>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              tenetur autem in vitae libero ab.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              harum.
            </li>
            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              tenetur autem in vitae libero ab.
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              harum.
            </li>
          </ul>
          <a href="" className={styles.subBtn}>
            Master Plan
          </a>
        </div>
      </div>
    </div>
  );
}
