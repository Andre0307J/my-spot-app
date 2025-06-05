import React from "react";

export default function NewPostButton({ onClick }) {
  return (
    <button
      className="button_large"
      type="button"
      id="newPostButton"
      onClick={onClick}
    >
      <i className="ri-add-line"></i> New Post
    </button>
  );
}