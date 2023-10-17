import React, { useState } from "react";
import Person from "./Person";
import { personList } from "./data/persons";

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
      <div className="row" style={{ margin: "2%" }}>
        {persons.map((person) => {
          return (
            <>
              <div
                key={person.id}
                className="col-sm"
                style={{ margin: "0.5%" }}
              >
                <Person detail={person} handleRemove={handleRemove}></Person>
              </div>
            </>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default PersonList;
