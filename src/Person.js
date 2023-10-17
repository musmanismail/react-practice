import React from "react";

const Person = ({ detail, handleRemove }) => {
  return (
    <React.Fragment>
      <div className="card" style={{ width: "18rem" }}>
        <img src={detail.imageAddress} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{`${detail.personName} - ${detail.id}`}</h5>
          <p className="card-text">{detail.personBio}</p>
          <a target="_blank" className="btn btn-primary">
            Website
          </a>
          <a className="btn btn-danger" onClick={() => handleRemove(detail.id)}>
            Remove
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Person;
