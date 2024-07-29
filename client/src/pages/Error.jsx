import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import "../styles/Error.css"

const Error = function ErrorPage() {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
      return (
        <div className="errorText">
          <h1>Oops!</h1>
          <h2>{error.status}</h2>
          <p>{error.statusText}</p>
        </div>
      );
    } else {
      return <div>Oops</div>;
    }
}

export default Error;