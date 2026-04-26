import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Toast Imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const navigate = useNavigate(); // ⭐ React Router navigation

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // ⭐ LOGIN API
        const res = await axios.post("https://zerodha-clone-gaig.onrender.com/auth/login", {
          email: formData.email,
          password: formData.password,
        });

        // ⭐ Save Token
        localStorage.setItem("token", res.data.token);

        // console.log("Saved Token:", localStorage.getItem("token"));

        toast.success("Login Successful");

        // ⭐ Navigate to Dashboard
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        // ⭐ SIGNUP API
        await axios.post("https://zerodha-clone-gaig.onrender.com/auth/signup", formData);

        toast.success("Account Created Successfully");

        setIsLogin(true);

        setFormData({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (err) {
      console.log(err);

      if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
  <>
    <ToastContainer position="top-right" autoClose={2000} />

    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
      <div style={{ width: "380px" }}>
        <h3 className="text-center mb-4">
          {isLogin ? "Login to Continue" : "Create your Account"}
        </h3>

        <div className="d-flex mb-4">
          <button
            type="button"
            className={`btn ${isLogin ? "btn-primary" : "btn-outline-primary"} w-50 mx-2`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            type="button"
            className={`btn ${!isLogin ? "btn-primary" : "btn-outline-primary"} w-50`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              className="form-control mb-3"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            className="form-control mb-3"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="form-control mb-4"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button className="btn btn-primary w-100 py-2">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  </>
);
}

export default Signup;
