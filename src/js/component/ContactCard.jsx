import React,{useState,useEffect,useContext} from "react";
import { Link } from "react-router-dom";


 export const ContactCard = (props) => {

    return (
        <div>
            <div className="container-fluid ms-2">
            <div className="row p-5">
                <div className="col-md-12 d-flex justify-content-end">
                    <button className=" add-contact btn btn-success">
                        <Link to="/add-contact" style={{ color: 'white' }}>Add a New Contact</Link>
                    </button>
                </div>
            </div>
            <div className=" contact row d-flex justify-content-center w-100 bg-custom mb-4">
                <div className="col-12 col-md-8 col-lg-6 w-100 border">
                    <ul className="contact-details">
                                    <div className="row border-bottom py-3">
                                        <div className="col-2">
                                            <img className="img-thumbnail" src="https://tse2.mm.bing.net/th?id=OIP.ncOCV5LVCL8j70Edjgyn6QHaGy&pid=Api" />
                                        </div>
                                        <div className="col-8">
                                            <h3 className="mb-3">{props.item.full_name}</h3>
                                            <p className="text-white"><i className="fas fa-map-marker-alt text-secondary"></i><span className="text-dark ms-3">{props.item.address}</span></p>
                                            <p className="text-white"><i className="fas fa-at text-secondary"></i><span className="text-dark ms-3"> {props.item.email}</span></p>
                                            <p className="text-white"><i className="fas fa-phone text-secondary"></i><span className="text-dark ms-3">{props.item.phone}</span></p>
                                        </div>
                                        <div className="col-2 d-flex align-items-center justify-content-end">
                                            <button
                                                className="btn btn-lg text-success m-2"
                                                button="button"
                                            >
                                                <link to={"/update/" + props.id}>
                                                <i className="far fa-edit"></i>
                                                </link>
                                            </button>
                                           

                                        </div>
                                    </div>
                             
                    </ul>
                </div>
            </div>
        </div >
        </div>
    )
}