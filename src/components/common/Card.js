import React from "react";

function Card(props) {
  return (
    <div className="col-sm-3" style={{ marginBottom: "30px" }}>
      <div class="card text-center">
        <div class="card-body">
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1593369758024-00212a1a928f"
            alt=""
          />
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.content}</p>
          <a href="/" class="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
