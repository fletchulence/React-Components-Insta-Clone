// You do not need to change any code in this file for MVP
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCircle, faCompass } from '@fortawesome/free-regular-svg-icons';
import "./SearchBar.css";

const SearchBar = (props) => {
  const { posts, onSubmit, onChange } = props;

  document.addEventListener('submit', onSubmit) 

  // function onSubmit(evt) {
  //   console.log(evt.target.value)
  //   evt.preventDefault()
  //   //look for usernames
  //   //look for comments
  // }

  // function onChange (evt){

  // }

  return (
    <div className="search-bar-wrapper">
      <div className="social">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
          onSubmit={onSubmit}
          onChange={onChange}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <FontAwesomeIcon icon={faCompass} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faHeart} />
        </div>
        <div className="social">
          <FontAwesomeIcon icon={faCircle} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;


//do a .find on a form submit
//? type="Submit"
/* TODO: form.addEventListener('submit, (evt) => {
  evt.preventDefault;
  
}) */