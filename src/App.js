import React from "react";
import PersonList from "./PersonList";
import Sum from "./Sum";
import People from "./People";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        {/* <PersonList></PersonList>
        <Sum></Sum> */}
        <People></People>
      </div>
    </React.Fragment>
  );
};

export default App;
