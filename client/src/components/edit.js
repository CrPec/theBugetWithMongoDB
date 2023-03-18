import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import item from "./item";
import { showPicker } from "../Utils";
import "../css/edit.css";

export default function Edit() {
  const [form, setForm] = useState({
    type: "",
    value: "",
    date: "",
    desc: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      await fetch(`http://localhost:5000/item/${id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setForm(data);
        })
        .catch((err) => {
          navigate("/error");
        });
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedRecord = {
      type: form.type,
      value: form.value,
      date: form.date,
      desc: form.desc,
    };

    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedRecord),
      headers: {
        "Content-Type": "application/json",
      },
    });

    navigate("/");
  }

  const fnCancel = () => {
    navigate("/");
  };

  // This following section will display the form that takes input from the user to update the data.
  return item({
    title: "Update Record",
    submitText: "Update",
    onSubmit,
    form,
    fnCancel,
    updateForm,
    showPicker,
    error: null,
  });
}
