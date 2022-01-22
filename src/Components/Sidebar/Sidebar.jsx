import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">About Me</span>
        <img
          className="sidebar-img"
          src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt="xyz"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, soluta
          nisi laborum perferendis tempor.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Categories</span>

        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Tech</li>
          <li className="sidebar-list-item">Psychology</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Follow Us</span>

        <ul className="sidebar-social">
          <i className="sidebar-icon fab fa-github-square"></i>
          <i className="sidebar-icon fab fa-linkedin"></i>
          <i className="sidebar-icon fab fa-stack-overflow"></i>
          <i className="sidebar-icon fab fa-instagram-square"></i>
        </ul>
      </div>
    </div>
  );
}
