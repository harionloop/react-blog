import SinglePost from "../../Components/SinglePost/SinglePost";
import Sidebar from "../../Components/Sidebar/Sidebar";

import "./single.css";

export default function SinglePage() {
  return (
    <div className="singlePage">
      <SinglePost />
      <Sidebar />
    </div>
  );
}
