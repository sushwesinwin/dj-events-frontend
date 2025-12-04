import Link from "next/link";
import styles from "@/styles/404.module.css";

export default function NotFound() {
  return (
    <div className={styles.error}>
      <h1>404 - Page Not Found</h1>
      <h4>This page does not exist.</h4>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
