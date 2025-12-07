import AddForm from "@/components/AddForm";
import Link from "next/link";

export const metadata = {
  title: "Add Event",
  description: "Add a new DJ event",
};

export default function AddEventsPage() {
  return (
    <div>
      <Link href={{pathname: "/events"}}>{"<"}Go Back</Link>
      <h1>Add Events</h1>
      <AddForm />
    </div>
  );
}
