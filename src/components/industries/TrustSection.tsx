import styles from '@/styles/industries/trustSection.module.css';

export default function TrustSection() {

    const points = [

        'Advanced Industrial Engineering',

        'Customized Manufacturing Solutions',

        'Reliable Technical Support',

        'High Quality Standards',

        'Export Capability',

        'Experienced Engineering Team'
    ];

    return (

        <section className={styles.section}>

            <div className={styles.overlay} />

            <div className={styles.content}>

                <span>
                    WHY INDUSTRIES TRUST US
                </span>

                <h2>
                    Engineering Excellence Backed By Experience
                </h2>

                <div className={styles.grid}>

                    {points.map((point, index) => (

                        <div
                            key={index}
                            className={styles.item}
                        >

                            <span className={styles.icon}>
                                ✓
                            </span>

                            {point}

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}