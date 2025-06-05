import React from "react";

export default function ProfileCard({ image, title, description, onEdit }) {
  return (
    <div className="user-details">
      <section>
        <h2 className="user-name" id="profileTitle">{title}</h2>
        <p className="user-description" id="profileDescription">{description}</p>
      </section>
      <button
        className="button_secondary"
        id="editProfileButton"
        type="button"
        onClick={onEdit}
      >
        <i className="ri-pencil-line"></i> Edit Profile
      </button>
    </div>
  );
}