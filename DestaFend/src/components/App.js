import React, {useState, useEffect} from "react";
import axios from "axios";
import '../index.css';
import './SearchBar.css'
import NavBar from './NavBar.js'


function App() {
  const [values,setValues] = useState({
    businessName: "",
    businessOwnerName: "",
    description: "",
    address: "",
    publicContact: "",
    businessContact: "",
    image: './default_img.jpeg',
    tags: "",
  });

  function send(){
    let industry_clone = [...industry];
    let neighbourhood_clone = [...neighbourhood];
    
    for(var i = 0; i < industry_clone.length; i++) {
      industry_clone[i] = JSON.stringify(industry_clone[i]);
    }
    for(var j = 0; j < neighbourhood_clone.length; j++) {
      neighbourhood_clone[j] = JSON.stringify(neighbourhood_clone[j]);
    }

    var formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    })
    formData.append("industrySize", industry_clone.length);
    formData.append("neighbourhoodSize", neighbourhood_clone.length);

    for(var k = 0; k < industry_clone.length; k++) {
      formData.append("industry"+k, industry_clone[k]);
    }
    for(var k = 0; k < neighbourhood_clone.length; k++) {
      formData.append("neighbourhood"+k, neighbourhood_clone[k]);
    }
    
    axios.post('http://localhost:3003/url/saveProfile', formData, {
      headers: {
        "content-Type": 'multipart/form-data'
      }
    })

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
  const handleTagsChange = (event) => {
    setValues({...values,tags: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.businessOwnerName && values.businessName && values.businessContact){
      send();
      setValid(true);
      window.location.href = '/';
      
    }
    setSubmitted(true);
    
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
    
   // const [checkedIndustryState, setIndustryCheckedState] = useState(
    //  new Array(industry.length).fill(false)
   // );

   // const [checkedNeighbourhoodState, setNeighbourhoodCheckedState] = useState(
     // new Array(neighbourhood.length).fill(false)
    //);

    //const handleIndustryOnChange = (position) => {
     // const updatedIndustryCheckedState = checkedIndustryState.map((item, index) =>
       // index === position ? !item : item
      //);

      //setIndustryCheckedState(updatedIndustryCheckedState);
     // industry[position].flag = !industry[position].flag
    //}

   // const handleNeighbourhoodOnChange = (position) => {
     // const updatedNeighbourhoodCheckedState = checkedNeighbourhoodState.map((item, index) =>
      //  index === position ? !item : item
     // );

      //setNeighbourhoodCheckedState(updatedNeighbourhoodCheckedState);
      //neighbourhood[position].flag = !neighbourhood[position].flag
    //}

  return (
    <>
    <NavBar />  
    <div class="form-container">
          <form className="register-form" onSubmit={handleSubmit} encType="multipart/form-data">
            {submitted && valid ? <div className="success-message">Success! Thank you for registering</div> : null}
            <input
              onChange={handleBusinessNameInputChange}
              value={values.businessName}
              className="form-field"
              type="text"
              placeholder="Business Name"
            />
            {submitted && !values.businessName ? <span id="business-name-error">Please enter a business name</span> : null}
            <input
              onChange={handleOwnerNameInputChange}
              value={values.businessOwnerName}
              className="form-field"
              type="text"
              placeholder="Owner Name"
            />
            {submitted && !values.businessOwnerName ? <span id="owner-name-error">Please enter a owner name</span> : null}
            <input
              onChange={handleBusinessContactInputChange}
              value={values.businessContact}
              className="form-field"
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
                                //checked={checkedIndustryState[index]}
                                //onChange={() => handleIndustryOnChange(index)}
                                onChange={(e) => {
                                  let val = e.target.checked;
                                  setindustryFlag(industry.map(cbox => {
                                    if(cbox.name === e.target.name) { cbox.flag = val }
                                    return cbox;
                                  }))
                                }}
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
                        <li key={index+industry.length}>
                          <div className="industry-list-item">
                            <div className="left-section">
                              <input
                                type="checkbox"
                                id={`custom-checkbox-${index + industry.length}`}
                                name={name}
                                value={name}
                                //checked={checkedNeighbourhoodState[index]}
                                //onChange={() => handleNeighbourhoodOnChange(index)}
                                onChange={e => {
                                  let val = e.target.checked;
                                  setneighbourhoodFlag(neighbourhood.map(n => {
                                    if(n.name === e.target.name) { n.flag = val }
                                    return n;
                                  }))
                                }}
                              />
                              <label htmlFor={`custom-checkbox-${index+industry.length}`}>{name}</label>
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
    </>
  )
}


export default App;
