import React, { useReducer, useState } from "react";
import AlertMessage from "./AlertMessage";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      return {
        ...prevState,
        alert: {
          ...prevState.alert,
          showAlert: true,
          alertClass: "alert-success",
          message: "Name added to list",
        },
        persons: [...prevState.persons, action.payload],
      };
    case "REMOVE_PERSON":
      return {
        ...prevState,
        alert: {
          ...prevState.alert,
          showAlert: true,
          alertClass: "alert-success",
          message: "Person has been removed from list",
        },
        persons: prevState.persons.filter((item) => item.id != action.payload),
      };
    case "REMOVE_ALERT":
      return { ...prevState, alert: { ...prevState.alert, showAlert: false } };
    default:
      return prevState;
  }
};

const initialState = {
  persons: [],
  alert: { showAlert: false, alertClass: "alert-success", message: "" },
};

const People = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(() => {
      return e.target.value;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_PERSON",
      payload: { id: Math.floor(Math.random() * 100), name: name },
    });
    setName("");
    setTimeout(() => {
      removeAlert();
    }, 2000);
  };

  const removeAlert = () => {
    dispatch({ type: "REMOVE_ALERT", payload: false });
  };

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "5%" }}
      >
        {state.alert.showAlert && (
          <AlertMessage
            messageToDisplay={state.alert.message}
            classToAdd={state.alert.alertClass}
          ></AlertMessage>
        )}
      </div>
      <div className="d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center">
            <div className="form-group">
              <input
                className="form-control"
                value={name}
                onChange={handleChange}
                placeholder="Enter Name"
              />
            </div>

            <div className="form-group" style={{ marginLeft: "2px" }}>
              <button className="btn btn-danger" type="submit">
                Add Person
              </button>
            </div>
          </div>
        </form>
      </div>

      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "2%" }}
      >
        <ul className="list-group">
          {state.persons &&
            state.persons.map((item) => {
              return (
                <li className="list-group-item" key={item.id}>
                  {item.name}
                  <button
                    onClick={() => {
                      dispatch({ type: "REMOVE_PERSON", payload: item.id });
                      setTimeout(() => {
                        removeAlert();
                      }, 2000);
                    }}
                    className="btn btn-warning"
                  >
                    Remove
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default People;
