
import React, { useEffect, useState } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import axios from 'axios';
import Header from './header';
import SideNav from './sideNav';
import Footer from './footer';
function Home() {
    const navigate = useNavigate()
    const [list, setList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/project').then((result) => {
            result.json().then((resp) => {
                setList(resp)
            })
        })
    })
    console.warn(list);
    const Delete = (id) => {
        axios.delete(`http://localhost:3000/project/${id}`).then((resp) => {
            alert("Are you sure?")
        })

    }
    const addPage = () => {
        navigate('/Add')
    }
    const search = () => {
        navigate('/search')
    }
    return (
        <div className='wrapper'>
            <Header />
            <SideNav />
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Restaurants</h1>
                            </div>
                          
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            
                            <div className="card-tools">
                                <button type="button" onClick={search} className="btn btn-success" style={{ marginRight: '12px' }}>
                                    Search
                                </button>
                                <button type="button" onClick={addPage} className="btn btn-success" style={{ marginRight: '12px' }}>
                                    Add Restaurant
                                </button>
                            </div>
                        </div>
                        <div className="card-body">

                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Rating</th>
                                        <th>Address</th>
                                        <th>Email</th>
                                        <th>Operation</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        list.map((item) =>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.address}</td>
                                                <td>{item.email}</td>
                                                <td><Link to={"/Edit/"+item.id}><span style={{ marginLeft: "13px" }}><i className="fas fa-edit" style={{ color: "orange" }} /></span></Link>

                                                    <span onClick={() => Delete(item.id)} style={{ marginLeft: "10px" }}><i className="fas fa-trash" style={{ color: "red" }} /></span></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>

    )
}

export default Home