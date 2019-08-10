import React from 'react';
import logo from './logo.svg';
import './App.css';


// Media card Component, taking in 3 props title body & image  returning in the div

const MediaCard = ({ title, body, image}) => {
  return(
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <img src={image} alt = "" />

    </div>
  );
};


const Gate = ({ isOpen }) => {
  return isOpen?  <p>open</p> : <p> closed</p>
};

const cardComponent = () => {
  return(
    <div>
      <MediaCard
      title="keep it real"
      body="always"
      image="https://images.unsplash.com/photo-1532691403316-d08a19730ed9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=023978c489e57f6bf88909b39f11fbdb&auto=format&fit=crop&w=750&q=80"

      />

    <Gate isOpen="open" />
    </div>
  );
};


export default cardComponent;