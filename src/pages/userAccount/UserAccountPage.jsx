import { Link } from "react-router-dom";
import TabGroup from "../../components/TabGroup";

const UserAccountPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">User Account</h1>
      <div>
        <Link to="/user-account/1">User 1</Link>
        <Link to="/user-account/2">User 2</Link>
        <Link to="/user-account/new">New User</Link>
      </div>
      <div>
        <TabGroup />
      </div>
    </div>
  );
};

export default UserAccountPage;
