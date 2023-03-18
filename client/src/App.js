import React from "react";
import "./App.css";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Home from "./components/home";
import Edit from "./components/edit";
import Create from "./components/create";
import Error from "./components/error";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/create" element={<Create />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
