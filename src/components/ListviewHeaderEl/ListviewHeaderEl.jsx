import React from "react";

const ListviewHeaderEl = (props) => {
  return (
    <>
      <thead className="bg-secondary bg-gradient">
        <tr>
          <th scope="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.handleBtnClick}
            >
              #
            </button>
          </th>
          <th scope="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.handleBtnClick}
            >
              Photo
            </button>
          </th>
          <th scope="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.handleBtnClick}
            >
              Name
            </button>
          </th>
          <th scope="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.handleBtnClick}
            >
              Phone
            </button>
          </th>
          <th scope="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.handleBtnClick}
            >
              Email
            </button>
          </th>
          <th scope="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={props.handleBtnClick}
            >
              DOB
            </button>
          </th>
        </tr>
      </thead>
    </>
  );
};

export default ListviewHeaderEl;
