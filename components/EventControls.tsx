"use client";

import Link from "next/link";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import styles from "@/styles/Event.module.css";

export default function EventControls({ eventId }: { eventId: string }) {
  const deleteEvent = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Prevent navigation if we want to handle it here
    console.log("delete");
  };

  return (
    <div className={styles.controls}>
      <Link href={{pathname: `/events/edit/${eventId}`}}>
        <FaPencilAlt /> Edit Event
      </Link>
      <Link
        href={{pathname: `/events/delete/${eventId}`}}
        className={styles.delete}
        onClick={deleteEvent}
      >
        <FaTimes /> Delete Event
      </Link>
    </div>
  );
}
