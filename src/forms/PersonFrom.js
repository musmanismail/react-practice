import React, { useState } from "react";

const PersonFrom = ({ persons, addPersonList }) => {
  const personDefaultAttributes = {
    id: "",
    imageAddress: "",
    personName: "",
    personBio: "",
    personSiteLink: "",
  };

  const [showError, setShowError] = useState(false);

  const [customPerson, setCustomPerson] = useState(personDefaultAttributes);
  const handleChange = (e) => {
    setCustomPerson((prevObject) => {
      return { ...prevObject, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !customPerson.personName ||
      !customPerson.imageAddress ||
      !customPerson.personBio ||
      !customPerson.personSiteLink
    ) {
      setShowError(true);
      return;
    }

    setShowError(false);

    let max_id = 0;
    persons.map((item) => {
      if (item.id > max_id) {
        max_id = item.id;
      }
    });
    customPerson.id = max_id + 1;
    addPersonList(customPerson);
    setCustomPerson(personDefaultAttributes);
  };

  return (
    <>
      {showError && <p style={{ color: "red" }}>Sorry No input is found</p>}

      <form onSubmit={handleSubmit} style={{ marginTop: "15%" }}>
        <div className="form-group">
          <label htmlFor="imageAddress">Image URL</label>
          <input
            type="text"
            className="form-control"
            id="imageAddress"
            name="imageAddress"
            placeholder="Enter Image Address"
            value={customPerson.imageAddress}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="personName">Person Name</label>
          <input
            type="text"
            className="form-control"
            value={customPerson.personName}
            id="personName"
            name="personName"
            placeholder="Enter Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="personBio">Person Bio</label>
          <input
            value={customPerson.personBio}
            type="text"
            className="form-control"
            id="personBio"
            name="personBio"
            placeholder="Enter Person's Bio"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="personSiteLink">Person Website</label>
          <input
            value={customPerson.personSiteLink}
            type="text"
            className="form-control"
            id="personSiteLink"
            name="personSiteLink"
            aria-describedby="emailHelp"
            placeholder="Enter Website"
            onChange={handleChange}
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
