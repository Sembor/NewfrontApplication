import React, { useContext, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import classes from './applications.module.css';
import ApplicationContext from "../../store/application-context";

const ApplicationPage2 = () => {
  const applicationCTX = useContext(ApplicationContext)
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const router = useRouter();
  const appPage1 = `/application/page1`;
  const appPage3 = `/application/page3`;

  const companyNameInputRef = useRef();
  const feinInputref = useRef();
  const yearsInBusinessInputRef = useRef();
  const numberOfLocationsInputRef = useRef();
  const statesListInputRef = useRef();

  function nextPage(event) {
    event.preventDefault();
    const enteredCompanyName = companyNameInputRef.current.value;
    const enteredFEIN = feinInputref.current.value;
    const enteredYearsInBusinessInputRef = yearsInBusinessInputRef.current.value;
    const enteredNumberOfLocationsInputRef= numberOfLocationsInputRef.current.value;
    const enteredStatesListInputRef = statesListInputRef.current.value;

    if (!enteredCompanyName || enteredCompanyName.trim() === '') {
      setIsInvalid(true);
      setErrorMessage('Please enter Company Name');
      return;
    }

    if (!enteredFEIN || enteredFEIN.trim() === '') {
      setIsInvalid(true);
      setErrorMessage('Please enter FEIN');
      return;
    }

    applicationCTX.setCompanyName(enteredCompanyName)
    applicationCTX.setFein(enteredFEIN)
    applicationCTX.setYearsInBusiness(enteredYearsInBusinessInputRef)
    applicationCTX.setNumberOfLocations(enteredNumberOfLocationsInputRef)
    applicationCTX.setStates(enteredStatesListInputRef)

    router.push(appPage3);
  }

  function backPage(event) {
    event.preventDefault();
    router.push(appPage1);
  }

  return (
    <form className={classes.form}>
      <div>
        <h3>Tell us about your company</h3>
        <label htmlFor="companyName" >
          Company Name
        </label>
        <input name="companyName" type="text" placeholder="Please type Company Name" ref={companyNameInputRef}/>

        <label htmlFor="fein" >
          What is yor Federal Identification Number? (FEIN)
        </label>
        <input name="fein" type="text" placeholder="Please input FEIN" ref={feinInputref}/>

        <label htmlFor="yearsInBusiness">Years in business</label>
        <input name="yearsInBusiness" type="number" placeholder="Please input a number" ref={yearsInBusinessInputRef}/>

        <label htmlFor="numberOfLocations">Number of Locations</label>
        <input name="numberOfLocations" type="number" placeholder="Please input a number" ref={numberOfLocationsInputRef} />

        <label htmlFor="statesList">In which states do you operate</label>
        <input name="statesList" type="text" placeholder="Please input states names" ref={statesListInputRef}/>
      </div>
      <br />
      {isInvalid && <p className={classes.alertColor}>{errorMessage}</p>}

      <hr />
      <button onClick={backPage} type="submit">
        Back
      </button>
      <button onClick={nextPage} type="submit">
        Next
      </button>
    </form>
  );
};

export default ApplicationPage2;
