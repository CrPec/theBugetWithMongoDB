import { useState } from "react";
import { useNavigate } from "react-router";
import { showPicker } from "../Utils";
import item from "./item";
import "../css/create.css";

export default function Create() {
  const emptyObj = { type: "", value: "", date: "", desc: "" };
  const [form, setForm] = useState(emptyObj);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // This method will update the state properties.
  const updateForm = (value) => {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  };

  const fnCancel = () => {
    setForm(emptyObj);
    navigate("/");
  };

  const checkDataBeforeSending = (obj) => {
    const defaultKeys = Object.keys(emptyObj);
    const newKeys = Object.keys(obj);
    if (defaultKeys.length !== newKeys.length) {
      return false;
    } else {
      for (const key of newKeys) {
        if (obj[key] === emptyObj[key]) {
          return false;
        }
      }
    }
    return true;
  };

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newItem = { ...form };

    if (checkDataBeforeSending(newItem)) {
      await fetch("http://localhost:5000/item/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      })
        .then((response) => response.json())
        .then((data) => {
          setError(false);
          setForm(emptyObj);
          navigate("/");
        })
        .catch((err) => {
          navigate("/error");
        });
    } else {
      setError(true);
    }
  }

  // This following section will display the form that takes the input from the user.
  return item({
    title: "Add New Item",
    submitText: "Create",
    onSubmit,
    form,
    fnCancel,
    updateForm,
    showPicker,
    error,
  });
}
