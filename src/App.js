// import logo from "./logo.svg";
// import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/AuthDetails";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
    <div className="flex">
      <div className="w-3/5">
      <Layout />
      </div>
      <div className="flex-1">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/details" element={<AuthDetails />} />
      </Routes>
      </div> 
    </div>
    </>
  );
}

export default App;
