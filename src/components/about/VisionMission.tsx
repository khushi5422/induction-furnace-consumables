import styles from '@/styles/aboutus/About.module.css';

export default function VisionMission() {

  return (
    <section className={styles.vmSection}>

      <div className={styles.heading}>

        <span>
          OUR FOUNDATION
        </span>

        <h2>
          Vision That Drives
          Industrial Innovation
        </h2>

      </div>

      <div className={styles.vmGrid}>

        <div className={styles.vmCard}>

          <div className={styles.icon}>
            🚀
          </div>

          <h3>
            Our Vision
          </h3>

          <p>
            To become a globally trusted industrial engineering
            and manufacturing partner delivering innovative,
            reliable and sustainable industrial solutions.
          </p>

        </div>

        <div className={styles.vmCard}>

          <div className={styles.icon}>
            ⚙️
          </div>

          <h3>
            Our Mission
          </h3>

          <p>
            To provide advanced induction furnace systems,
            automation products and engineering excellence
            while maintaining quality and long-term trust.
          </p>

        </div>

      </div>

    </section>
  );
}