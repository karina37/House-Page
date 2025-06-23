import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NotFound = () => {
  const iconStyle = {
    width: "60px",       
    height: "60px",
    marginBottom: "15px", // Відступ між зображенням і текстом
  };

  return (
    <div className="container py-5 text-white d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center w-100">
        <img src="/icons/no.png" alt="404" style={iconStyle} />
        <h1 className="display-4 fw-bold text-info mb-3">404</h1>
        <p className="fs-4 mb-4">Сторінку не знайдено</p>

        <div className="mt-4">
          <Link to="/" className="btn btn-outline-info mx-2">
            Повернутися на головну
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;





