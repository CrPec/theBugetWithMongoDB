import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { formatValue } from "../Utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../css/home.css";

const Record = (props) => (
  <div className="itemContainer">
    <div className="item">
      <div className="title">
        <h4>{props.record.desc}</h4>
      </div>
      <div className="details">
        <div className="date">
          {new Date(props.record.date).toLocaleDateString("ro-RO")}
        </div>
        <div
          className="amount"
          style={{
            color: props.record.type === "Incomes" ? "#7aeeb2" : "#e48989",
          }}
        >
          {props.record.type === "Incomes"
            ? formatValue(props.record.value)
            : formatValue(props.record.value * -1)}
        </div>
      </div>
    </div>
    <div className="actions">
      <FontAwesomeIcon
        icon={faEdit}
        className="edit"
        onClick={() => {
          props.navigateTo(props.record._id);
        }}
      />
      <FontAwesomeIcon
        icon={faTrash}
        className="delete"
        onClick={() => {
          props.deleteRecord(props.record._id);
        }}
      />
    </div>
  </div>
);

export default function Home() {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      await fetch(`http://localhost:5000/item/`)
        .then((response) => response.json())
        .then((data) => setRecords(data))
        .catch((err) => {
          navigate("/error");
        });
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record
  async function deleteRecord(id) {
    await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });

    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
  }

  const navigateTo = (id) => {
    navigate(`/edit/${id}`);
  };

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
          navigateTo={() => navigateTo(record._id)}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div className="containerDiv">
      <h3>Transactions</h3>
      {recordList()}
    </div>
  );
}
