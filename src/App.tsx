import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes } from "./Routes";
import { getSkillsRequest } from "./store/requests/getSkillsRequest";
import { getStackRequest } from "./store/requests/getStack";
import { getWorkRequest } from "./store/requests/getWork";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorkRequest());
    dispatch(getStackRequest());
    dispatch(getSkillsRequest());
  }, [dispatch]);
  return <Routes />;
}

export default App;
