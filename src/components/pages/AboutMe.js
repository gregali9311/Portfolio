import React from 'react';
import './style.css';

import myphoto from "../../assets/meh.JPG"

export default function Home() {
  return (
    <div>
      <h1>About Me</h1>

      <img className="imageformat2" src={myphoto} alt={"Placeholder image"}></img>
      
      <h4>A bit about me: </h4> 
      <div className="background">
      <ul className="list1">
        <li>I started a medical billing company 3 years ago</li>
        <li>I received my MBA at ASU</li>
        <li>I enjoy boxing</li>
        <li>I am becoming a full stack web developer</li>
      </ul>
      </div>
      <div>
        <a className="links" href="https://www.linkedin.com/in/greg-ali-94b537a9/" >LinkedIn</a>
        <a className ="links" href="https://github.com/gregali9311" >Github</a>
   
      </div>
      
    </div>
  
  );
}
