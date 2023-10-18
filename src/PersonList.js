import React, { useState } from "react";
import Person from "./Person";
import { personList } from "./data/persons";
import PersonFrom from "./forms/PersonFrom";

const PersonList = () => {
  const [persons, setPersons] = useState(personList);

  const handleRemove = (idToRemove) => {
    const newPersonList = persons.filter((item) => item.id !== idToRemove);
    setPersons((previousPeson) => {
      return newPersonList;
    });
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-2">
          <PersonFrom persons={persons} setPersons={setPersons}></PersonFrom>
        </div>
      </div>
      <hr style={{ color: "red" }} />
      <div className="row" style={{ margin: "2%" }}>
        {persons.map((person) => {
          return (
            <div key={person.id} className="col-sm" style={{ margin: "0.5%" }}>
              <Person detail={person} handleRemove={handleRemove}></Person>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default PersonList;
