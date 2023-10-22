import React, { useState } from "react";
import Person from "./Person";
import { personList } from "./data/persons";
import PersonFrom from "./forms/PersonFrom";
import NavBar from "./NavBar";

const PersonList = () => {
  const [persons, setPersons] = useState(personList);

  const handleRemove = (idToRemove) => {
    const newPersonList = persons.filter((item) => item.id !== idToRemove);
    setPersons((previousPeson) => {
      return newPersonList;
    });
  };

  const addPersonList = (personSingle) => {
    setPersons((prevArray) => {
      return [...prevArray, personSingle];
    });
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-2">
          <PersonFrom
            persons={persons}
            addPersonList={addPersonList}
          ></PersonFrom>
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
