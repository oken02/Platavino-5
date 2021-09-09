import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const loading = (
  <div style={{ height: "200px", lineHeight: "200px", textAlign: "center" }}>
    authenticating
  </div>
);

const Protector = ({ children, evaluate }) => {
  const user = useSelector((state) => state.user);

  if (!user.validated) {
    return loading;
  } else {
    const pathToRedirect = evaluate(user);

    if (pathToRedirect) {
      return <Redirect to={pathToRedirect} />;
    } else {
      return <div>{children}</div>;
    }
  }
};

export default Protector;
