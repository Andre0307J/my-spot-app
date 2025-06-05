import React, { useState, useEffect } from "react";

export default function Card({ id, imgSrc, imgAlt, description, onImageClick }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`liked-${id}`);
    setLiked(saved === "true");
  }, [id]);

  const handleHeartClick = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    localStorage.setItem(`liked-${id}`, newLiked ? "true" : "false");
  };

  return (
    <article className="card">
      <div className="image-container">
        <img
          src={imgSrc}
          alt={description}
          onClick={() => onImageClick(imgSrc, description)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="card-content">
        <p>{description}</p>
        <i
          className={`heart-icon ${liked ? "ri-heart-fill liked" : "ri-heart-line"}`}
          onClick={handleHeartClick}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
    </article>
  );
}