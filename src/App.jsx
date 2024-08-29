import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/core/DashboardPage";
import LoginPage from "./pages/auth/LoginPage";
import AppLayout from "./components/AppLayout";
import Residents from "./pages/Residents/ResidentPage";
import Program from "./pages/Program/ProgramPage";
import Assesment from "./pages/Assesment/AssesmentPage";
import Reporting from "./pages/Reporting/ReportingPage";
import ResidentInfo from "./pages/Residents/ResidentInfo";
import NotFoundPage from "./pages/NotFoundPage"; 
import Activities from "./pages/Activities/ActivitiesPage";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/residents" element={<Residents />} />
        <Route path="/residents/:id" element={<ResidentInfo />} />
        <Route path="/program" element={<Program />} />
        <Route path="/assesment" element={<Assesment />} />
        <Route path="/reporting" element={<Reporting />} />
        <Route path="/activities" element={<Activities />} />

   
     



      </Route>

    </Routes>
  );
}

export default App;
