import React from "react";

const Item = ({ items }) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <ul className="list-group">
            {items.map((item) => {
              return (
                <>
                  <li className="list-group-item">
                    {item.name}
                    <button className="btn btn-warning">Remove</button>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Item;
