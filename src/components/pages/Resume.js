import React from 'react';
import './style.css';

export default function Blog() {
  return (
    <div >
      <h1>Resume</h1>
      <h3>
        Work Experience
      </h3>
      <div className= "background">
      <h5>Company: The Valor Solution</h5>
      <h5>Position: Founder</h5>
      <h5>Years worked: 2019-Current</h5>
      <p>Description of Duties: Launched a healthcare technology company that focused on robotic process automation (RPA). </p>
      <h5>Company: Equality Health</h5>
      <h5>Position: Senior Manager</h5>
      <h5>Years worked: 2017-2019</h5>
      <p>Description of Duties: Launched a Managed Service Organization (MSO) division of the company, providing medical billing services, consulting to insurance companies and doctors offices. </p>
      <h5>Company: Your Neighborhood Healthcare Center</h5>
      <h5>Position: Project Manager</h5>
      <h5>Years worked: 2012-2017</h5>
      <p>Description of Duties: Managed a clinic, successfully increasing patient experience and clinic financial performance </p>
      </div>
    </div>
  );
}
