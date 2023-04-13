import React from "react";
import { Button } from "react-bootstrap";

function EditButton({ onClick }) {
  return (
    <Button variant="primary" size="sm" onClick={onClick}>
      Edit
    </Button>
  );
}

export default EditButton;
