import React, {useState, useEffect} from "react";
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
    tags: "",
  });

  function send(){
    axios.post('/url/data', values)

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
    setValues({...values,image: event.target.value})
  }
  const handleTagsChange = (event) => {
    setValues({...values,tags: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.businessOwnerName && values.businessName && values.businessContact){
      setValid(true);
    }
    setSubmitted(true);
    console.log(industry)
  }


    //the tags array should be filled with all the tags that we have
    const [industry,setindustryFlag] = useState([
      {
        name: "food",
        flag: false
      },
      {
        name: "accomodation",
        flag: false
      },
      {
        name: "arts",
        flag: false
      },
      {
        name: "entertainment",
        flag: false
      },
      {
        name: "recreation",
        flag: false
      },
      {
        name: "construction",
        flag: false
      },
      {
        name: "education",
        flag: false
      },
      {
        name: "healthcare",
        flag: false
      },
      {
        name: "manufacturing",
        flag: false
      },
      {
        name: "real estate",
        flag: false
      },
      {
        name: "retail",
        flag: false
      },
      {
        name: "wholesale",
        flag: false
      },
      {
        name: "clothing",
        flag: false
      }
    ]);

    const [neighbourhood,setneighbourhoodFlag] = useState([
      {
        name: "downtown",
        flag: false
      },
      {
        name: "old montreal",
        flag: false
      },
      {
        name: "plateau and mile end",
        flag: false
      },
      {
        name: "the village",
        flag: false
      },
      {
        name: "mont royal and outrement",
        flag: false
      },
      {
        name: "hochelaga-maisonneuve",
        flag: false
      },
      {
        name: "little italy and villeray",
        flag: false
      },
      {
        name: "les quartiers du canal",
        flag: false
      },
      {
        name: "west island",
        flag: false
      },
      {
        name: "pole des rapides",
        flag: false
      }
    ]);
    
    const [checkedIndustryState, setIndustryCheckedState] = useState(
      new Array(industry.length).fill(false)
    );

    const [checkedNeighbourhoodState, setNeighbourhoodCheckedState] = useState(
      new Array(neighbourhood.length).fill(false)
    );

    const handleIndustryOnChange = (position) => {
      const updatedIndustryCheckedState = checkedIndustryState.map((item, index) =>
        index === position ? !item : item
      );

      setIndustryCheckedState(updatedIndustryCheckedState);
      industry[position].flag = !industry[position].flag
    }

    const handleNeighbourhoodOnChange = (position) => {
      const updatedNeighbourhoodCheckedState = checkedNeighbourhoodState.map((item, index) =>
        index === position ? !item : item
      );

      setNeighbourhoodCheckedState(updatedNeighbourhoodCheckedState);
      neighbourhood[position].flag = !neighbourhood[position].flag
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
            <input
              onChange={handleTagsChange}
              value={values.tags}
              class="form-field"
              type="text"
              placeholder="Enter some tags separated by commas"
            />
            <h3>Select Industry</h3>
                  <ul className="industry-list">
                    {industry.map(({ name },index) => {
                      return (
                        <li key={index}>
                          <div className="indsutry-list-item">
                            <div className="left-section">
                              <input
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                name={name}
                                value={name}
                                checked={checkedIndustryState[index]}
                                onChange={() => handleIndustryOnChange(index)}
                              />
                              <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <h3>Select neighbourhood</h3>
                  <ul className="industry-list">
                    {neighbourhood.map(({ name },index) => {
                      return (
                        <li key={index}>
                          <div className="indsutry-list-item">
                            <div className="left-section">
                              <input
                                type="checkbox"
                                id={`custom-checkbox-${index}`}
                                name={name}
                                value={name}
                                checked={checkedNeighbourhoodState[index]}
                                onChange={() => handleNeighbourhoodOnChange(index)}
                              />
                              <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
            <button class="form-field" type="submit">
              Register
            </button>
          </form>
    </div>
  )
}


export default App;
