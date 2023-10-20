import React from "react";
import Item from "./Item";

const ItemList = () => {
  const data = [
    { id: 1, name: "Table" },
    { id: 2, name: "Chair" },
  ];

  return (
    <>
      <div className="row" style={{ marginTop: "2%" }}>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <form className="form">
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder="Password"
              />
              <button type="submit" className="btn btn-primary mb-2">
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
      <Item items={data}></Item>
    </>
  );
};

export default ItemList;
