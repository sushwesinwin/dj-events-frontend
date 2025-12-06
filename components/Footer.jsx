import Link from "next/link";
import styles from "@/styles/Footer.module.css";

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
