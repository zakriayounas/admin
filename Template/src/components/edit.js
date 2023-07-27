import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import Header from './header';
import Footer from './footer'
import SideNav from './sideNav';

function Edit() {
  const navigate = useNavigate()
  const params = useParams('id')
  console.log('id is', params.id);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3000/project/${params.id}`).then((resp) => {
      console.warn('data if particular id', resp.data)
      setName(resp.data.name);
      setAddress(resp.data.address);
      setEmail(resp.data.email);
      setRating(resp.data.rating);
    })
  }, [])

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





  const updateNow = async () => {
    const newUpdate = {
      name: name,
      email: email,
      rating: rating,
      address: address
    }
    await axios.put(`http://localhost:3000/project/${params.id}`, newUpdate
    ).then((resp) => {

      console.warn(resp.data)
      navigate('/home')
      alert("Data Updated")
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
                <h1>Update Restaurant Entry</h1>
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
                    <h3 className="card-title">Update</h3>
                    <div className="card-tools">
                      <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                        <i className="fas fa-search" />
                      </button>
                      <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                        <i className="fas fa-times" />
                      </button>
                    </div>
                  </div>
                  <form>
                  <div className="card-body">
                    <div className="form-group">

                      <input type="text"onChange={(e) => setName(e.target.value)} value={name} className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="form-group">

                      <input type="email" onChange={restEmail} value={email} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">

                      <input type="number" onChange={restRating} value={rating} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="form-group">

                      <input type="text"  onChange={restAddress} value={address} className="form-control" id="exampleInputPassword1" />
                    </div>

                  </div>
                  <div className="card-footer">
                    <button path="/home" type='button' className="btn btn-primary" onClick={updateNow}>Update</button>
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
export default Edit 
