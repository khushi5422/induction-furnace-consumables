import Image from "next/image";
import CountUp from "react-countup";
import styles from "@/styles/home/globalpresence.module.css";

const countries = [
  { name: "United Arab Emirates", code: "ae" },
  { name: "Saudi Arabia", code: "sa" },
  { name: "Turkey", code: "tr" },
  { name: "South Africa", code: "za" },
  { name: "Kenya", code: "ke" },
  { name: "Bangladesh", code: "bd" },
  { name: "Nepal", code: "np" },
  { name: "Sri Lanka", code: "lk" },
  { name: "Vietnam", code: "vn" },
  { name: "Thailand", code: "th" },
  { name: "Nigeria", code: "ng" },
  { name: "Oman", code: "om" },
];

const stats = [
  {
    number: 18,
    suffix: "+",
    label: "Years Experience",
  },
  {
    number: 15,
    suffix: "+",
    label: "Export Countries",
  },
  {
    number: 500,
    suffix: "+",
    label: "Industrial Clients",
  },
  {
    text: "ISO",
    label: "Certified Products",
  },
];

export default function GlobalPresence() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Heading */}

        <div className={styles.heading}>
          <span>GLOBAL PRESENCE</span>

          <h2>
            Delivering Engineering Excellence Worldwide
          </h2>

          <p>
            Trusted by industries across Asia, Middle East and Africa
            for premium furnace equipment, automation systems and
            industrial engineering solutions.
          </p>
        </div>

        {/* Main Grid */}

        <div className={styles.grid}>
          {/* LEFT IMAGE */}

          <div className={styles.imageArea}>
            <Image
              src="/globalpresence.png"
              alt="Global Presence"
              fill
              priority={false}
              className={styles.image}
            />

            {/* Floating Card */}

            <div className={styles.floatingCard}>
              <h3>18+</h3>

              <span>
                Years Export Excellence
              </span>

              <p>
                Delivering precision engineered industrial products
                worldwide with trusted quality and reliability.
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <h3 className={styles.exportTitle}>
              Major Export Destinations
            </h3>

            <div className={styles.countryGrid}>
              {countries.map((country) => (
                <div
                  key={country.name}
                  className={styles.countryCard}
                >
                  <span
                    className={`fi fi-${country.code} ${styles.flag}`}></span>

                  <span className={styles.countryName}>
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}

        <div className={styles.statsRow}>
          {stats.map((item, index) => (
            <div
              key={index}
              className={styles.statCard}
            >
              <h3 className={styles.counter}>
                {item.text ? (
                  item.text
                ) : (
                  <CountUp
                    start={0}
                    end={item.number!}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                    suffix={item.suffix}
                  />
                )}
              </h3>

              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}