import React from 'react'

const Card = (props) => {
  return (
        <div className="d-flex flex-column flex-sm-row justify-content-center rounded fs-1 border border-info my-5 py-5 bg-info-subtle w-50 shadow">
          {props.children}
        </div>
  );
}

export default Card