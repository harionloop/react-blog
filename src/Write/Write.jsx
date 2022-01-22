import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
        alt="blog img"
        className="writeImg"
      />

      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }}></input>
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus="true"
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Type your thoughts here..."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
