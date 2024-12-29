import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = '*Please enter your name';
    if (!formData.address.trim()) newErrors.address = '*Please enter your Address';
    if (!formData.mobile.match(/^\d{10}$/)) newErrors.mobile = '*Mobile number must be 10 digits.';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = '*Invalid email';
    if (!formData.gender) newErrors.gender = '*Please select a gender.';
    if (!formData.dob) newErrors.dob = '*Please enter your Date of Birth';
    if (!formData.course) newErrors.course = '*Please select a course.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (validate()) {
      alert(`Data stored successfully:\n${JSON.stringify(formData, null, 2)}`);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    });
    setErrors({});
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-dark text-danger" style={{ minHeight: '100vh' }}>
      <div className="container bg-info p-5 rounded shadow" style={{ maxWidth: '700px' }}>
        <h1 className="text-center text-dark mb-4 fw-bold">Student Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="form-label fw-bold">
              Name
            </label>
            <input
              onChange={handleChange}
              value={formData.name}
              name="name"
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name"
            />
            {errors.name && <div className="text-danger">{errors.name}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="form-label fw-bold">
              Address
            </label>
            <input
              onChange={handleChange}
              value={formData.address}
              name="address"
              type="text"
              id="address"
              className="form-control"
              placeholder="Enter your address"
            />
            {errors.address && <div className="text-danger">{errors.address}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="mobile" className="form-label fw-bold">
              Mobile
            </label>
            <input
              onChange={handleChange}
              value={formData.mobile}
              name="mobile"
              type="tel"
              id="mobile"
              className="form-control"
              placeholder="Enter your mobile number"
            />
            {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              onChange={handleChange}
              value={formData.email}
              name="email"
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
            />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="gender" className="form-label fw-bold">
              Gender
            </label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  onChange={handleChange}
                  checked={formData.gender === 'male'}
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  onChange={handleChange}
                  checked={formData.gender === 'female'}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
            {errors.gender && <div className="text-danger">{errors.gender}</div>}
          </div>

          <div className="mb-4">
            <label htmlFor="dob" className="form-label fw-bold">
              Date of Birth
            </label>
            <input
              onChange={handleChange}
              value={formData.dob}
              name="dob"
              type="date"
              id="dob"
              className="form-control"
            />
            {errors.dob && <div className="text-danger">{errors.dob}</div>}
          </div>

          <div className="mb-4 d-flex flex-column">
            <label htmlFor="course" className="form-label fw-bold">
              Course
            </label>
            <select
              onChange={handleChange}
              value={formData.course}
              name="course"
              id="course"
              className="form-select"
            >
              <option value="">Select a course</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Biology">Biology</option>
              <option value="Commerce">Commerce</option>
              <option value="Humanities">Humanities</option>
            </select>
            {errors.course && <div className="text-danger">{errors.course}</div>}
          </div>

          <div className="d-flex">
            <button type="submit" className="btn btn-dark w-100">
              Register
            </button>
            <button
              type="button"
              className="btn btn-danger w-100 ms-5"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
