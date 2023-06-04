import React from "react";
import { Link } from "react-router-dom";


 export const ContactCard = () => {
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
                                            <h3 className="mb-3">Full name</h3>
                                            <p className="text-white"><i class="fas fa-map-marker-alt text-secondary"></i><span className="text-dark ms-3">c/Monte 43</span></p>
                                            <p className="text-white"><i class="fas fa-at text-secondary"></i><span className="text-dark ms-3">pineapple@gmail.com</span></p>
                                            <p className="text-white"><i class="fas fa-phone text-secondary"></i><span className="text-dark ms-3">666565435</span></p>
                                        </div>
                                        <div className="col-2 d-flex align-items-center justify-content-end">
                                            <button
                                                className="btn btn-lg text-success m-2"
                                                button="button"
                                            >
                                                <i className="far fa-edit"></i>
                                            </button>
                                            <button
                                                className="btn btn-lg m-2 text-danger"
                                                type="button"
                                            >
                                                <i class="fas fa-trash-alt"></i>
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