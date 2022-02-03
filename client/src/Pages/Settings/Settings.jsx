import "./settings.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useContext, useState } from "react";
import { Context } from "../../Context/Context";
import axios from "axios";
export default function Settings() {
  const { user, dispatch } = useContext(Context);
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [success, setSuccess] = useState(false);
  const PF = "http://localhost:5000/images/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updateUser = {
      username,
      email,
      password,
      userId: user._id,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      updateUser.photo = fileName;
      try {
        await axios.put("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.put(`/users/${user._id}`, updateUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS ", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILED" });
      console.log(err);
    }
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt="user pfp"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "Green", textAlign: "center", marginTop: "14px" }}
            >
              Update successful! Please Reload the page!
            </span>
          )}
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
