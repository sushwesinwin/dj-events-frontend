import styles from "@/app/src/styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <p>Copy right &copy; DJ Events {new Date().getFullYear()}</p>
        <Link href='/about'>
            About This Project
        </Link>
    </footer>
  )
}
