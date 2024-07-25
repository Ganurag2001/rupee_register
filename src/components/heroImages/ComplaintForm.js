import React, { useState } from "react";
import "./ComplaintForm.css"; // Ensure the path is correct based on your file structure
// import ImageUpload from "./ImageUpload";
// import VoiceRecorder from "./VoiceRecorder";

function ComplaintForm() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    id: "",
    location: "",
    title: "",
    description: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement what happens when the form is submitted
    console.log(formData);
    alert("Complaint Submitted!");
  };

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const handleTitleChange = (event) => {
    const input = event.target.value;
    const wordCount = input.split(/\s+/).filter(Boolean).length; // Split by whitespace and filter out empty strings

    if (wordCount > 1000) {
      setTitleError("The title must not exceed 1000 words.");
    } else {
      setTitleError("");
    }

    setTitle(input); // Update the title regardless of error to allow user to edit freely
  };

  // Form JSX
  return (
    <>
      <form>
        <div className="form-group">
          {/* <label for="inputName">Name</label> */}
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Full Name"
          />
        </div>

        <div className="form-group">
          {/* <label for="inputMobile">Mobile</label> */}
          <input
            type="text"
            className="form-control"
            id="inputMobile"
            placeholder="Mobile Number"
          />
        </div>

        <div className="form-group">
          {/* <label for="inputEmail">Email</label> */}
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email"
          />
        </div>

        <div className="form-group">
          {/* <label for="inputLocation">Location</label> */}
          <input
            type="text"
            className="form-control"
            id="inputLocation"
            placeholder="Location"
          />
        </div>

        <div className="form-group">
          {/* <label htmlFor="inputTitle">Title of the Complaint</label> */}
          <input
            type="text"
            className="form-control"
            id="inputTitle"
            placeholder="Title of the Complaint"
            value={title}
            onChange={handleTitleChange}
          />
          {titleError && (
            <div className="alert alert-danger" role="alert">
              {titleError}
            </div>
          )}
        </div>

        <div className="form-group">
          <label for="inputDescription">Description</label>
          <textarea
            className="form-control"
            id="inputDescription"
            placeholder="Description of the Complaint"
          ></textarea>

          {/* <ImageUpload />
          <br />
          <VoiceRecorder />
          <br /> */}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default ComplaintForm;
