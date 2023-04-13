import React from "react";
import { Button } from "react-bootstrap";

function AddButton({ onClick, children }) {
  if (children) {
    // console.log(children, onClick);
    return (
      <Button size="sm" variant="primary" onClick={onClick}>
        {children}
      </Button>
    );
  }

  return (
    <Button size="sm" variant="primary" onClick={onClick}>
      New
    </Button>
  );
}

export default AddButton;
