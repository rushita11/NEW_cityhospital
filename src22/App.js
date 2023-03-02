import { Route, Switch } from "react-router-dom";
import Layout from "./admin/components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./containers/About/About";
import Login from "./containers/Auth/Login";
import Home from "./containers/Home/Home";
import Medicines from "./admin/containers/Medicines/Medicines";
import Doctor from "./admin/containers/Medicines/Doctor";
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import Counter from "./containers/Counter/Counter";

function App() {
  const store = configureStore()
  
  return (
    <>
      {/* <Header />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/about"} component={Login} />
        <Route exact path={"/medicines"} component={Medicines} />
      </Switch>

      <Footer/> */}

      <Provider store={store}>
        <Layout>
          <Switch>
            <Route exact path={"/medicines"} component={Medicines} />
            <Route exact path={"/doctor"} component={Doctor} />
            <Route exact path={"/counter"} component={Counter} />
          </Switch>
        </Layout>
      </Provider>

    </>
  );
}

export default App;
