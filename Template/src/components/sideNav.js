import React from 'react'

function sideNav() {
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block">Alexander Pierce</a>
            </div>
          </div>
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item">
                <a href="/home" className="nav-link active">
                  <i className="nav-icon fa fa-home " />
                  <p>
                    Home
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
              </li>
              {
              localStorage.getItem('login') ?
              <li className="nav-item">
                <a href="/logout" className="nav-link " >
                  <i className="nav-icon fas fa-user-alt" />
                  <p>
                   LOG OUT
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
              </li>
              :
              <li className="nav-item">
              <a href="/" className="nav-link " >
                <i className="nav-icon fas fa-user-alt" />
                <p>
                 LOG IN
                  <i className="right fas fa-angle-left" />
                </p>
              </a>
            </li>
            }
            </ul>
          </nav>
        </div>
      </aside>
    </div>

  )
}

export default sideNav