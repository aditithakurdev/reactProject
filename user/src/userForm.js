import React, { useState } from "react";

function UserForm() {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`User Created:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
