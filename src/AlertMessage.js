import React from "react";

const AlertMessage = ({ messageToDisplay, classToAdd }) => {
  return (
    <div className="alert alert-primary" role="alert">
      {messageToDisplay}
    </div>
  );
};

export default AlertMessage;
