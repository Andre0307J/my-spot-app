import React, { useState } from "react";
import ImageUpload from "./ImageUpload";

export default function NewPostModal({ isOpen, onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageData, setImageData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, imageData });
    setTitle("");
    setDescription("");
    setImageData(null);
    onClose();
  };

  if (!isOpen) return null; // This line is correct!

  return (
    <div className="modal-overlay active">
      <div className="modal-content">
        <button onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <ImageUpload onImageChange={setImageData} />
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Post Title"
            required
          />
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
            required
          />
          <button type="submit">Add Post</button>
        </form>
      </div>
    </div>
  );
}