import React from "react";

const SearchForm = (props) => {
  return (
    <div>
      <form className="bg-primary p-2">
        <input
          type="text"
          className="form-control"
          id="searchByName"
          placeholder="Enter last name to search..."
          onChange={props.onChange}
        ></input>
      </form>
    </div>
  );
};

export default SearchForm;
