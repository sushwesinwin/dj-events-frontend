"use client";

import { useState } from "react";
import styles from "@/styles/Form.module.css";

export default function AddForm() {
  const [values, setValues] = useState({
    name: "",
    performers: "",
    venue: "",
    address: "",
    date: "",
    time: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(values);
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
