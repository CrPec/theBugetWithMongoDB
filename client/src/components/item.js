import React from "react";

const item = (obj) => {
  const {
    title,
    submitText,
    onSubmit,
    form,
    fnCancel,
    updateForm,
    showPicker,
    error,
  } = obj;
  return (
    <div className="containerDiv">
      <h3>{title}</h3>
      {error ? (
        <div className="error bounce-in-top">
          Please provide a value on each box!
        </div>
      ) : null}
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select
            value={form.type}
            className="form-control"
            id="type"
            onChange={(e) => updateForm({ type: e.target.value })}
          >
            <option value="">Please select a type</option>
            <option value="Incomes">Incomes</option>
            <option value="Expenses">Expenses</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="value">Value</label>
          <input
            type="number"
            className="form-control"
            id="value"
            value={form.value}
            onChange={(e) => updateForm({ value: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={form.date}
            onChange={(e) => updateForm({ date: e.target.value })}
            onClick={(e) => showPicker(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            className="form-control"
            id="desc"
            value={form.desc}
            onChange={(e) => updateForm({ desc: e.target.value })}
          />
        </div>
        <br />

        <div className="form-group buttons">
          <button type="submit" className="button update">
            {submitText}
          </button>
          <button className="button cancel" onClick={fnCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default item;
