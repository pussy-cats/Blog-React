import React from "react";

const welcome = {
  title: "Halo, selamat datang!",
  message:
    "Ini adalah Blog Pribadi milik Amardika Mahdi Pradana. Disini akan disediakan materi tentang Web Development.",
};

const jumbotron = {
  backgroundSize: "cover",
  backgroundImage:
    "url(" +
    "https://images.unsplash.com/photo-1516956906165-7586dfbd9f5b" +
    ")",
  backgroundAttachment: "fixed",
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  height: "500px",
};

function Jumbotron() {
  return (
    <div>
      <div
        className="jumbotron jumbotron-fluid text-center text-white"
        style={jumbotron}
      >
        <div className="container">
          <h1 className="display-3" style={{ marginTop: "100px" }}>
            {welcome.title}
          </h1>
          <p className="lead">{welcome.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
