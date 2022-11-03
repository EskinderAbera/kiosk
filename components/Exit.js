import React, { BackHandler } from "react-native";
import { useEffect } from "react";
import Home from "./Home";
import { contextAPI } from "../Context";
const Exit = () => {
  const { changeIsSignedIn } = contextAPI();
  useEffect(() => {
    changeIsSignedIn(false);
  }, []);

  BackHandler.exitApp();
  return <Home />;
};

export default Exit;
