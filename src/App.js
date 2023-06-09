import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

import Footer from "./components/Footer";

function App(props) {
  // console.log(props)
  return (
    <div className='app'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
