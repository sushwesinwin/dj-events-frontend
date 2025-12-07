"use client";

import { useState } from "react";
import styles from "@/styles/Form.module.css";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function AddForm() {
  const router = useRouter();
  const [values, setValues] = useState({
    name: "",
    performers: "",
    venue: "",
    address: "",
    date: "",
    time: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      toast.error("Please fill in all fields");
      return;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      const errorData = await res.json();
      toast.error(errorData.message || "Something Went Wrong");
    } else {
      const evt = await res.json();
      router.push(`/events/${evt.slug}`);
      toast.success("Event submitted successfully!");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Define all form fields configuration
  const formFields = [
    { name: "name", label: "Event Name", type: "text", isTextarea: false },
    {
      name: "performers",
      label: "Performers",
      type: "text",
      isTextarea: false,
    },
    { name: "venue", label: "Venue", type: "text", isTextarea: false },
    { name: "address", label: "Address", type: "text", isTextarea: false },
    { name: "date", label: "Date", type: "date", isTextarea: false },
    { name: "time", label: "Time", type: "text", isTextarea: false },
    {
      name: "description",
      label: "Description",
      type: "text",
      isTextarea: true,
    },
  ];

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.grid}>
        {formFields.map((field) => (
          <div
            key={field.name}
            className={field.isTextarea ? styles.fullWidth : ""}
          >
            <label htmlFor={field.name}>{field.label}</label>
            {field.isTextarea ? (
              <textarea
                className={styles.textarea}
                id={field.name}
                name={field.name}
                value={values[field.name as keyof typeof values]}
                onChange={handleInputChange}
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={values[field.name as keyof typeof values]}
                onChange={handleInputChange}
              />
            )}
          </div>
        ))}
      </div>
      <input type="submit" value="Add Event" className="btn" />
    </form>
  );
}
