import React from "react";

// Use a bootstrap input element without worrying about class names
// or manually wrap the input with a form-group div
// All of the props passed to this component are spread onto the input element
function Input(props) {
  return (
    <div className="input-group input-group-lg">
      <input className="form-control" type="text" {...props} />
    </div>
  );
}

export default Input;
