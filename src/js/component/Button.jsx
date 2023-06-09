import React from "react";
import { Link } from "react-router-dom";
import useAppContext from "../store/AppContext.js";

const Button = () => {
  
  const {store, actions} = useAppContext();

  return (
    <div className="d-flex justify-content-between mt-4">
      <button className="btn btn-danger fw-semibold text-white text-decoration-none mb-3" onClick={actions.handleDeleteContactBook}>
       Delete Contact Book
      </button>
      <button className="btn btn-success mb-3">
        <Link className="fw-semibold text-white text-decoration-none" to="/formulario">
          Add contact
        </Link>
      </button>
    </div>
  );
};

export default Button;