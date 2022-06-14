import React from "react";

function Button(props) {
  // Just add the the bootstrap classes to get the styles you want, no need to add any css to the button tag to style it. 
  return <button className="btn btn-primary">{props.name}</button>;
}

export default Button;
