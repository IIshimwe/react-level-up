import React from "react";

export const Job = ({ salary, position, company, name }) => {
  return (
    <div>
      <h3>
        My name is {name}, I work at {company}, position is {position} and my
        salary is {salary}
      </h3>
    </div>
  );
};