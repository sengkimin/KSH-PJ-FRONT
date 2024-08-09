import { useEffect, useState } from "react";
import InformationBookIssue from "../../components/InformationBookIssue";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const ViewBookIssue = () => {
    const [data, setData] = useState({});
    const { id } = useParams();
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        // const fetchData
    })
return(
    <div>
        <h1 className="text-3xl font-bold">Book Issue Information</h1>
    </div>
)
};
export default ViewBookIssue;