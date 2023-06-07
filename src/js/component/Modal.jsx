//Ask the user for confirmation before deleting

import React from "react";
import useAppContext from "../store/AppContext.js";

const Modal = (props) => {

  const {store, actions} = useAppContext();

  return (
    <div className="modal fade" id={`modal-${props.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Are you sure?</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>All data will be lost.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
            Return to configuration
            </button>
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => actions.handleClickDeleteContact(props.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;