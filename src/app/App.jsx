
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import AppRoutes from "./AppRoutes";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
<Router>
  <AppRoutes/>
</Router>
    </>
  );
}

export default App;