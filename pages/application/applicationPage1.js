import { useRouter } from 'next/router';
import { useRef, useState, useContext } from 'react';
import ApplicationContext from "../../src/store/application-context";
import classes from './applications.module.css';

function ApplicationPage1() {
  const applicationCTX = useContext(ApplicationContext)
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const router = useRouter();
  const appPage2 = `/application/page2`;

  const fullNameInputRef = useRef();
  const roleInputref = useRef();
  const phoneNumberInputRef = useRef();

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  function nextPage(event) {
    event.preventDefault();

    const enteredFullName = fullNameInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;
    const enteredRole = roleInputref.current.value;

    if (!enteredFullName || enteredFullName.trim() === '') {
      setIsInvalid(true);
      setErrorMessage('Please enter the Full Name');
      return;
    }

    if (!enteredPhoneNumber || enteredPhoneNumber.trim() === '') {
      setIsInvalid(true);
      setErrorMessage('Please enter phone number');
      return;
    }

    applicationCTX.setFullName(enteredFullName)
    applicationCTX.setRole(enteredRole)
    applicationCTX.setPhoneNumber(enteredPhoneNumber)

    router.push(appPage2);
  }

  return (
    <form className={classes.form}>
      <div>
        <h3>Who is the primary contact for this policy</h3>
        <h6>
          This person will receive all communications from Newfront about this policy. You <br /> can change this
          contact information later. If you're not sure, just add your contact
          <br /> information
        </h6>
        <label htmlFor="fullName">Full Name</label>
        <input name="fullName" type="text" ref={fullNameInputRef} />

        <label htmlFor="role">Role</label>
        <input name="role" type="text" ref={roleInputref} />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input name="phoneNumber" type="number" ref={phoneNumberInputRef} />
      </div>
      <br />
      {isInvalid && <p className={classes.alertColor}>{errorMessage}</p>}

      <hr />

      <button onClick={nextPage} type="submit">
        Next
      </button>
    </form>
  );
}

export default ApplicationPage1;
