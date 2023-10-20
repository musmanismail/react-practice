import React, { useReducer, useState } from "react";
import Item from "./Item";
import AlertMessage from "./AlertMessage";

const reducerFunction = (prevState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...prevState, items: [...prevState.items, action.payload] };
    case "REMOVE_ITEM":
      return { ...prevState, items: action.payload };
    case "SHOW_ALERT":
      return { ...prevState, alert: action.payload };
    case "REMOVE_ALERT":
      return { ...prevState, alert: action.payload };

    default:
      throw new Error("Dispatch Type not found");
  }
};

const defaultState = {
  items: [],
  alert: {
    showAlert: false,
    message: "",
    alertClass: "alert-primary",
  },
};

const ItemList = () => {
  const [state, dispatch] = useReducer(reducerFunction, defaultState);
  const [count, setCount] = useState(1);

  const [name, setName] = useState("");

  const handleRemove = (id) => {
    const remainingItems = state.items.filter((item) => item.id != id);

    dispatch({ type: "REMOVE_ITEM", payload: remainingItems });
    dispatch({
      type: "SHOW_ALERT",
      payload: {
        showAlert: true,
        message: "Item Removed Successfully",
        alertClass: "alert-danger",
      },
    });

    setTimeout(() => {
      dispatch({
        type: "REMOVE_ALERT",
        payload: {
          showAlert: false,
          message: "Item Added Successfully",
          alertClass: "alert-danger",
        },
      });
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      dispatch({
        type: "SHOW_ALERT",
        payload: {
          showAlert: true,
          message: "Item Name must be filled",
          alertClass: "alert-warning",
        },
      });

      setTimeout(() => {
        dispatch({
          type: "REMOVE_ALERT",
          payload: {
            showAlert: false,
            message: "Item Added Successfully",
            alertClass: "alert-danger",
          },
        });
      }, 2000);
      return;
    }

    dispatch({
      type: "ADD_ITEM",
      payload: { id: count, name: name },
    });
    setCount((prevValue) => {
      return prevValue + 1;
    });
    setName("");
    dispatch({
      type: "SHOW_ALERT",
      payload: {
        showAlert: true,
        message: "Item Added Successfully",
        alertClass: "alert-primary",
      },
    });

    setTimeout(() => {
      dispatch({
        type: "REMOVE_ALERT",
        payload: {
          showAlert: false,
          message: "Item Added Successfully",
          alertClass: "alert-danger",
        },
      });
    }, 2000);
  };

  return (
    <>
      <div className="row" style={{ marginTop: "2%" }}>
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          {state.alert.showAlert && (
            <AlertMessage
              messageToDisplay={state.alert.message}
              classToAdd={state.alert.alertClass}
            ></AlertMessage>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <input
                type="text"
                value={name}
                className="form-control"
                id="item_name"
                name="name"
                placeholder="Enter Item name"
                onChange={(e) => setName(e.target.value)}
              />
              <button type="submit" className="btn btn-primary mb-2">
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
      <Item items={state.items} handleRemove={handleRemove}></Item>
    </>
  );
};

export default ItemList;
