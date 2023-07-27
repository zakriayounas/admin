import React, { useEffect, useState } from 'react'
import { useNavigate} from 'react-router';
import axios from 'axios';
import Header from './header';
import SideNav from './sideNav';
import Footer from './footer';
function Search() {
  const navigate=useNavigate()
  const [Search, setSearch] = useState("");
  const [noData, setNoData] = useState(false)
  function Find(key) {
    console.warn(key)
    fetch('http://localhost:3000/project/?q=' + key).then((data) => {
      data.json().then((resp) => {
        console.warn('resp', resp);
        if (resp.length > 0) {
          setSearch(resp);
          setNoData(false)
        } else {
          setSearch(null);
          setNoData(true)
        }

      })


    }
    )
  }
  const Delete = (id) => {
    axios.delete(`http://localhost:3000/project/${id}`).then((resp) => {
      navigate('/home')
      alert("Are you sure?")
    })
 
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
                            <h1>Search Restaurants</h1>
                        </div>
                      
                    </div>
                </div>
            </section>
            <section className="content">
                <div className="card">
                   
      
                
                    <div className="card-body">
                   
             <input type="text"  onChange={(event) => Find(event.target.value)}className='card-title form-control' placeholder="Search Restuarants"  style={{width:'60%',marginTop:'15px'}}/>
                     
                     <button type="button" onClick={search} className="btn btn-success" style={{margin:'15px'}} >
                         Search
                     </button>
                     
         
                     {Search ? (
        <div>
          <table className='table table-striped table-hover'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Rating</th>
                <th>Location</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {Search.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.rating}</td>
                  <td>{item.address}</td>
                  <td>

                    <a href={"/Edit/" + item.id}><span style={{ marginLeft: "13px" }}><i className="fas fa-edit" style={{ color: "orange" }} /></span></a>
                    <span onClick={() => Delete(item.id)}>
                    <i className="fas fa-trash" style={{ color: "red" }} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        ''
      )}

      {
        noData ? (
          <h2>No Data Found</h2>
        ) : null
      }




                    </div>

                </div>
            </section>
        </div>
        <Footer />
    </div>

)
}

export default Search