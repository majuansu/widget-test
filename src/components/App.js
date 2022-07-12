import "./App.css";
import React from "react";
import Videos from "./Videos";
import Photos from "./Photos";
import Wikipedia from "./Wikipedia";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const App = () => {
  return (
    <div>
      {/* <Videos /> */}
      {/* <Photos /> */}
      {/* <Wikipedia /> */}
      {/* <Translation /> */}
      <Header />
      <Route route="/">
        <Photos />
      </Route>

      <Route route="/videos">
        <Videos />
      </Route>

      <Route route="/translate">
        <Translate />
      </Route>

      <Route route="/wikipedia">
        <Wikipedia />
      </Route>
    </div>
  );
};

export default App;
