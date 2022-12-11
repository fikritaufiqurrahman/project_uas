import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Penduduk from "./Penduduk";
import NavbarComponent from "../components/NavbarComponent.";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Login />
            </>
          }
        />
        <Route path="/login" element={<></>} />
        <Route
          path="/dashboard"
          element={
            <>
              <Dashboard />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <Dashboard />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
