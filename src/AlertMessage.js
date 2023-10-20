import React from "react";

const AlertMessage = ({ messageToDisplay, classToAdd }) => {
  return (
    <div className={`alert ${classToAdd}`} role="alert">
      {messageToDisplay}
    </div>
  );
};

export default AlertMessage;
