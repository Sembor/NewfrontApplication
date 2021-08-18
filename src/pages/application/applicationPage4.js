import React, { useContext, useRef, useState } from 'react';

import { useRouter } from 'next/router';
import classes from './applications.module.css';
import ApplicationContext from '../../store/application-context';

const ApplicationPage4 = () => {
  const applicationCTX = useContext(ApplicationContext);
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const router = useRouter();

  const appPage3 = `/application/page3`;

  const radio1InputRef = useRef();
  const radio2InputRef = useRef();


  function handleChange1(event) {
    const { name, checked } = event.target;
    applicationCTX.setPayNewFront(checked);
    applicationCTX.setPayInsurance(false);
  }

  function handleChange2(event) {
    const { name, checked } = event.target;
    applicationCTX.setPayInsurance(checked);
    applicationCTX.setPayNewFront(false);
  }

  function nextPage(event) {
    event.preventDefault();
    const radio1Checked = applicationCTX.payNewFront;
    const radio2Checked = applicationCTX.payInsurance;

    if (!radio1Checked && !radio2Checked) {
      setIsInvalid(true);
      setErrorMessage('Please Select one of the options');
      return;
    }

    const allValues = {
      fullName: applicationCTX.fullName,
      role: applicationCTX.role,
      phoneNumber: applicationCTX.phoneNumber,
      companyName: applicationCTX.companyName,
      fein: applicationCTX.fein,
      yearsInBusiness: applicationCTX.yearsInBusiness,
      numberOfLocations: applicationCTX.numberOfLocations,
      states: applicationCTX.states,
      providerNames: applicationCTX.providerNames,
      chbMedicalInsurance: applicationCTX.chbMedicalInsurance,
      chbPensionPlan: applicationCTX.chbPensionPlan,
      chbPaidVacation: applicationCTX.chbPaidVacation,
      paidVacationDetail: applicationCTX.paidVacationDetail,
      payNewFront: applicationCTX.payNewFront,
      payInsurance: applicationCTX.payInsurance,
    }

    alert(JSON.stringify(allValues));
    router.push("/");
  }

  function backPage(event) {
    event.preventDefault();
    router.push(appPage3);
  }

  return (
    <form className={classes.form}>
      <div>
        <h3>How do you want to pay for your policy?</h3>
        <div role="group">
          <div className={classes.radioDiv}>
            <label className={classes.radioLabel}>
              <input type="radio" name="radioBoxGroup1"  value="radioBoxGroup1" onChange={handleChange1} />
              <h5>I want to pay Newfront</h5>
            </label>
            <label className={classes.radioDescription}>
              You'l pay Newfront instead of paying each insurance company <br />
              separately. There are no fees
            </label>
          </div>
          <div className={classes.radioDiv} ref={radio1InputRef}>
            <label className={classes.radioLabel}>
              <input type="radio" name="radioBoxGroup1" value="radioBoxGroup2" onChange={handleChange2} />
              <h5>I want to pay the insurance company directly</h5>
            </label>
            <label className={classes.radioDescription}>
              You'll receive bills from the insurance company and it will be your <br />
              responsibility to make sure they are paid to keep your coverage.
            </label>
          </div>
        </div>
      </div>
      <br />
      {isInvalid && <p className={classes.alertColor}>{errorMessage}</p>}
      <hr />
      <button onClick={backPage} type="submit">
        Back
      </button>
      <button onClick={nextPage} type="submit">
        Finish
      </button>
    </form>
  );
};

export default ApplicationPage4;
