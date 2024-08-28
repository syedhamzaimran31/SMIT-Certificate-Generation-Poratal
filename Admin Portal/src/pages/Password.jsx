import React, { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";
import { useGlobalState } from "../contextApi/ContextApi";
import { toast } from "sonner";

function Password() {
  const { setIsUserToken } = useGlobalState();
  const [getPassword, setGetPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  let Continue = async () => {
    try {
      if (!getPassword) {
        setError("Password cannot be empty.");
        return;
      }
      setLoading(true);
      const response = await axios.post("http://localhost:8003/login", {
        id: "66a256dc8466535753a954bf",
        password: getPassword,
      });
      if (response.data.status === 200) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
        setIsUserToken(response.data.token);
        navigate("/home");
        window.location.reload();
        toast.success("Signed In Successfully");
      }
    } catch (error) {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            setError("Bad Request. Please check your input.");
            break;
          case 401:
            setError("Unauthorized. Incorrect password.");
            break;
          case 403:
            setError("Forbidden. You do not have access.");
            break;
          case 404:
            setError("Incorrect Password. Please check your inputs.");
            break;
          case 429:
            setError("Too Many Requests. Please try again later.");
            break;
          case 500:
            setError("Incorrect Password. Please check your inputs.");
            break;
          default:
            setError("An unexpected error occurred.");
        }
      } else if (error.request) {
        setError("Network error. Failed to communicate with server.");
      } else {
        setError("Error issuing certificate: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="container">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="col-lg-5 col-md-6 col-sm-12 py-5">
            <div className="mb-4 d-flex justify-content-center mb-5 pb-2">
              <img src={logo} width={160} />
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className={`form-control ${error ? "is-invalid" : ""}`}
                id="password"
                placeholder="Enter your password"
                style={{ boxShadow: "none", outline: "none" }}
                onChange={(e) => {
                  setGetPassword(e.target.value);
                  setError("");
                }}
              />
              <label htmlFor="password">Enter our password</label>
              <div className="invalid-feedback">{error}</div>
            </div>
            <div className="d-grid mt-3">
              <button
                className="btn btn-primary"
                onClick={Continue}
                disabled={loading}
              >
                {loading ? "Loading..." : "Continue"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Password);
