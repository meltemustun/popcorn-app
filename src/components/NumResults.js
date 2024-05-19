import React from "react";

export default function NumResults({ length }) {
  return (
    <p className="num-results">
      Found <strong> {length} </strong>results
    </p>
  );
}
