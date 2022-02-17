import React, { useState } from 'react'
import './contact.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import grp from "../images/Grp.png"
export default function Contact() {
  const [errorNumber, seterrorNumber] = useState(false)
  const [errorMail, seterrorMail] = useState(false)
  const [errorName, seterrorName] = useState(false)
  const [value, setValue]= useState("");
  const [mail,setMail] = useState("");
  const [Name, setName] = useState("");
  const handleChangeMail = (e) => {
    setMail(e.target.value);
    var out = e.target.value;
    var num = out.length;
  if (num[out.length-1]==='.') {
      seterrorMail(true);
  } else {
      seterrorMail(false);
  }
}


  const handleChange = (e) => {
    setValue(e.target.value)
    if (/^\d+$/.test(e.target.value)) {
      seterrorNumber(false);
    } else {
      seterrorNumber(true);
    }
  };


   const handleChangeName = (e) => {
     var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
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
                  />
                )
              }

              <TextField
                id="outlined-textarea"
                label="Select Country"
                placeholder="Placeholder"
                multiline
              />
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
              />
            </div>
            <div>
            </div>
          </Box>
        </div>
      </div>
    </>
  )
}