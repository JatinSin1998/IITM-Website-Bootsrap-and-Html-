import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import Carosel from "../Carosel/Carosel";

const Navbar = () => {
  return (
    <div className={styles.background_img} >
      <div className="d-flex flex-wrap bg-dark">
        <ul className="nav me-auto">
          <p className="text-white-50 bg-dark">
            Call Us: 022241458419 / 02224145498 | Email principal@iitms.edu
          </p>
        </ul>
        <ul className="nav ">
          <li >
            <p className="nav-link text-white-50 bg-dark  px-2">Carers</p>
          </li>
          <li >
            <p className="nav-link text-white-50 bg-dark  px-2">Alumani</p>
          </li>
          <li >
            <p className="nav-link text-white-50 bg-dark  px-2">Contact</p>
          </li>
          <li className="px-4 m-2" onClick={()=>{console.log("I got Clicked")}}>
          <Link to="#" className="pe-auto text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1
 
 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
            </Link>
          </li>
        </ul>
      </div>
      <nav className="border-bottom">
      <div className="d-flex flex-wrap">
      
        <div className="container">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <Link
                to="#"
                className="nav-link link-dark px-2 active  text-warning" 
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link link-dark px-2 active dropdown-toggle text-white" data-bs-toggle="dropdown">
                About US
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link link-dark px-2 active dropdown-toggle text-white" data-bs-toggle="dropdown">
                Colleges
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link link-dark px-2 active dropdown-toggle text-white" data-bs-toggle="dropdown">
                Schools
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link link-dark px-2 active dropdown-toggle text-white" data-bs-toggle="dropdown">
                 Academic 
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link link-dark px-2 active dropdown-toggle text-white" data-bs-toggle="dropdown">
                Adminstration
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link link-dark px-2 active dropdown-toggle text-white" data-bs-toggle="dropdown">
                More
              </Link>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    <Carosel/>
    </div>
  );
};

export default Navbar;
