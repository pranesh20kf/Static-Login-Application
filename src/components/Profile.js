import React, { useState } from 'react';

export default function Profile() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    email: '',
    gender: '',
    college: '',
    photo: null,
  });

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file change (for photo upload)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the form data to the console
    console.log('Form Data:', formData);
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold">Profile Page</h2>
      <p className="mt-4">Fill out your profile details below:</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        {/* Name */}
        <div>
          <label className="block text-lg font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Age */}
        <div>
          <label className="block text-lg font-medium">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Contact Number */}
        <div>
          <label className="block text-lg font-medium">Contact No:</label>
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-lg font-medium">Gender:</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* College Name */}
        <div>
          <label className="block text-lg font-medium">College Name:</label>
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            className="mt-1 p-2 border rounded w-full"
            required
          />
        </div>

        {/* Photo */}
        <div>
          <label className="block text-lg font-medium">Photo:</label>
          <input
            type="file"
            name="photo"
            onChange={handleFileChange}
            className="mt-1 p-2 border rounded w-full"
            accept="image/*"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-black text-white p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
