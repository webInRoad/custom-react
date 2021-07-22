import React from "react";
import Context from "./Context";

const withRouter = Component => props => {
  return (
    <Context.Consumer>
      {context => {
        return <Component {...props} {...context} />;
      }}
    </Context.Consumer>
  );
};

export default withRouter;
