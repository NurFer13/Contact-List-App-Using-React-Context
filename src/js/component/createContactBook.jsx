import React from "react";
import useAppContext from "../store/appContext.js";

const CreateContactBook = () => {
  const { store, actions } = useAppContext();

  return (
    <form>
      <div className="mt-5">
        <label
          htmlFor="contactBookName"
          className="form-label d-flex justify-content-center"
        >
          Contact Book
        </label>
        <input
          type="text"
          className="form-control d-flex justify-content-center"
          id="nombreAgenda"
          aria-describedby="nameHelp"
          value={store.nombreAgenda}
          onChange={(e) => actions.setContactBookName(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary d-flex mx-auto mt-3"
        onClick={(e) =>
          actions.handlecreateContactBook(e, store.contactBookName)
        }
      >
        Create Contact Book
      </button>
    </form>
  );
};

export default CreateContactBook;
