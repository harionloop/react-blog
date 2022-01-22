import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="post-img"
        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
      />
      <div className="post-info">
        <div className="post-cates">
          <span className="post-cate">Tech</span>
          <span className="post-cate">Science</span>
        </div>
        <span className="post-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          dolorem.
        </span>
        <hr />
        <span className="post-time">just now!</span>
      </div>
      <p className="post-desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maxime
        esse quas, natus totam aut, blanditiis iste hic quaerat eum harum?
        Tempora, placeat, quod magni soluta, odio blanditiis facilis dignissimos
        eaque dolores exercitationem quaerat iure sunt. Culpa magni sed magnam.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maxime
        esse quas, natus totam aut, blanditiis iste hic quaerat eum harum?
        Tempora, placeat, quod magni soluta, odio blanditiis facilis dignissimos
        eaque dolores exercitationem quaerat iure sunt. Culpa magni sed magnam.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maxime
        esse quas, natus totam aut, blanditiis iste hic quaerat eum harum?
        Tempora, placeat, quod magni soluta, odio blanditiis facilis dignissimos
        eaque dolores exercitationem quaerat iure sunt. Culpa magni sed magnam.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur maxime
        esse quas, natus totam aut, blanditiis iste hic quaerat eum harum?
        Tempora, placeat, quod magni soluta, odio blanditiis facilis dignissimos
        eaque dolores exercitationem quaerat iure sunt. Culpa magni sed magnam.
      </p>
    </div>
  );
}
