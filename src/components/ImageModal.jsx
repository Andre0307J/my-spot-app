import React from "react";

export default function ImageModal({ open, imgSrc, imgAlt, onClose }) {
  if (!open) return null;
  return (
    <div className="image-modal active" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button onClick={onClose}>X</button>
        <img src={imgSrc} alt={imgAlt} />
        <h2>{imgAlt}</h2>
      </div>
    </div>
  );
}