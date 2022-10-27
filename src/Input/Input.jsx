import { useState } from "react";
//import { v4 as uuidv4 } from "uuid";
import "./Input.css";
import Item from "./Item/Item";
const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [editedItemIndex, setEditedItemIndex] = useState();
  const [eiditedItemValue, setEiditedItemValue] = useState();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    const filteredItems = list.filter((item) => item.includes(inputValue));
    setFilteredList(filteredItems);
  };

  const handleValueAdd = () => {
    const updatedList = [...list]; // list.slice()
    updatedList.push(inputValue);
    setList(updatedList);
    setInputValue("");
  };

  const handleSearch = () => {
    const filteredItems = list.filter((item) => item.includes(inputValue));
    setFilteredList(filteredItems);
  };

  const handleReset = () => {
    setFilteredList([]);
    setInputValue("");
  };

  const handleItemEdit = (index) => {
    setEditedItemIndex(index);
    setEiditedItemValue(list[index]);
  };

  const handleItemDelete = (itemIndex) => {
    //we make list item delete
    const updatedList = list.filter((_, index) => index !== itemIndex);
    setList(updatedList);
  };
  const handleItemValueChange = (event) => {
    setEiditedItemValue(event.target.value);
  };

  const handleItemCancel = () => {
    setEditedItemIndex(undefined);
  };
  const handleItemSave = () => {
    const updatedList = [...list];
    updatedList[editedItemIndex] = eiditedItemValue;
    setList(updatedList);
    setEditedItemIndex(undefined);
  };
  return (
    <div className="Input">
      <div className="container">
        <h1> List App</h1>
        <div className="listForm">
          <input onChange={handleInputChange} value={inputValue} />
          <button onClick={handleValueAdd}>Add</button>
          <button onClick={handleSearch}>Search</button>
          <button onClick={handleReset}>Reset</button>
        </div>
        <div className="allList">
          <div className={filteredList.length > 0 ? "filter" : "list"}>
            {filteredList.length > 0
              ? filteredList.map((item, index) => (
                <Item key={index} item={item} />
              ))
              : list.map((item, index) => {
                return index === editedItemIndex ? (
                  <div className="editField">
                    <input
                      value={eiditedItemValue}
                      onChange={handleItemValueChange}

                    />
                    <button onClick={handleItemSave} className="btnSave">Save</button>
                    <button onClick={handleItemCancel} className="btnCancel">Cancel</button>
                  </div>
                ) : (
                  <div className="singleList">
                    {/* {index + 1}. */}
                    <Item
                      key={item}
                      item={item}
                      index={index}
                      handleEdit={handleItemEdit}
                      handleDelete={handleItemDelete}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
