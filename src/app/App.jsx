import { BrowserRouter } from "react-router-dom";
import MuiTheme from "./MuiTheme";
import Router from "./Router";
import TvShowsProvider from "../contexts/TvShowsContext";

const App = () => {
  return (
    <MuiTheme>
      <TvShowsProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </TvShowsProvider>
    </MuiTheme>
  );
};

export default App;
