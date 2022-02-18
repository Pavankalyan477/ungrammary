import React, { useState } from 'react'
import './contact.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import grp from "../images/Grp.png"
import Button from '@mui/material/Button';
//import Menu from "@mui/material/Menu";


import india from "../images/india.png";
import down from "../images/dropdown.png";
import indias from "../images/indias.png";
import turkey from "../images/turkey.png";
import usa from "../images/usa.png";
import pakistan from "../images/pakistan.png";
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
export default function Contact() {
  const [errorNumber, seterrorNumber] = useState(false)
  const [errorMail, seterrorMail] = useState(false)
  const [errorName, seterrorName] = useState(false)
  const [value, setValue] = useState("");
  const [mail, setMail] = useState("");
  const [Name, setName] = useState("");

  const handleChangeMail = (e) => {
    setMail(e.target.value);
    var out = e.target.value;
    var num = out.length;
    if (num[out.length - 1] === '.') {
      seterrorMail(true);
    } else {
      seterrorMail(false);
    }
  }

  const area = [
    {
      flag: indias,
      label: "India"
    },
    {
      flag: turkey,
      label: "Turkey"
    },
    {
      flag: usa,
      label: "USA"
    },
    {
      flag: pakistan,
      label: "Pakistan"
    }
  ]
  const handleChange = (e) => {
    setValue(e.target.value)
    if (/^\d+$/.test(e.target.value)) {
      seterrorNumber(false);
    } else {
      seterrorNumber(true);
    }
  };
  const [country, setCountry] = useState("India");
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeName = (e) => {
    var format = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
    setName(e.target.value)
    if (format.test(e.target.value)) {
      seterrorName(true);
    } else {
      seterrorName(false);
    }
  };
  return (
    <>
      <div className='contact'> Contact us</div>
      <div className='Total'>
        <div>
          <img src={grp} alt="" />
        </div>
        <div className='Tab'>
          <h1>Hi, let's get in touch.</h1>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '45ch' },
            }}
            sm={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div>

              {
                errorNumber === false ? (
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Phone no."
                    multiline
                    maxRows={4}
                    value={value}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">
                        <img className="india" src={india} alt="some" />
                        <img className="down" src={down} alt="down" /> <span className="arrow"> |</span>
                      </InputAdornment>,
                    }}
                  />
                ) : (
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Phone no."
                    error
                    maxRows={4}
                    value={value}
                    onChange={handleChange}
                    helperText="Alphabets not allowed"
                    InputProps={{
                      startAdornment: <InputAdornment position="start">
                        <img className="india" src={india} alt="some" />
                        <img className="down" src={down} alt="down" />
                      </InputAdornment>,
                    }}
                  />
                )
              }

              <TextField
                id="outlined-select-currency"
                select
                label="Select Country"
                sx={{ m: 1, width: '94%' }}

                value={country}
                onChange={handleChangeCountry}
                helperText="Please select your currency"
              >
                {area.map((option) => (

                  <MenuItem key={option.label} value={option.label} className="totl" style={{ width: "10px", height: "40px" }}>
                    <img src={option.flag} alt="flag" className='imgs' />
                    <p className="align" >{option.label}</p>


                  </MenuItem>

                ))}
              </TextField>

              {
                errorName === false ? (
                  <TextField
                    id="outlined-textarea"
                    label="Enter Name"
                    placeholder="Enter Name"
                    value={Name}
                    onChange={handleChangeName}
                    multiline
                  />
                ) : (
                  <TextField
                    id="outlined-textarea"
                    label="Enter Name"
                    placeholder="Enter Name"
                    multiline
                    error
                    value={Name}
                    onChange={handleChangeName}
                    helperText="Special Characters not allowed"
                  />
                )
              }
              {
                errorMail === false ? (
                  <TextField
                    id="outlined-textarea"
                    label="Email Address"
                    multiline
                    value={mail}
                    onChange={handleChangeMail}
                  />
                ) : (
                  <TextField
                    id="outlined-textarea"
                    label="Email Address"
                    multiline
                    value={mail}
                    onChange={handleChangeMail}
                    helperText="Mail Should Not contain full stop"
                  />
                )
              }
            </div>
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
              /> <br />
              <Button variant="contained" id="Submit_btn" >Submit</Button>
            </div>
            <div>
            </div>
          </Box>
        </div>
      </div>
      

    </>
  )
}