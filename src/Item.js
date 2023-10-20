import React from "react";

const Item = ({ items, handleRemove }) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <ul className="list-group">
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <li className="list-group-item">
                    {item.name}
                    <button
                      className="btn btn-warning"
                      style={{ marginLeft: "80%" }}
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Item;
