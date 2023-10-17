import React from "react";

const Card = (props) => {
  return (
    <div className="d-flex flex-column flex-sm-row justify-content-center rounded fs-1 border border-info py-4 px-3 bg-info-subtle shadow">
      {props.children}
    </div>
  );
};

export default Card;
