import React from "react";
import "./PageDescription.css";
import TypistCycle from "../TypistCycle/TypistCycle"

class PageDescription extends React.Component {
  render() {
    const { text } = this.props;
    if (text) {
      return (
        // <h2 className="page-description">
        //   {text}
        // </h2>
        <TypistCycle
          content={[
            'Engineering student',
            'Game developer',
          ]}
          numberOfCycles={-1} // loop indefinitely
          segmentDelay={0.8} // stop for 0.8s at end line
          className="typist-description"
        />
      );
    }
    return null;
  }
}

export default PageDescription;
