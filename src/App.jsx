import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/auth/LoginPage";
import AppLayout from "./components/AppLayout";
import Residents from "./pages/Residents/ResidentPage";
import Program from "./pages/Program/ProgramPage";
import Assesment from "./pages/Assesment/AssesmentPage";
import Reporting from "./pages/Reporting/ReportingPage";
import Medical from "./pages/Medical/MedicalPage";


import NotFoundPage from "./pages/NotFoundPage"; 
import Activities from "./pages/Activities/ActivitiesPage";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
    
        <Route path="/medical" element={<Medical/>}/>
        <Route path="/" element={<Residents />} />
        <Route path="/program" element={<Program />} />
        <Route path="/assesment" element={<Assesment />} />
        <Route path="/reporting" element={<Reporting />} />
        <Route path="/activities" element={<Activities />} />

   
     



      </Route>

    </Routes>
  );
}

export default App;
