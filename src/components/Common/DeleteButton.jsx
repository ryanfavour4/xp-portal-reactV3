import React from "react";
import { Button } from "react-bootstrap";

function DeleteButton({ onClick }) {
  return (
    <Button variant="danger" size="sm" onClick={onClick}>
      Delete
    </Button>
  );
}

export default DeleteButton;
