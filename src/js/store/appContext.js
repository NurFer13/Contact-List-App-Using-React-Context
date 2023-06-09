import React, { useState, useEffect,useContext,createContext } from "react";
import {createContactBook,postContact,updateContactBook,getAllContactBook,getContact,deleteContact,deleteAllContactBook} from "./actions.js"


const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [contactBookName, setcontactBookName] = useState("Super ContactBook");
    const [contactBook, setContactBook] = useState([]);


    useEffect(() => {getAllContactBook(setContactBook, contactBookName)}, [])

    const Reset = () => {

        setFullName("");
        setEmail("");
        setPhone("");
        setAddress("");

    }

    const handleHomeAndReset = (e) => {

        e.preventDefault();

        Reset();

    }

	const handleClickSave = (e, fullName, email, phone, address) => {
        e.preventDefault();

        const newObj = {
            full_name: fullName,
            email: email,
            agenda_slug: contactBookName,
            address: address,
            phone: phone,
        }

        postContact(newObj)
            .then(() => {getAllContactBook(setContactBook, contactBookName); Reset();});

	}

    const handleClickDeleteContact = (itemID) => {

       deleteAllContactBook(itemID)
            .then(() => getAllContactBook(setContactBook, contactBookName));

	}

    const handleClickUpdate = (e, contact, id) => {
        e.preventDefault();

        const newObj2 = {
            full_name: contact.fullNameame,
            email: contact.email,
            agenda_slug: contactBookName,
            address: contact.address,
            phone: contact.phone,
        }

        updateContactBook(newObj2, id)
            .then(() => {getAllContactBook(setContactBook, contactBookName); Reset();});

	}

    const handleDeleteContactBook = () => {

        deleteAllContactBook(contactBookName)
            .then(() => setContactBook(false))

    }

    const handleCreateContactBook = (e, newContactBook) => {
        e.preventDefault();

        setcontactBookName(newContactBook)

        // Object to create new contact book
        const objCreateContactBook = {
            full_name: "Dave Bradley",
            email: "dave@gmail.com",
            agenda_slug: contactBookName,  // new contact book name
            address:"47568 NW 34ST, 33434 FL, USA",
            phone:"7864445566"
        }

        createContactBook(objCreateContactBook)
            .then(() => getAllContactBook(setContactBook, contactBookName));

    }

    const store = {
        fullName,
        email,
        phone,
        address,
        contactBook,
        contactBookName,
    };
    
    const actions = {
        setFullName,
        setEmail,
        setPhone,
        setAddress,
        setcontactBookName,
        handleClickSave,
        handleClickDeleteContact,
        handleDeleteContactBook,
        handleClickUpdate,
        handleCreateContactBook,
        handleHomeAndReset,
    };

    return (
        <AppContext.Provider value={{store, actions}}>
            {children}
        </AppContext.Provider>
    );
}

const useAppContext = () => useContext(AppContext);

export default useAppContext;














// import getState from "./flux.js";

// // Don't change, here is where we initialize our context, by default it's just going to be null.
// export const Context = React.createContext(null);

// // This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// // https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
// const injectContext = PassedComponent => {
// 	const StoreWrapper = props => {
// 		//this will be passed as the contenxt value
// 		const [state, setState] = useState(
// 			getState({
// 				getStore: () => state.store,
// 				getActions: () => state.actions,
// 				setStore: updatedStore =>
// 					setState({
// 						store: Object.assign(state.store, updatedStore),
// 						actions: { ...state.actions }
// 					})
// 			})
// 		);

// 		useEffect(() => {
// 			/**
// 			 * EDIT THIS!
// 			 * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
// 			 * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
// 			 * store, instead use actions, like this:
// 			 *
// 			 * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
// 			 *
// 			 **/
// 		}, []);

// 		// The initial value for the context is not null anymore, but the current state of this component,
// 		// the context will now have a getStore, getActions and setStore functions available, because they were declared
// 		// on the state of this component
// 		return (
// 			<Context.Provider value={state}>
// 				<PassedComponent {...props} />
// 			</Context.Provider>
// 		);
// 	};
// 	return StoreWrapper;
// };

// export default injectContext;
