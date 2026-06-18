import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/error404.module.css";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { HiOutlineViewGrid } from "react-icons/hi";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | Fieldman Group</title>
        <meta
          name="description"
          content="The page you are looking for could not be found."
        />
      </Head>

      <section className={styles.errorPage}>

        {/* MAIN CONTENT */}

        <div className={styles.errorContainer}>
          {/* LEFT */}

          <div className={styles.leftContent}>
            <span className={styles.eyebrow}>
              INDUSTRIAL ERROR PAGE
            </span>

            <h1>404</h1>

            <h2>
              Page <span>Not</span> Found
            </h2>

            <div className={styles.redLine}></div>

            <p>
              The page you are looking for doesn’t exist
              or has been moved to another location.
            </p>

            <div className={styles.actions}>
              <Link href="/" className={styles.primaryBtn}>
                <FaHome />
                Back to Home
              </Link>

              <Link href="/products" className={styles.secondaryBtn}>
                <HiOutlineViewGrid />
                Explore Products
              </Link>
            </div>
          </div>

          {/* RIGHT */}

          <div className={styles.rightContent}>

  <div className={styles.errorImageWrap}>

    <Image
      src="/error.png"
      alt="404 Illustration"
      fill
      priority
      className={styles.errorImage}
    />

  </div>

</div>
        </div>

        {/* FOOTER */}

        <div className={styles.bottomBar}>
          <p>
            © 2026 Fieldman Group of Industries. All rights reserved.
          </p>

          <div className={styles.footerLinks}>
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Use</Link>
          </div>
        </div>
      </section>
    </>
  );
}