import React, { useState, useEffect } from "react";
import ImageUpload from "./ImageUpload";

export default function ProfileModal({ isOpen, onClose, onSubmit, initialProfile }) {
  const [title, setTitle] = useState(initialProfile.title || "");
  const [description, setDescription] = useState(initialProfile.description || "");
  const [imageData, setImageData] = useState(initialProfile.image || "");

  useEffect(() => {
    setTitle(initialProfile.title || "");
    setDescription(initialProfile.description || "");
    setImageData(initialProfile.image || "");
  }, [initialProfile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, imageData });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay active">
      <div className="modal-content">
        <button onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <ImageUpload onImageChange={setImageData} />
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
            required
          />
          <button type="submit">Save Changes</button>
        </form>
      </div>
    </div>
  );
}