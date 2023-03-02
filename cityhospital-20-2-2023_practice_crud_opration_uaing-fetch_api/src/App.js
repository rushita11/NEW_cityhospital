// import logo from './logo.svg';
// import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './container/Home';
import Appointment from './container/Appointment';
// import Doctor from './container/Doctor';
import Department from './container/Department';
import Contact from './container/Contact';
import About from './container/About';
import Signup from "./container/auth/Signup";
import Login from "./container/auth/Login";
import Forgetpass from "./container/auth/Forgetpass";
import Medicin from "./container/Medicin";
import Form from "./container/Form";
import Medicins from "./admin/Container/Medicine/Medicins";
import Layout from "./admin/Component/Layout/Layout";
import Doctor from "./admin/Container/Doctor/Doctor";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Do from './admin/Container/Doctor/Do'
import { configureStore } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./container/Counter";
import Employee from "./admin/Container/Employee/Employee";
function App() {
  const store = configureStore();

  return (
    <>
      {/* <Header />
      <Switch>
        <PublicRoute exact path={"/forgetpass"} restricted={true} component={Forgetpass} />
        <PublicRoute exact path={"/"} component={Home} />
        <PublicRoute exact path={"/about"} component={About} />
        <PublicRoute exact path={"/doctor"} component={Doctor} />
        <PublicRoute exact path={"/contact"} component={Contact} />
        <PublicRoute exact path={"/department"} component={Department} />
        <PublicRoute exact path={"/signup"} restricted={true} component={Signup} />
        <PublicRoute exact path={"/login"} restricted={true} component={Login} />
        <PrivateRoute exact path={"/medicin"} component={Medicin} />
      </Switch>
      <Footer /> */}
      <Provider store={store}>
        <Layout>
          <Switch>
            <Route exact path={"/medicins"} component={Medicins} />
            <Route exact path={"/doctor"} component={Do} />
            <Route exact path={"/employee"} component={Employee} />
          </Switch>
        </Layout>
      </Provider>
    </>
  );
}

export default App;
