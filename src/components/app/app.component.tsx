// @ts-nocheck
import * as React from "react";
import SearchResultsPage from "../pages/search-results/search-results.component";
import SearchPage from "../pages/search/search.component";

// TODO: Use react-router instead of this
const PseudoRouter = (props) => {
  const {children, childPosition} = props;
  const child = React.Children.toArray(children)[childPosition];

  return (
    <div>
      {child}
    </div>
  );
};

const Route = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

const App: React.FunctionComponent = () => {
  return (
    <PseudoRouter
      childPosition={0}
    >
      <Route
        src={"/results/:id"}
      >
        <SearchResultsPage />
      </Route>
      <Route
        src={"/search"}
      >
        <SearchPage />
      </Route>
    </PseudoRouter>
  );
};

export default App;
