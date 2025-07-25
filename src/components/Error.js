import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops</h1>
      <h1>Somethign went wrong!!!</h1>
      {err.status}:{err.statusText}
    </div>
  );
};

export default Error;
