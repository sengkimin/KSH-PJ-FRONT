import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/core/DashboardPage";
// import UserAccountPage from "./pages/userAccount/UserAccountPage";
import BookCatalogPage from "./pages/bookCatalog/BookCatalogPage";
import BookIssuePage from "./pages/bookIssue/BookIssuePage";
import LoginPage from "./pages/auth/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
// import UserAccountInfoPage from "./pages/userAccount/UserAccountInfoPage";
// import CreateUserAccountPage from "./pages/userAccount/CreateUserAccountPage";
import AppLayout from "./components/AppLayout";
import MemberPage from "./pages/member/MemberPage";
import UserAccountListPage from "./pages/userAcc/UserAcounts";
import View from "./pages/bookCatalog/BookcataloginfoPage";
import BookForm from "./pages/bookCatalog/CreatebookcatalogPage";

function App() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/user-account">
          <Route index element={<UserAccountListPage />} />
          {/* <Route path="/book-catalog:id" element={<BookCatalogPage />} /> */}
        </Route>
        <Route path="/book-catalog" element={<BookCatalogPage />} />
        <Route path="/book-issue" element={<BookIssuePage />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/book/:id" element={<View />} />
        <Route path="/book-create" element={<BookForm />} />
      </Route>
    </Routes>
  );
}

export default App;
