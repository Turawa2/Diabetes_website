import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";

const Patient = () => {
  const navigate = useNavigate();

  const [patient, setPatient] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:9000/api/getPatient");
      setPatient(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    margin: "20px",
  };

  const thTdStyle = {
    border: "1px solid #dddddd",
    textAlign: "left",
    padding: "8px",
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light fixed-top shadow-lg">
        <div class="container">
          <a class="navbar-brand mx-auto d-lg-none" href="/">
            Halee Care
            <strong class="d-block">Diabetes Specialist</strong>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <a class="navbar-brand d-none d-lg-block" href="/">
                Halee Care
                <strong class="d-block">Patient List</strong>
              </a>
            </ul>
          </div>
        </div>
      </nav>

      <br />
      <br />
      <section class="hero" id="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12">
              <br />
              <br />
              <input
                type="search"
                name="search"
                id="search"
                class="form-control"
                placeholder="Search Patient....."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thTdStyle}>S/N</th>
                  <th style={thTdStyle}>Full name</th>
                  <th style={thTdStyle}>Card number</th>
                  <th style={thTdStyle}>Gender</th>
                  <th style={thTdStyle}>Blood Glucose</th>
                  <th style={thTdStyle}>Date</th>
                  <th style={thTdStyle}>Medication</th>
                  <th style={thTdStyle}>Age</th>
                  <th style={thTdStyle}>Contact</th>
                </tr>
              </thead>
              <tbody>
                {patient
                  .filter((patients) =>
                    Object.values(patients).some(
                      (value) =>
                        typeof value === "string" &&
                        value.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                  )
                  .map((patients, index) => (
                    <tr key={index}>
                      <td style={thTdStyle}>{index + 1}</td>
                      <td style={thTdStyle}>{patients.fullname}</td>
                      <td style={thTdStyle}>{patients.card_number}</td>
                      <td style={thTdStyle}>{patients.gender}</td>
                      <td style={thTdStyle}>{patients.blood_glucose}</td>
                      <td style={thTdStyle}>{patients.date}</td>
                      <td style={thTdStyle}>{patients.medication}</td>
                      <td style={thTdStyle}>{patients.age}</td>
                      <td style={thTdStyle}>{patients.contact}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Patient;
