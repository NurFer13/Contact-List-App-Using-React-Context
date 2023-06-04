// //FETCH DATA FROM API

// fetch('https://assets.breatheco.de/apis/fake/contact/')
// .then(response => {
// if (!response.ok) {
//    throw Error(response.statusText);
// }
// // Read the response as json.
//  return response.json();
//  })
// .then(responseAsJson => {
// // Do stuff with the JSONified response
//  console.log(responseAsJson);
//  })
// .catch(error => {
//     console.log('Looks like there was a problem: \n', error);
// });

// //CREATE CONTACT BOOK      
// export const CREATE_CONTACT_BOOK = (ContactBook) => {
// return (fetch('https://assets.breatheco.de/apis/fake/contact/',{
// method: "POST",
// body: JSON.stringify(ContactBook),
// headers: {
//     "Content-type": "application/json",
// }
// })
// .then ((resp) => {
// console.log(resp.ok); // will be true if the response is successfull
// return resp; //(returns promise) will try to parse the result as json as return a promise that you can .then for results
// })
// .then((data) => {
// //here is were your code should start after the fetch finishes
// console.log(data); //this will print on the console the exact object received from the server
// })
// .catch(error => {console.log(error);}));  //Error handling
// };


// //ADD NEW CONTACT
// export const POST_CONTACT = (newContact) => {
//     return (fetch('https://assets.breatheco.de/apis/fake/contact/', {
//         method: "POST",
//         body: JSON.stringify(newContact),
//         headers: {
//             "Content-type": "application/json",
//         }
//         })
//         .then ((resp) => {
//         console.log(resp.status); // will be true if the response is successfull
//         return resp.json(); //(returns promise) will try to parse the result as json as return a promise that you can .then for results
//         })
//         .then((data) => {
//         //here is were your code should start after the fetch finishes
//         console.log(data); //this will print on the console the exact object received from the server
//         return data   
//      })
//         .catch(error => {console.log(error);}));  //Error handling
//         };



// //UPDATE CONTACT_BOOK
// export const updateContactBook = (newContact, contact_id) => {
//     return (fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`, {
//         method: "PUT",
//         body: JSON.stringify(newContact),
//         headers: {
//           "Content-Type": "application/json"
//         }
//     })
//     .then(resp => {
//         console.log(resp.status); // the status code = 200 or code = 400 etc.
//         return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
//     })
//     .then(data => {
//         //here is were your code should start after the fetch finishes
//         console.log(data); //this will print on the console the exact object received from the server
//         return data
//     })
//     .catch(error => {console.log(error);}));  //Error handling
// };


// //GET ALL THE CONTACTS
// export const GET_ALL_CONTACT_BOOK = (setState,agenda_slug) => {
//     return(fetch('https://assets.breatheco.de/apis/fake/contact/contact-book' + agenda_slug,{
//         method: "GET",
//         headers: {
//             "Content-type": "application/json"
//         }
//     })
//     .then (resp => {
//         console.log(resp.ok);
//         return resp.json();
//     })
//     .then (data => {
//         console.log(data);
//         setState(data);
//     })
//     .catch(error => {console.log(error);}));
// };


// //GET CONTACT

// export const GET_CONTACT = (contact_id) =>{
// return (fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`,{
//     method:"GET",
//     headers: {
//         "Content-type": "application/json"
//     }
// })
// .then (resp => {
//     console.log(resp.ok);
//     return resp.json();
// })
// .then (data => {
//     console.log(data);
//     return data;
// })
// .catch (error => {console.log(error);}));

// };

// //DELETE CONTACT

// export const DELETE_CONTACT = (contact_id) => {
//     return fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`,{
//         method:"DELETE",
//         headers: {
//             "Content-type": "application/json"
//         }
//     })
//     .then (resp => {
//         console.log(resp.status); //the status code = 200 or code = 400 etc.
//         return resp.json(); //(returns a promise) will try to parse the result as json as return a promise
//     })
//     .then (data => {
//         //here is where your code should start after the fetch finishes
//         console.log(data);  //this will print on the console the exact object received from the server
//     })
// };

// //DELETE ALL CONTACT BOOK

// export const DELETE_All_CONTACT_BOOK = (agenda_slug) => {
//     return (fetch(`https://assets.breatheco.de/apis/fake/contact/contact-book/${agenda_slug}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json"
//       }
//       })
//       .then(resp => {
//         console.log(resp.ok); // will be true if the response is successfull
//         console.log(resp.status); // the status code = 200 or code = 400 etc.
//         return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
//     })
//     .then(data => {
//         //here is were your code should start after the fetch finishes
//         console.log(data); //this will print on the console the exact object received from the server
//     })
//     .catch(error => {console.log(error);}));  //Error handling
// };