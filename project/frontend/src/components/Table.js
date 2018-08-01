import React from "react";
import PropTypes from "prop-types";
// Using an external package to handle the keys
import key from "weak-key";

// The table to be rendered with all of the data from the Django server/MySQL database
const Table = ({ data }) => {
  // If there is no data don't render the table, if there is data render it with the correct amount of rows/columns
  !data.length ? (
    <p>Nothing to show.</p>
  ) : (
    <div className="column">
      <h2 className="subtitle">
        Showing <strong>{data.length} items.</strong>
      </h2>
      <table className="table is-striped">
        <thead>
          <tr>
            {Object.entries(data[0].map(el => {
              <th key={key.(el)}>{el[0]}</th>
            }))}
          </tr>
        </thead>
        <tbody>
          {data.map(el => {
            <tr key={el.id}>
              {Object.entries(el).map(el => {
                <td key={key.el}>{el[1]}</td>
              })}
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
  Table.PropTypes = {
    data: PropTypes.array.isRequired
  };
};

export default Table;
