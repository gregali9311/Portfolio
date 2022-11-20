import React from 'react';
import './style.css';

import pieces from "../PortfolioCards";




export default function About() { 
  return (
  <div> 
      <h1> Portfolio Page</h1>
      <div className="card">
      {pieces.map((pieces)=>(

                
                <div className="card-image">
                  
                  <figure className="imageis">
                    {/* <img className="imageformat" src="https://wallpapercave.com/wp/Zuy8mSL.jpg" alt="Placeholder image"></img> */}
                    <img className="imageformat" src={pieces.imglink} alt="Placeholder image"></img>
                    <a href= {pieces.gitlink} className="description1" key={pieces.id}>
                      {`${pieces.name}: ${pieces.description}`}
                    </a>
                  </figure>
                </div>
                

      ))}
      </div>
  </div>
  )
}

