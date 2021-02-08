import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Header from "./components/Header";
// import addData from "./functions/addData";
// import posts from "./functions/posts";

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/upload" component={Upload} />
        <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
};

export default App;
