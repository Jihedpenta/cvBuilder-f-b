import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FormCard from "../form-card/form-card.component";
import useResume from "../../../hooks/useResume";
import { grid } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';

const GeneralInfoForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const { resumeContent, setResumeContent } = useResume();

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const jobRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const nationRef = useRef(null);
  const birthRef = useRef(null);
  const imgRef = useRef(null);
  const adressRef = useRef(null);
  const postalRef = useRef(null);
  const countryRef = useRef(null);
  const cityRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [requiredErrMsg, setRequiredErrMsg] = useState("");
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [validForm, setValidForm] = useState(false);

  const [resumeHeader, setResumeHeader] = useState({});

  useEffect(() => {
    if (JSON.stringify(resumeContent.header) !== JSON.stringify(resumeHeader)) {
      setResumeHeader(resumeContent.header);
    }
  }, [resumeContent]);

  useEffect(() => {
    if (resumeContent.header) {
      if (resumeContent.header.firstName) {
        firstNameRef.current.value = resumeContent.header.firstName;
      }
      if (resumeContent.header.lastName) {
        lastNameRef.current.value = resumeContent.header.lastName;
      }
      if (resumeContent.header.jobTitle) {
        jobRef.current.value = resumeContent.header.jobTitle;
      }
      if (resumeContent.header.email) {
        emailRef.current.value = resumeContent.header.email;
      }
      if (resumeContent.header.phoneNumber) {
        phoneRef.current.value = resumeContent.header.phoneNumber;
      }
      if (resumeContent.header.nationality) {
        nationRef.current.value = resumeContent.header.nationality;
      }
      if (resumeContent.header.birthdate) {
        //2022-01-01
        birthRef.current.value = resumeContent.header.birthdate;
      }
      if (resumeContent.header.adress.adressLine) {
        //2022-01-01
        adressRef.current.value = resumeContent.header.adress.adressLine;
      }
      if (resumeContent.header.adress.postalCode) {
        //2022-01-01
        postalRef.current.value = resumeContent.header.adress.postalCode;
      }
      if (resumeContent.header.adress.country) {
        //2022-01-01
        countryRef.current.value = resumeContent.header.adress.country;
      }
      if (resumeContent.header.adress.city) {
        //2022-01-01
        cityRef.current.value = resumeContent.header.adress.city;
      }
    } else {
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      jobRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      nationRef.current.value = "";
      birthRef.current.value = "";
      adressRef.current.value = "";
      postalRef.current.value = "";
      countryRef.current.value = "";
      cityRef.current.value = "";
    }
  }, [resumeHeader]);

  const handleDeletePicture = ()=>{
    setSelectedFile(null)
    if (resumeContent?.header?.imageFile ||resumeContent?.header?.imageUrl !== ''){
      resumeContent.header.imageFile = null
      resumeContent.header.imageUrl = ''
      const newContent = JSON.parse(JSON.stringify(resumeContent))
      setResumeContent(newContent)

    }
  }
  const handleSave = () => {
    setValidForm(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;

    const job = jobRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const nationality = nationRef.current.value;
    setErrors({
      firstName: firstName === "" ? true : false,
      lastName: lastName === "" ? true : false,

      job: job === "" ? true : false,
      phone: phone === "" ? true : false,
      nationality: nationality === "" ? true : false,
      email: email === "" || !emailRegex.test(email) ? true : false,
    });

    setRequiredErrMsg(
      firstName === "" ||
        lastName === "" ||
        job === "" ||
        phone === "" ||
        nationality === "" ||
        email === ""
        ? "Please fill in required fields"
        : ""
    );
    setEmailErrMsg(
      emailRegex.test(email) || email === "" ? "" : "Please enter a valid email"
    );
    if (
      !(
        firstName === "" ||
        lastName === "" ||
        job === "" ||
        phone === "" ||
        nationality === "" ||
        email === "" ||
        !emailRegex.test(email)
      )
    ) {
      const imgUrl = selectedFile ? URL.createObjectURL(selectedFile) :
                     (resumeContent?.header?.imageFile ||resumeContent?.header?.imageUrl !== '') ? resumeContent.header.imageUrl : "";
      const header = {
        firstName: firstName,
        lastName: lastName,
        jobTitle: job,
        adress: {
          adressLine: adressRef.current.value,
          postalCode: postalRef.current.value,
          city: cityRef.current.value,
          country: countryRef.current.value,
        },
        phoneNumber: phoneRef.current.value,
        email: emailRef.current.value,
        nationality: nationRef.current.value,
        birthdate: birthRef.current.value,
        imageUrl: imgUrl,
        imageFile: selectedFile,
      };
      const resumeData = { ...resumeContent, header };

      setResumeContent(resumeData);
    }
  };

  return (
    <FormCard title="General Information">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            required
            label="First Name"
            sx={{ width: "100%" }}
            inputRef={firstNameRef}
            error={errors.firstName}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            required
            label="Last Name"
            sx={{ width: "100%" }}
            inputRef={lastNameRef}
            error={errors.lastName}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            required
            label="Job Title"
            sx={{ width: "100%" }}
            inputRef={jobRef}
            error={errors.job}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <TextField
            required
            label="Phone Number"
            sx={{ width: "100%" }}
            inputRef={phoneRef}
            error={errors.phone}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <TextField
            required
            label="Email Adress"
            sx={{ width: "100%" }}
            inputRef={emailRef}
            error={errors.email}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            required
            label="Nationality"
            sx={{ width: "100%" }}
            inputRef={nationRef}
            error={errors.nationality}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            sx={{ width: "100%" }}
            inputRef={birthRef}
            // defaultValue={selectedDate}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <input
            id="contained-button-file"
            type="file"
            accept="image/png, image/jpeg,  image/jpg,  image/gif"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            style={{ display: "none" }}
            ref={imgRef}
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              color="primary"
              component="span"
              sx={{ width: "100%", height: "inhirit" }}
            >
              Upload
              <CloudUploadIcon />
            </Button>
          </label>
          {selectedFile && (
            <Typography variant="subtitle1">{selectedFile.name}</Typography>
          )}
          {!selectedFile && resumeHeader?.imageUrl && (
            <Grid container>
              <Grid item md={10}
                sx={{
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center'
                }}
              >
                <Typography variant="subtitle1">
                  {resumeHeader?.imageUrl}
                </Typography>
              </Grid>
              <Grid item>
                <Grid item md={1}>
                  <IconButton
                    color="danger"
                    aria-label="Delete"
                    component="label"
                    onClick={() => handleDeletePicture()}
                  >
                    <DeleteIcon style={{color:'red'}} />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          )}
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <TextField
            label="Adress Line"
            sx={{ width: "100%" }}
            inputRef={adressRef}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            label="Postal Code"
            sx={{ width: "100%" }}
            inputRef={postalRef}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            label="Country"
            sx={{ width: "100%" }}
            inputRef={countryRef}
            required
            error={errors.country}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <TextField
            label="City"
            sx={{ width: "100%" }}
            inputRef={cityRef}
            required
            error={errors.city}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        {requiredErrMsg !== "" && (
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="body" color="red">
              {requiredErrMsg}
            </Typography>
          </Grid>
        )}
        {emailErrMsg !== "" && (
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant="body" color="red">
              {emailErrMsg}
            </Typography>
          </Grid>
        )}
        <Grid item xs={12} sm={12} md={12}>
          <Button onClick={handleSave}>Save</Button>
        </Grid>
      </Grid>
    </FormCard>
  );
};

export default GeneralInfoForm;
