import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = () => {
    if (image) {
      navigate("/chat", { state: { uploadedImage: image } });
    } else {
      alert("Please upload an image!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-5">
        <h3 className="mb-3 text-center">Upload an Image</h3>
        <input type="file" onChange={handleImageChange} className="form-control mb-3" />
        <button className="btn btn-primary w-100" onClick={handleSubmit}>
          Proceed to Chat
        </button>
      </div>
    </div>
  );
};

export default UploadPage;
