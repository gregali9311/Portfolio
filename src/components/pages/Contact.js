import React, { useState } from 'react';
import './style.css';


function Form() {
  // Here we set two state variables for firstName and lastName using `useState`
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;
    if( name === 'firstName'){
      setFirstName(value)
    } else if ( name === 'lastName'){
      setLastName(value)
    } else {
      setMessage(value)
    }
    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    // return name === 'firstName' ? setFirstName(value) : setLastName(value);
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Alert the user their first and last name, clear the inputs
    alert(`Thanks for your message, ${firstName} ${lastName}!`);
    setFirstName('');
    setLastName('');
  };

  return (
    <div>
      <p>
        Hello {firstName} {lastName}
      </p>
      <form className="form">
        <input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
          className='formInput'
        />
        <input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
          className='formInput'
        />
        <input
          value={message}
          name="messageBox"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
          className='msgBox'
        />
        <button type="button" onClick={handleFormSubmit} className='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}


// const mouseOut = (e) => {
//   if(e.target === "") {
//     alert("This field is mandatory")
//   }
// }

export default Form;
