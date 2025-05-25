import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import MoodTracker from "./pages/mood-tracker";
import DataHbsc from "./pages/data-hbsc";
import Navigation from "./components/navigation";
import Home from "./pages/home";
import Footer from "./components/footer";

const App = () => {
  return (
      <Router>
        <Navigation />
          <div className="container mt-4">
            <Routes>
                <Route path="/PNUV" element={<Home />} />
                <Route path="/" element={<Home />} />
              <Route path="/mood-tracker" element={<MoodTracker />} />
              <Route path="/hbsc-data" element={<DataHbsc />} />
            </Routes>
          </div>
        <Footer />
      </Router>
  );
};

export default App;
