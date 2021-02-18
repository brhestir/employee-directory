import React from "react";

const ListviewHeaderEl = (props) => {
  return (
    <>
      <thead className="bg-secondary bg-gradient">
        <tr>
          <th scope="col">
            <button type="button" className="btn btn-outline-dark">
              Photo
            </button>
          </th>
          <th scope="col">
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={props.handleBtnClick}
            >
              Name
            </button>
          </th>
          <th scope="col">
            <button type="button" className="btn btn-outline-dark">
              Phone
            </button>
          </th>
          <th scope="col">
            <button type="button" className="btn btn-outline-dark">
              Email
            </button>
          </th>
          <th scope="col">
            <button type="button" className="btn btn-outline-dark">
              DOB
            </button>
          </th>
        </tr>
      </thead>
    </>
  );
};

export default ListviewHeaderEl;
