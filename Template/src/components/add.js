import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import Header from './header';
import Footer from './footer'
import SideNav from './sideNav';

function Add() {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState("");
    const [address, setAddress] = useState("");
    const restName = (event) => {
        setName(event.target.value);
    }
    const restEmail = (event) => {
        setEmail(event.target.value);
    }
    const restRating = (event) => {
        setRating(event.target.value);
    }
    const restAddress = (event) => {
        setAddress(event.target.value);
    }

    const newRestaurant = {
        name: name,
        email: email,
        rating: rating,
        address: address
    }

    const addShow = () => {

        axios.post('http://localhost:3000/project', newRestaurant
        )
            .then((resp) => {
                navigate('/home')
                alert('are you sure to add this restaurant in the list?');
            })

    }
    return (

        <div className="wrapper">
            <Header />
            <SideNav />
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Add Restaurant </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/home">Home</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="content">
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Add</h3>

                                    </div>
                                    <form>
                                        <div className="card-body">
                                            <div className="form-group">

                                                <input type="text" onChange={restName} value={name} className="form-control" id="exampleInputEmail1" />
                                            </div>
                                            <div className="form-group">

                                                <input type="email" onChange={restEmail} value={email} className="form-control" id="exampleInputPassword1" />
                                            </div>
                                            <div className="form-group">

                                                <input type="number" onChange={restRating} value={rating} className="form-control" id="exampleInputPassword1" />
                                            </div>
                                            <div className="form-group">

                                                <input type="text" onChange={restAddress} value={address} className="form-control" id="exampleInputPassword1" />
                                            </div>

                                        </div>
                                        <div className="card-footer">
                                            <button path="/home" type='button' className="btn btn-primary" onClick={addShow}>Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    )
}
export default Add