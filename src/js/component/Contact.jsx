import React from "react";
import useAppContext from "../store/AppContext.js";
import ContactCard from "./ContactCard.jsx";
import CreateContactBook from "./CreateContactBook.jsx";

const Contact = () => {

  const {store, actions} =useAppContext();

  return (
    <div className="d-flex justify-content-center">
      {!store.contactList
        ? <CreateContactBook />
        : store.contactList.length !== 0 
          ? <ul className="list-group">{store.contactBook.map((item,index) => <ContactCard item={item} key={index} id={item.id} />)}</ul>
          : <img src="https://gifdb.com/images/high/walking-bear-loading-walk-mjmobhdpwc1toy09.gif" />
        }
    </div>
  );
};

export default Contact;