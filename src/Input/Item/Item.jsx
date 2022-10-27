import { useEffect } from "react";
import "./Item.css";

const Item = ({ item, index, handleEdit, handleDelete }) => {
  useEffect(() => {
    return () => console.log(`${item} has been umounted`);
  }, []);
  return (
    <div className="item-container">
      <div className="item">{item}</div>
      <button onClick={() => handleEdit(index)}>Edit</button>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  );
};

export default Item;
