import React from "react";

// Function component is just like a javascript function. It may or maynot accept
// any argument

// Function component which accepts no arguments
const Student = () => {
  return <p>Hello Siddhant</p>;
};

// Function component which accepts argument
// These components accepts arguments in the key value value which are stored
// in argument called 'props'. We can acces the value by using props.key
// (props.name in our case)
const Student_Functional = (props) => {
  return <p>From Functional Component: Hello <b>{props.name}</b></p>
};

export default Student_Functional;
