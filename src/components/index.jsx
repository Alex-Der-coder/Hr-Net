import React, { useState , useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';

import SelectComponent from '@alex-der-coder/react-select-component';



function Index() {

    const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [startDate, setStartDate] = useState('');
    const [department, setDepartment] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    

    useEffect(() => {
        if (!department) {
          setDepartment('Sales');
        }
      }, [department]);

      useEffect(() => {
        if (!state) {
            setState('AL');
        }
      }, [state]);
    
    const handleSave = () => {
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        const employee = {
            firstName,
            lastName,
            dateOfBirth,
            startDate,
            department,
            street,
            city,
            state,
            zipCode
        };
        employees.push(employee);
        localStorage.setItem('employees', JSON.stringify(employees));
        console.log(employees)
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (street === '' || city === '' || state === '' || zipCode === '') {
            alert('Veuillez remplir tous les champs obligatoires.');
        } else {
            // Traiter la soumission du formulaire
        }
    };



    const states = [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        {
            "name": "Alaska",
            "abbreviation": "AK"
        },
        {
            "name": "American Samoa",
            "abbreviation": "AS"
        },
        {
            "name": "Arizona",
            "abbreviation": "AZ"
        },
        {
            "name": "Arkansas",
            "abbreviation": "AR"
        },
        {
            "name": "California",
            "abbreviation": "CA"
        },
        {
            "name": "Colorado",
            "abbreviation": "CO"
        },
        {
            "name": "Connecticut",
            "abbreviation": "CT"
        },
        {
            "name": "Delaware",
            "abbreviation": "DE"
        },
        {
            "name": "District Of Columbia",
            "abbreviation": "DC"
        },
        {
            "name": "Federated States Of Micronesia",
            "abbreviation": "FM"
        },
        {
            "name": "Florida",
            "abbreviation": "FL"
        },
        {
            "name": "Georgia",
            "abbreviation": "GA"
        },
        {
            "name": "Guam",
            "abbreviation": "GU"
        },
        {
            "name": "Hawaii",
            "abbreviation": "HI"
        },
        {
            "name": "Idaho",
            "abbreviation": "ID"
        },
        {
            "name": "Illinois",
            "abbreviation": "IL"
        },
        {
            "name": "Indiana",
            "abbreviation": "IN"
        },
        {
            "name": "Iowa",
            "abbreviation": "IA"
        },
        {
            "name": "Kansas",
            "abbreviation": "KS"
        },
        {
            "name": "Kentucky",
            "abbreviation": "KY"
        },
        {
            "name": "Louisiana",
            "abbreviation": "LA"
        },
        {
            "name": "Maine",
            "abbreviation": "ME"
        },
        {
            "name": "Marshall Islands",
            "abbreviation": "MH"
        },
        {
            "name": "Maryland",
            "abbreviation": "MD"
        },
        {
            "name": "Massachusetts",
            "abbreviation": "MA"
        },
        {
            "name": "Michigan",
            "abbreviation": "MI"
        },
        {
            "name": "Minnesota",
            "abbreviation": "MN"
        },
        {
            "name": "Mississippi",
            "abbreviation": "MS"
        },
        {
            "name": "Missouri",
            "abbreviation": "MO"
        },
        {
            "name": "Montana",
            "abbreviation": "MT"
        },
        {
            "name": "Nebraska",
            "abbreviation": "NE"
        },
        {
            "name": "Nevada",
            "abbreviation": "NV"
        },
        {
            "name": "New Hampshire",
            "abbreviation": "NH"
        },
        {
            "name": "New Jersey",
            "abbreviation": "NJ"
        },
        {
            "name": "New Mexico",
            "abbreviation": "NM"
        },
        {
            "name": "New York",
            "abbreviation": "NY"
        },
        {
            "name": "North Carolina",
            "abbreviation": "NC"
        },
        {
            "name": "North Dakota",
            "abbreviation": "ND"
        },
        {
            "name": "Northern Mariana Islands",
            "abbreviation": "MP"
        },
        {
            "name": "Ohio",
            "abbreviation": "OH"
        },
        {
            "name": "Oklahoma",
            "abbreviation": "OK"
        },
        {
            "name": "Oregon",
            "abbreviation": "OR"
        },
        {
            "name": "Palau",
            "abbreviation": "PW"
        },
        {
            "name": "Pennsylvania",
            "abbreviation": "PA"
        },
        {
            "name": "Puerto Rico",
            "abbreviation": "PR"
        },
        {
            "name": "Rhode Island",
            "abbreviation": "RI"
        },
        {
            "name": "South Carolina",
            "abbreviation": "SC"
        },
        {
            "name": "South Dakota",
            "abbreviation": "SD"
        },
        {
            "name": "Tennessee",
            "abbreviation": "TN"
        },
        {
            "name": "Texas",
            "abbreviation": "TX"
        },
        {
            "name": "Utah",
            "abbreviation": "UT"
        },
        {
            "name": "Vermont",
            "abbreviation": "VT"
        },
        {
            "name": "Virgin Islands",
            "abbreviation": "VI"
        },
        {
            "name": "Virginia",
            "abbreviation": "VA"
        },
        {
            "name": "Washington",
            "abbreviation": "WA"
        },
        {
            "name": "West Virginia",
            "abbreviation": "WV"
        },
        {
            "name": "Wisconsin",
            "abbreviation": "WI"
        },
        {
            "name": "Wyoming",
            "abbreviation": "WY"
        }
    ];


  return (
    <div className='container_app'>
    <div className="title">
    <h1>HRnet</h1>
    <Link to="/employer">View Current Employees</Link>
</div>
<div className="container">
       
    <h2>Create Employee</h2>
    <form  action="#" id="create-employee" onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input  className='border-2' type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <label  htmlFor="last-name">Last Name</label>
        <input className='border-2' type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} />

        <label  htmlFor="date-of-birth">Date of Birth</label>
        <input className='border-2' id="date-of-birth" type="date"  value={dateOfBirth} onChange={(e) => {
    setDateOfBirth(e.target.value);
}} />

        <label  htmlFor="start-date">Start Date</label>
        <input className='border-2' id="start-date" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required/>

        <fieldset className='border-2 address' >
            <legend>Address</legend>

            <label  htmlFor="street">Street</label>
            <input className='border-2' id="street" type="text" value={street} onChange={(e) => setStreet(e.target.value)} required/>

            <label  htmlFor="city">City</label>
            <input className='border-2' id="city" type="text"  value={city} onChange={(e) => setCity(e.target.value)} required/>

            <label htmlFor="state">State</label>
            <select id="state" value={state} onChange={(e) => setState(e.target.value)} required>
                {states.map((state, index) => (
                    <option key={index} value={state.abbreviation}>{state.name}</option>
                ))}
            </select>

            <label  htmlFor="zip-code">Zip Code</label>
            <input className='border-2' id="zip-code" type="number"  value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
        </fieldset>
   <SelectComponent />
    </form>
    <div>
        <button onClick={() => {onOpenModal(); handleSave();
}} >Save</button>
            <Modal classNames='w-[20%]' open={open} onClose={onCloseModal} center>
                <h2>Employee Created!</h2>
            </Modal>
    </div>
</div>
</div>
  );
}

export default Index;
