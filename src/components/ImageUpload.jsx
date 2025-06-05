import React, { useRef, useState } from "react";

export default function ImageUpload({ onImageChange }) {
  const [fileName, setFileName] = useState("");
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setError("");
    if (file) {
      setFileName(file.name);

      if (!file.type.startsWith("image/")) {
        setError("Please select an image file");
        setPreview(null);
        onImageChange(null);
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        setPreview(event.target.result);
        onImageChange(event.target.result); // Pass image data URL up if needed
      };
      reader.readAsDataURL(file);
    } else {
      setFileName("");
      setPreview(null);
      onImageChange(null);
    }
  };

  const resetInput = () => {
    fileInputRef.current.value = "";
    setFileName("");
    setPreview(null);
    setError("");
    onImageChange(null);
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        id="imageUpload"
        accept="image/*"
      />
      {fileName && <span id="fileName">{fileName}</span>}
      {!fileName && <span id="uploadText">Choose an image...</span>}
      {error && <div style={{ color: "red" }}>{error}</div>}
      {preview && (
        <div>
          <img
            id="imagePreview"
            src={preview}
            alt="Preview"
            style={{ display: "block", maxWidth: "200px", marginTop: "1rem" }}
          />
          <button type="button" onClick={resetInput}>
            Remove Image
          </button>
        </div>
      )}
    </div>
  );
}
