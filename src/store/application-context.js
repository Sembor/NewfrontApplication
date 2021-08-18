import { useReducer, createContext, useState, useEffect } from 'react';
import { application } from '../services/reducers/applicationReducer';

const ApplicationContext = createContext({
  fullName: '',
  role: '',
  phoneNumber: '',
  companyName: '',
  fein: '',
  yearsInBusiness: '',
  numberOfLocations: '',
  states: '',
  providerNames: '',
  chbMedicalInsurance: false,
  chbPensionPlan: false,
  chbPaidVacation: false,
  paidVacationDetail: '',
  payNewFront: true,
  payInsurance: false,
  setFullName: function () {},
  setRole: function () {},
  setPhoneNumber: function () {},
  setCompanyName: function () {},
  setFein: function () {},
  setYearsInBusiness: function () {},
  setNumberOfLocations: function () {},
  setStates: function () {},
  setProviderNames: function () {},
  setChbMedicalInsurance: function () {},
  setChbPensionPlan: function () {},
  setChbPaidVacation: function () {},
  setPaidVacationDetail: function () {},
  setPayNewFront: function () {},
  setPayInsurance: function () {},
});

export function ApplicationContextProvider(props) {
  const [fullNameCTX, setFullName] = useState();
  const [roleCTX, setRole] = useState();
  const [phoneNumberCTX, setPhoneNumber] = useState();
  const [companyNameCTX, setCompanyName] = useState();
  const [feinCTX, setFein] = useState();
  const [yearsInBusinessCTX, setYearsInBusiness] = useState();
  const [numberOfLocationsCTX, setNumberOfLocations] = useState();
  const [statesCTX, setStates] = useState();
  const [providerNamesCTX, setProviderNames] = useState();
  const [chbMedicalInsuranceCTX, setChbMedicalInsurance] = useState();
  const [chbPensionPlanCTX, setChbPensionPlan] = useState();
  const [chbPaidVacationCTX, setChbPaidVacation] = useState();
  const [paidVacationDetailCTX, setPaidVacationDetail] = useState();
  const [payNewFrontCTX, setPayNewFront] = useState();
  const [payInsuranceCTX, setPayInsurance] = useState();

  const context = {
    fullName: fullNameCTX,
    role: roleCTX,
    phoneNumber: phoneNumberCTX,
    companyName: companyNameCTX,
    fein: feinCTX,
    yearsInBusiness: yearsInBusinessCTX,
    numberOfLocations: numberOfLocationsCTX,
    states: statesCTX,
    providerNames: providerNamesCTX,
    chbMedicalInsurance: chbMedicalInsuranceCTX,
    chbPensionPlan: chbPensionPlanCTX,
    chbPaidVacation: chbPaidVacationCTX,
    paidVacationDetail: paidVacationDetailCTX,
    payNewFront: payNewFrontCTX,
    payInsurance: payInsuranceCTX,
    setFullName: setFullNameHandler,
    setRole:setRoleHandler,
    setPhoneNumber: setPhoneNumberHandler,
    setCompanyName: setCompanyNameHandler,
    setFein:setFeinHandler,
    setYearsInBusiness: setYearsInBusinessHandler,
    setNumberOfLocations: setNumberOfLocationsHandler,
    setStates: setStatesHandler,
    setProviderNames: setProviderNamesHandler,
    setChbMedicalInsurance: setChbMedicalInsuranceHandler,
    setChbPensionPlan: setChbPensionPlanHandler,
    setChbPaidVacation: setChbPaidVacationHandler,
    setPaidVacationDetail: setPaidVacationDetailHandler,
    setPayNewFront: setPayNewFrontHandler,
    setPayInsurance: setPayInsuraceHandler,
  };

  function setFullNameHandler(value) {
    setFullName(value);
  }
  function setRoleHandler(value) {
    setRole(value);
  }
  function setPhoneNumberHandler(value) {
    setPhoneNumber(value);
  }
  function setCompanyNameHandler(value) {
    setCompanyName(value);
  }
  function setFeinHandler(value) {
    setFein(value);
  }
  function setYearsInBusinessHandler(value) {
    setYearsInBusiness(value);
  }
  function setNumberOfLocationsHandler(value) {
    setNumberOfLocations(value);
  }
  function setStatesHandler(value) {
    setStates(value);
  }
  function setProviderNamesHandler(value) {
    setProviderNames(value);
  }
  function setChbMedicalInsuranceHandler(value) {
    setChbMedicalInsurance(value);
  }
  function setChbPensionPlanHandler(value) {
    setChbPensionPlan(value);
  }
  function setChbPaidVacationHandler(value) {
    setChbPaidVacation(value);
  }
  function setPaidVacationDetailHandler(value) {
    setPaidVacationDetail(value);
  }
  function setPayNewFrontHandler(value) {
    setPayNewFront(value);
  }
  function setPayInsuraceHandler(value) {
    setPayInsurance(value);
  }

  function clearAll(value) {
    setFullName('');
    setRole('');
    setPhoneNumber('');
    setCompanyName('');
    setFein('');
    setYearsInBusiness('');
    setNumberOfLocations('');
    setStates('');
    setProviderNames('');
    setChbMedicalInsurance(false);
    setChbPensionPlan(false);
    setChbPaidVacation(false);
    setPaidVacationDetail('');
    setPayNewFront(true);
    setPayInsurance(true);
  }

  return <ApplicationContext.Provider value={context}>{props.children}</ApplicationContext.Provider>;
}

export default ApplicationContext;
