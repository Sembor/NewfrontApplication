import React, { useContext, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import ApplicationContext from '../../src/store/application-context';
import classes from './applications.module.css';

const ApplicationPage3 = () => {
  const applicationCTX = useContext(ApplicationContext);
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();
  const appPage2 = `/application/page1`;
  const appPage4 = `/application/page4`;

  const providersRef = useRef();
  const medicalInsuranceRef = useRef();
  const pensionPlanRef = useRef();
  const paidVactionChbRef = useRef();
  const paidVactionRef = useRef();

  function nextPage(event) {
    event.preventDefault();

    const enteredProvidersRef = providersRef.current.value;
    const enteredMedicalInsuranceRef = medicalInsuranceRef.current.checked;
    const enteredPensionPlanRef = pensionPlanRef.current.checked;
    const enteredPaidVacationChb = paidVactionChbRef.current.checked;
    const enteredPaidVacationText = paidVactionRef.current.value;


    if (enteredPaidVacationChb && (!enteredPaidVacationText || enteredPaidVacationText.trim() === '')) {
      setIsInvalid(true);
      setErrorMessage('Please provide details about the vacation');
      return;
    } else {
      setIsInvalid(false);
    }

    applicationCTX.setProviderNames(enteredProvidersRef);
    applicationCTX.setChbMedicalInsurance(enteredMedicalInsuranceRef);
    applicationCTX.setChbPensionPlan(enteredPensionPlanRef);
    applicationCTX.setChbPaidVacation(enteredPaidVacationChb);
    applicationCTX.setPaidVacationDetail(enteredPaidVacationText);

    router.push(appPage4);
  }

  function backPage(event) {
    event.preventDefault();
    router.push(appPage2);
  }

  function setChecked(event) {
    event.preventDefault();
    console.log(isChecked);
    setIsChecked(!isChecked);
  }

  let validationShape = {};

  return (
    <form className={classes.form}>
      <div>
        <h3>Tell us about your employees</h3>

        <label htmlFor="providerName">What's the name of the clinic, physician, or ER used for work injuries?</label>
        <input name="providerName" type="text" placeholder="Please type name of providers" ref={providersRef}/>

        <div role="group">
          <label>
            <input type="checkbox" name="checkBoxGroup1" value="chbMedicalInsurance" ref={medicalInsuranceRef}/>
            Do you provide group medical insurance?
          </label>
          <label>
            <input type="checkbox" name="checkBoxGroup1" value="chbPensionPlan" ref={pensionPlanRef}/>
            Do you offer a retirement pension plan?
          </label>
          <label>
            <input type="checkbox" name="checkBoxGroup1" value="chbPaidVacation" ref={paidVactionChbRef} />
            Do you give paid vacation?
          </label>
        </div>

        <label htmlFor="paidVacation">Please provide details about the paid vacation</label>
        <input name="paidVacation" type="text" placeholder="Please provide details" ref={paidVactionRef} />
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

export default ApplicationPage3;
