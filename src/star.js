import React from "react";

const Star = ({ onClick, index, enableRating }) => {
  console.log(enableRating);
  return (
    <span
      className={`star ${enableRating ? "rate" : ""}`}
      onClick={() => onClick(index)}
    />
  );
};
export default React.memo(Star);
