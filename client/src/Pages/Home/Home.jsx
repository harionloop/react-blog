import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import axios from "axios";
import "./home.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts");
      setposts(res.data);
    };
    fetchPost();
  }, []);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
