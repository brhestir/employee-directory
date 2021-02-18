import React from "react";

const ListviewRowEl = (props) => {
  return (
    <>
      <tr className="bg-light">
        <th>{props.index}</th>
        <td>
          <img src={props.picture.thumbnail} alt={props.name.last} />
        </td>
        <td>{props.name.last + ", " + props.name.first}</td>
        <td>{props.cell}</td>
        <td>{props.email}</td>
        <td>{props.dob.date.substr(0, 10)}</td>
      </tr>
    </>
  );
};

export default ListviewRowEl;
