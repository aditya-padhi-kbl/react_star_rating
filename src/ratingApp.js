import React from "react";
import Star from "./star";

class RatingApp extends React.Component {
  ratingHandler = i => {
    this.setState({
      initialRating: i
    });
  };
  state = {
    initialRating: 2
  };
  render() {
    let updatedArray = Array.apply(null, Array(5)).map((_, i) => (
      <Star
        index={i + 1}
        onClick={this.ratingHandler}
        enableRating={i < this.state.initialRating}
      />
    ));
    return <div>{updatedArray}</div>;
  }
}

export default RatingApp;
