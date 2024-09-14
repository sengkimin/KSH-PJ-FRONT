
import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/auth/LoginPage";
import AppLayout from "./components/AppLayout";
import Residents from "./pages/Residents/ResidentPage";
import ResidentBoxInfo from "./components/ResidentBoxInfo";
import Program from "./pages/Program/ProgramPage";
import Assesment from "./pages/Assesment/AssesmentPage";
import Reporting from "./pages/Reporting/ReportingPage";
import Medical from "./pages/Medical/MedicalPage";
import NotFoundPage from "./pages/NotFoundPage"; 
import Activities from "./pages/Activities/ActivitiesPage";
import PrivateRoute from "./pages/auth/PrivateRoute"; 
import ResidentInfo from "./pages/Residents/ResidentInfoPage";


function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        {/* Admin: Can access all pages */}
        <Route path="/" element={<PrivateRoute allowedRoles={['Authenticated', 'Public', 'team-leader']}><Residents /></PrivateRoute>} />
        <Route path="/residentinfo/:id" element={<PrivateRoute allowedRoles={['Authenticated', 'Public', 'team-leader']}><ResidentInfo/></PrivateRoute>}/>
        <Route path="/program" element={<PrivateRoute allowedRoles={['Authenticated', 'Public', 'team-leader']}><Program /></PrivateRoute>} />
        <Route path="/assesment" element={<PrivateRoute allowedRoles={['Authenticated', 'Public']}><Assesment /></PrivateRoute>} />
        <Route path="/reporting" element={<PrivateRoute allowedRoles={['Authenticated']}><Reporting /></PrivateRoute>} />
        <Route path="/medical" element={<PrivateRoute allowedRoles={['Authenticated', 'Public']}><Medical /></PrivateRoute>} />
        <Route path="/activities" element={<PrivateRoute allowedRoles={['Authenticated']}><Activities /></PrivateRoute>} />
      </Route>
    </Routes>
  );
}

export default App;