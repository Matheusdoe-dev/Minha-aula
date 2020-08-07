import React from "react";
// routes
import Routes from "./routes";
// styles
import Colors from "./styles/settings/colors";
import Gaps from "./styles/settings/gaps";
import Normalize from "./styles/generic/normalize";
import Reset from "./styles/generic/reset";
import Elements from "./styles/base/elements";

const App = () => {
  return (
    <>
      <Colors />
      <Gaps />
      <Normalize />
      <Reset />
      <Elements />

      <Routes />
    </>
  );
};

export default App;
