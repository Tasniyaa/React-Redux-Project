import React from 'react'

const Head = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="/">
              Home
            </a>
            <a className="nav-link" href="/products">
              Products
            </a>
            <a className="nav-link" href="/about">
              About
            </a>
            <a className="nav-link" href="/contact">
              Contact
            </a>
            <a className="nav-link" href="/search">
              Search
            </a>
            <a className="nav-link" href="cart">
              Cart
            </a>
            <a className="nav-link" href="/login">
              Profile
            </a>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Head
