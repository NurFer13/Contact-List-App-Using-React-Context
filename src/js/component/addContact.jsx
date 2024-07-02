import React from "react";
import { useNavigate } from "react-router";
import useAppContext from "../store/appContext.js";

const AddContact = () => {
  const navigate = useNavigate();

  const { store, actions } = useAppContext();

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
          onChange={(e) => actions.setFullName(e.target.value)}
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
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            actions.handleClickSave(
              e,
              store.fullName,
              store.email,
              store.phone,
              store.address
            );
            navigate("/");
          }}
        >
          Save contact
        </button>
        <button
          className="col-2 btn btn-danger mt-3"
          onClick={(e) => {
            actions.handleHomeAndReset(e);
            navigate("/");
          }}
        >
          Return to contact list
        </button>
      </div>
    </form>
  );
};

export default AddContact;
