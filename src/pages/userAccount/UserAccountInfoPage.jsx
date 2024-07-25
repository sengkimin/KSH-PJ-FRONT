import { useParams } from "react-router-dom";

const UserAccountInfoPage = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">User Account Info {id}</h1>
    </div>
  );
};

export default UserAccountInfoPage;
