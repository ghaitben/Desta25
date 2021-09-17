import React, {useState} from "react";
import axios from "axios";
import './index.css';
import './components/SearchBar.js'
import SearchBar from './components/SearchBar';


function App() {
  const [values,setValues] = useState({
    businessName: "",
    businessOwnerName: "",
    description: "",
    address: "",
    publictContact: "",
    businessContact: "",
    image: './default_img.jpeg',
  });

  function send(){
    axios.post('http:localhost:3003/url/data', values)
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

  const[submitted, setSubmitted] = useState(false);
  const[valid,setValid] = useState(false);

  const handleBusinessNameInputChange = (event) => {
    setValues({...values, businessName: event.target.value})
  }
  const handleOwnerNameInputChange = (event) => {
    setValues({...values, businessOwnerName: event.target.value})
  }
  const handleDescriptionInputChange = (event) => {
    setValues({...values, description: event.target.value})
  }
  const handleAddressInputChange = (event) => {
    setValues({...values, address: event.target.value})
  }
  const handlePublicContactInputChange = (event) => {
    setValues({...values, publicContact: event.target.value})
  }
  const handleBusinessContactInputChange = (event) => {
    setValues({...values, businessContact: event.target.value})
  }
  const handleImageChange = (event) => {
    setValues({...values,image: event.target.files[0]})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.businessOwnerName && values.businessName){
      setValid(true);
    }
    send();
    setSubmitted(true);
  }

  return (
    <div class="form-container">
          <form class="register-form" onSubmit={handleSubmit}>
            {submitted && valid ? <div class="success-message">Success! Thank you for registering</div> : null}
            <input
              onChange={handleBusinessNameInputChange}
              value={values.businessName}
              class="form-field"
              type="text"
              placeholder="Business Name"
            />
            {submitted && !values.businessName ? <span id="business-name-error">Please enter a business name</span> : null}
            <input
              onChange={handleOwnerNameInputChange}
              value={values.businessOwnerName}
              class="form-field"
              type="text"
              placeholder="Owner Name"
            />
            {submitted && !values.businessOwnerName ? <span id="owner-name-error">Please enter a owner name</span> : null}
            <input
              onChange={handleBusinessContactInputChange}
              value={values.businessContact}
              class="form-field"
              type="text"
              placeholder="Private Contact"
            />
            {submitted && !values.businessContact ? <span id="contact-error">Please provide contact information.</span> : null}
            <input
              onChange={handleDescriptionInputChange}
              value={values.description}
              class="form-field"
              type="text"
              placeholder="Description"
            />
            <input
              onChange={handleAddressInputChange}
              value={values.address}
              class="form-field"
              type="text"
              placeholder="Address"
            />
            <input
              onChange={handlePublicContactInputChange}
              value={values.publicContact}
              class="form-field"
              type="text"
              placeholder="Public Contact"
            />
            <label for="image-upload">Upload a background image:</label>
            <input
              accept="image/*"
              onChange={handleImageChange}
              class="form-field"
              id="image-upload"
              type="file"
              placeholder="Insert an image"
            />

            <button class="form-field" type="submit">
              Register
            </button>
          </form>
        </div>
  )
}
export default App;
