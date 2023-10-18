import React, { useState } from "react";

const PersonFrom = ({ persons, setPersons }) => {
  //   setPersons([]);

  const personDefaultAttributes = {
    id: "",
    imageAddress: "",
    personName: "",
    personBio: "",
    personSiteLink: "",
  };

  //   const [person, setPerson] = useState({});

  const [customPersons, setCustomPersons] = useState([]);
  const [customPerson, setCustomPerson] = useState(personDefaultAttributes);

  const handleSubmit = (e) => {
    e.preventDefault();

    const new_array = customPersons;
    new_array.push(customPerson);
    setCustomPersons(new_array);
    setCustomPerson(personDefaultAttributes);
    console.log("==================");
    console.log(customPersons);
    console.log("==================");
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ marginTop: "15%" }}>
        <div className="form-group">
          <label htmlFor="imageAddress">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="imageAddress"
            placeholder="Enter Image Address"
            value={customPerson.imageAddress}
            onChange={(e) => {
              setCustomPerson((prevObject) => {
                return { ...prevObject, imageAddress: e.target.value };
              });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="personName">Person Name</label>
          <input
            type="text"
            className="form-control"
            value={customPerson.personName}
            id="personName"
            placeholder="Enter Name"
            onChange={(e) => {
              setCustomPerson((prevObject) => {
                return { ...prevObject, personName: e.target.value };
              });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="personBio">Person Bio</label>
          <input
            value={customPerson.personBio}
            type="text"
            className="form-control"
            id="personBio"
            placeholder="Enter Person's Bio"
            onChange={(e) => {
              setCustomPerson((prevObject) => {
                return { ...prevObject, personBio: e.target.value };
              });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="personSiteLink">Person Website</label>
          <input
            value={customPerson.personSiteLink}
            type="text"
            className="form-control"
            id="personSiteLink"
            aria-describedby="emailHelp"
            placeholder="Enter Website"
            onChange={(e) => {
              setCustomPerson((prevObject) => {
                return { ...prevObject, personSiteLink: e.target.value };
              });
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default PersonFrom;
