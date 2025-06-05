import React from "react";
import ProfileCard from "./ProfileCard";
import NewPostButton from "./NewPostButton";

export default function ProfileSection({ profile, onEdit, onNewPost }) {
  return (
    <section className="text-container">
      <div className="user-profile">
        <img
          src={profile.image}
          alt="profile picture"
          className="profile-pic"
          id="profileImage"
        />
        <div className="user-details">
          <section>
            <h2 className="user-name" id="profileTitle">{profile.title}</h2>
            <p className="user-description" id="profileDescription">{profile.description}</p>
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
      </div>
      <NewPostButton onClick={onNewPost} />
    </section>
  );
}