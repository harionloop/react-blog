import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-title">
        <span className="header-title-sm">React & Node</span>
        <span className="header-title-lg">Blogs</span>
        <span></span>
      </div>
      <img
        className="header-img"
        src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt=""
      />
    </div>
  );
}
