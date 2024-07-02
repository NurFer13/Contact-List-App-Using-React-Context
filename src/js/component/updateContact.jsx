import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllContactBook } from "../store/actions.js";
import useAppContext from "../store/appContext.js";
import ModalUpdate from "./modalUpdate.jsx";

const updateContact = () => {
  const { store, actions } = useAppContext();

  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    getAllContactBook(params.theid).then((data) => {
      actions.setName(data.full_name);
      actions.setEmail(data.email);
      actions.setPhone(data.phone);
      actions.setAddress(data.address);
    });
  }, []);

  return (
    <form>
      <legend className="text-center fs-2 fw-bold">Add new contact</legend>
      <div className="mb-3">
        <label htmlFor="FullName" className="form-label">
          Full name
        </label>
        <input
          type="text"
          className="form-control"
          id="FullName"
          placeholder="Full name"
          value={store.name}
          onChange={(e) => actions.setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="Email"
          placeholder="Enter email"
          value={store.email}
          onChange={(e) => actions.setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Phone" className="form-label">
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="Phone"
          placeholder="Enter phone"
          value={store.phone}
          onChange={(e) => actions.setPhone(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="Address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="Address"
          placeholder="Enter address"
          value={store.address}
          onChange={(e) => actions.setAddress(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={`#updateModal-${params.theid}`}
        >
          Save contact
        </button>
        <ModalUpdate
          objContact={{
            name: store.fullName,
            email: store.email,
            phone: store.phone,
            address: store.address,
          }}
          id={params.theid}
        />
        <button
          className="col-2 btn btn-danger mt-3"
          onClick={(e) => {
            actions.handleHomeAndReset(e);
            navigate("/");
          }}
        >
          Return to contacts
        </button>
      </div>
    </form>
  );
};

export default updateContact;
