import React from "react";
import classNames from "classnames";
import Particles from 'react-particles-js'
import "./MainHeader.css";

import config from "../../../data/SiteConfig";
import partConfig from "../../../data/particleConfig"

class MainHeader extends React.Component {
  render() {
    const { children, cover } = this.props;

    const classes = classNames("main-header", this.props.className, {
      "no-cover": !cover
    });

    const getStyle = () => {
      if (cover) {
        return { backgroundImage: `url("${cover}")` };
      }
      return null;
    };

    return (
      <header className={classes} style={getStyle()}>
        <Particles
          params={
            partConfig
          }
          style={{
            width: '100%',
            position: 'absolute',
          }} />
        {children}
      </header>
    );
  }
}

export default MainHeader;
