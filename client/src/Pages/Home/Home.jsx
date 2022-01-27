import Header from "../../Components/Header/Header";
import Posts from "../../Components/Posts/Posts";
import Sidebar from "../../Components/Sidebar/Sidebar";
import axios from "axios";
import "./home.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setposts] = useState([]);

  const { search } = useLocation();
  console.log(search);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/posts" + search);
      setposts(res.data);
    };
    fetchPost();
  }, [search]);

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
