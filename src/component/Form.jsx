import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Form() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      fullName: '',
      cardNumber: '',
      gender: '',
      bloodGlucose: '',
      medication: '',
      age: '',
      date: '',
      contact: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setErrorMessage(''); // Clear error message when the user makes changes
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:9000/api/patient', formData);
        alert(response.data);
        navigate('/patient');
      } catch (error) {
        if (error.response && error.response.status === 400) {
          // Patient with the same cardNumber already exists
          setErrorMessage('Patient with the same cardNumber already exists');
        } else {
          alert('Error submitting form: ' + error.message);
        }
        // Handle other errors, show a message, etc.
      }
    };
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div class="row">
          <div class="col-lg-6 col-12">
            <input
              type="text"
              name="fullName"
              id="fullName"
              class="form-control"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div class="col-lg-6 col-12">
            <input
              type="text"
              name="cardNumber"
              id="cardNumber"
              class="form-control"
              placeholder="Card number"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div class="col-lg-6 col-12">
            <select name="gender" id="gender"  required class="form-control" 
              value={formData.gender}
              onChange={handleChange}>
              <option>Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div class="col-lg-6 col-12">
            <input
              type="text"
              name="bloodGlucose"
              id="bloodGlucose"
              class="form-control"
              placeholder="Blood Glucose"
              value={formData.bloodGlucose}
              onChange={handleChange}
              required
            />
          </div>

        

          <div class="col-lg-6 col-12">
            <input
              type="text"
              name="medication"
              id="medication"
              class="form-control"
              placeholder="Medication"
              value={formData.medication}
              onChange={handleChange}
              required
            />
          </div>

          <div class="col-lg-6 col-12">
            <input
              type="text"
              name="age"
              id="age"
              value={formData.age}
              onChange={handleChange}
              class="form-control"
              placeholder="Age"
              required
            />
          </div>


          <div class="col-lg-6 col-12">
            <input
              type="date"
              name="date"
              id="date"
              class="form-control"
              placeholder="Date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>


          <div class="col-lg-6 col-12">
            <input
              type="text"
              name="contact"
              id="contact"
              class="form-control"
              placeholder="Contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>

          {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}

          <div class="col-lg-3 col-md-4 col-6 mx-auto">
            <button type="submit" class="form-control" id="submit-button">
              Document
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
