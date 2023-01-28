import React, { useState, useEffect } from "react";
import "./ExperienceList.css";
const ExperienceList = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputdata) {
      alert("please fill the data");
    } else {
      setItems([...items, inputdata]);
      setInputData("");
    }
  };
  return (
    <>
      <div className="view_ptn">
        <div className="form-control mt-5 w-75 text-center ml-180">
          <h1 className="text-center mt-5">See here Experience list 😊</h1>
          <div className="addItems">
            <input
              type="text"
              placeholder="📝 Add New"
              className="form-control"
              value={inputdata}
              onChange={(event) => setInputData(event.target.value)}
            />
            <br />
          </div>
          {/* show Added experience and role  */}
          <div className="showItems">
            {items.map((curElem, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{curElem}</h3>
                </div>
              );
            })}
          </div>
          <button className="btn btn-primary btn-sm mb-2" onClick={addItem}>
            Add More
          </button>
        </div>
      </div>
    </>
  );
};

export default ExperienceList;