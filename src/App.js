import "./App.css";

import { useState } from "react";

export default function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null); // State to track the item being edited
  const [editValue, setEditValue] = useState(""); // State to store the edited value

  const deleteHandler = (itemToDelete) => {
    setItems([...items].filter((item) => item !== itemToDelete));
  };

  const editHandler = (itemToEdit) => {
    setEditItem(itemToEdit);
    setEditValue(itemToEdit);
  };

  const updateHandler = () => {
    setItems(items.map((item) => (item === editItem ? editValue : item)));
    setEditItem(null);
    setEditValue("");
  };

  function clickHandler() {
    if (editItem !== null) {
      updateHandler();
    } else {
      setItems([...items, item]);
      setItem("");
    }
  }
  function changeHandler(e) {
    if (editItem !== null) {
      setEditValue(e.target.value);
    } else {
      setItem(e.target.value);
    }
  }
  return (
    <>
      <h1>Welcome in Todo List</h1>
      <input
        type="text"
        value={editItem !== null ? editValue : item}
        onChange={changeHandler}
      />
      <button onClick={clickHandler}>
        {editItem !== null ? "Update Item" : "Add Item"}
      </button>
      {items.map((item) => (
        <li key={item}>
          {item}
          <br />
          <button onClick={() => deleteHandler(item)}>Delete</button>
          <button onClick={() => editHandler(item)}>Edit</button>
        </li>
      ))}
    </>
  );
}
