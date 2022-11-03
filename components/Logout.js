import React, { useEffect } from "react";
import { contextAPI } from "../Context";

const Logout = () => {
  const { changeIsSignedIn } = contextAPI();
  useEffect(() => {
    changeIsSignedIn(false);
  }, []);
  return <></>;
};

export default Logout;
