const INPUT_TEXT = 'INPUT_TEXT';
const TEXT_AREA = 'TEXT_AREA';
const DATE_INPUT = 'DATE_INPUT';
const CHECK_BOX_GROUP = 'CHECK_BOX_GROUP';
const CHECK_BOX = 'CHECK_BOX';
const RADIO_BUTTON_GROUP = 'RADIO_BUTTON_GROUP';
const RADIO_BUTTON = 'RADIO_BUTTON';
const EMAIL = 'Email';
const PHONE_NUMBER = 'PHONE_NUMBER';
const NUMBER_ONLY = 'Number';
const ANY = 'ANY'; // Default
const LETTER_ONLY = 'LETTER_ONLY';

export const workersCompensationAPI = [
  {
    applicationTitle: 'Workers compensation',
    applicationName: 'workersCompensation',
    createdAt: "2019-06-12T18:55:05.393Z",
    updatedAt: "2019-06-12T19:00:51.566Z",
  },
  {
    id: "screen1",
    title: 'Who is the primary contact for this policy',
    apiName: 'primaryContact',
    description: 'This person will receive all communications...',
    createdAt: "2019-06-12T18:55:05.393Z",
    updatedAt: "2019-06-12T19:00:51.566Z",
    components: [
      {
        type: INPUT_TEXT,
        apiName: 'fullName',
        title: 'Full Name',
        required: true,
        description: '',
        placeholder: 'Please type full name',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: TEXT_AREA,
        apiName: 'role',
        title: 'Role',
        required: false,
        description: '',
        placeholder: 'Please type role',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: PHONE_NUMBER,
        apiName: 'phoneNumber',
        title: 'Phone Number',
        required: true,
        description: '',
        placeholder: 'Please type phone number',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
    ],
    buttonNext: true,
  },
  {
    id: "screen2",
    title: 'Tell us about your company',
    apiName: 'companyInfo',
    description: '',
    createdAt: "2019-06-12T18:55:05.393Z",
    updatedAt: "2019-06-12T19:00:51.566Z",
    components: [
      {
        type: INPUT_TEXT,
        title: 'Company Name',
        apiName: 'companyName',
        required: true,
        description: '',
        placeholder: 'Please type full name',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: INPUT_TEXT,
        title: 'What is your Federal Employer Identification Number? (FEIN)',
        apiName: 'fein',
        required: true,
        description: '',
        placeholder: 'Please type your FEIN',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: INPUT_TEXT,
        title: 'Years in Business',
        apiName: 'yearsInBusiness',
        required: false,
        description: '',
        placeholder: 'Please type number of years',
        format: NUMBER_ONLY,
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: INPUT_TEXT,
        title: 'Number of Locations',
        apiName: 'numberOfLocations',
        required: false,
        description: '',
        placeholder: 'Please type number of locations',
        format: NUMBER_ONLY,
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: INPUT_TEXT,
        title: 'In which states do you operate',
        apiName: 'statesList',
        required: false,
        description: '',
        placeholder: 'Please type states names',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
    ],
    buttonBack: true,
    buttonNext: true,
  },
  {
    id: "screen3",
    title: 'Tell us about your employees',
    apiName: 'employeesInfo',
    description: '',
    createdAt: "2019-06-12T18:55:05.393Z",
    updatedAt: "2019-06-12T19:00:51.566Z",
    components: [
      {
        type: INPUT_TEXT,
        title: "What's the name of the clinic, physician, or ER used for work injuries?",
        apiName: 'providerName',
        required: false,
        description: '',
        placeholder: 'Please type name of providers',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: CHECK_BOX_GROUP,
        apiName: 'checkBoxGroup1',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
        checkboxList: [
          {
            type: CHECK_BOX,
            title: 'Do you provide group medical insurance?',
            apiName: 'chbMedicalInsurance',
            required: false,
            description: '',
            checked: false,
            hint: 'hint text',
            createdAt: "2019-06-12T18:55:05.393Z",
            updatedAt: "2019-06-12T19:00:51.566Z",
          },
          {
            type: CHECK_BOX,
            title: 'Do you offer a retirement pension plan?',
            apiName: 'chbPensionPlan',
            required: false,
            description: '',
            checked: false,
            hint: 'hint text',
            createdAt: "2019-06-12T18:55:05.393Z",
            updatedAt: "2019-06-12T19:00:51.566Z",
          },
          {
            type: CHECK_BOX,
            title: 'Do you give paid vacation?',
            apiName: 'chbPaidVacation',
            required: false,
            description: '',
            checked: false,
            setVisibleComponent: 'componentName',
            setRequiredComponent: 'paidVacationDetails',
            hint: 'hint text',
            createdAt: "2019-06-12T18:55:05.393Z",
            updatedAt: "2019-06-12T19:00:51.566Z",
          },
        ],
      },
      {
        type: INPUT_TEXT,
        title: 'Please provide details about the paid vacation',
        apiName: 'paidVacation',
        required: false,
        description: '',
        placeholder: 'Please provide details',
        format: NUMBER_ONLY,
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
    ],
    buttonBack: true,
    buttonNext: true,
  },
  {
    id: "screen4",
    title: 'How do you want to pay for your policy?',
    apiName: 'paymentType',
    description: '',
    createdAt: "2019-06-12T18:55:05.393Z",
    updatedAt: "2019-06-12T19:00:51.566Z",
    components: [
      {
        type: RADIO_BUTTON_GROUP,
        apiName: 'radioButtonGroup1',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
        checkboxList: [
          {
            type: RADIO_BUTTON,
            title: 'I want to pay Newfront',
            apiName: 'payNewfront',
            required: false,
            description: 'You\'l pay Newfront instead of paying each insurance company separately',
            checked: true,
            hint: 'hint text',
            createdAt: "2019-06-12T18:55:05.393Z",
            updatedAt: "2019-06-12T19:00:51.566Z",
          },
          {
            type: RADIO_BUTTON,
            title: 'I want to pay the insurance company directly',
            apiName: 'payInsuranceComp',
            required: false,
            description: '',
            checked: false,
            createdAt: "2019-06-12T18:55:05.393Z",
            updatedAt: "2019-06-12T19:00:51.566Z",
            hint: 'hint text',
          },
        ],
      },
      {
        type: INPUT_TEXT,
        title: 'Years in Business',
        apiName: 'yearsInBusiness',
        required: false,
        description: '',
        placeholder: 'Please type number of years',
        format: NUMBER_ONLY,
      },
    ],
    buttonBack: true,
    buttonFinish: true,
  },
];

export const CyberInsuranceAPI = [
  {
    applicationTitle: 'Cyber Insurance',
    applicationName: 'cyberInsurance',
    createdAt: "2019-06-12T18:55:05.393Z",
    updatedAt: "2019-06-12T19:00:51.566Z",
  },
  {
    id: "screen1",
    title: 'Who is the primary contact for this policy',
    apiName: 'primaryContact',
    description: 'This person will receive all communications...',
    createdAt: "2019-06-12T18:55:05.393Z",
    updatedAt: "2019-06-12T19:00:51.566Z",
    components: [
      {
        type: INPUT_TEXT,
        apiName: 'fullName',
        title: 'Full Name',
        required: true,
        description: '',
        placeholder: 'Please type full name',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: TEXT_AREA,
        apiName: 'role',
        title: 'Role',
        required: false,
        description: '',
        placeholder: 'Please type role',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: PHONE_NUMBER,
        apiName: 'phoneNumber',
        title: 'Phone Number',
        required: true,
        description: '',
        placeholder: 'Please type phone number',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
    ],
    buttonNext: true,
  },
  {
    id: "screen2",
    title: 'Tell us about your company',
    apiName: 'companyInfo',
    description: '',
    createdAt: "2019-06-12T18:55:05.393Z",
    updatedAt: "2019-06-12T19:00:51.566Z",
    components: [
      {
        type: INPUT_TEXT,
        title: 'Company Name',
        apiName: 'companyName',
        required: true,
        description: '',
        placeholder: 'Please type full name',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: INPUT_TEXT,
        title: 'What is your Federal Employer Identification Number? (FEIN)',
        apiName: 'fein',
        required: true,
        description: '',
        placeholder: 'Please type your FEIN',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: INPUT_TEXT,
        title: 'Years in Business',
        apiName: 'yearsInBusiness',
        required: false,
        description: '',
        placeholder: 'Please type number of years',
        format: NUMBER_ONLY,
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: INPUT_TEXT,
        title: 'Number of Locations',
        apiName: 'numberOfLocations',
        required: false,
        description: '',
        placeholder: 'Please type number of locations',
        format: NUMBER_ONLY,
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: INPUT_TEXT,
        title: 'In which states do you operate',
        apiName: 'statesList',
        required: false,
        description: '',
        placeholder: 'Please type states names',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
    ],
    buttonBack: true,
    buttonNext: true,
  },
  {
    id: "screen3",
    title: 'Tell us about your employees',
    apiName: 'employeesInfo',
    description: '',
    createdAt: "2019-06-12T18:55:05.393Z",
    updatedAt: "2019-06-12T19:00:51.566Z",
    components: [
      {
        type: INPUT_TEXT,
        title: "What's the name of the clinic, physician, or ER used for work injuries?",
        apiName: 'providerName',
        required: false,
        description: '',
        placeholder: 'Please type name of providers',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: CHECK_BOX_GROUP,
        apiName: 'checkBoxGroup1',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
        checkboxList: [
          {
            type: CHECK_BOX,
            title: 'Do you provide group medical insurance?',
            apiName: 'chbMedicalInsurance',
            required: false,
            description: '',
            checked: false,
            hint: 'hint text',
            createdAt: "2019-06-12T18:55:05.393Z",
            updatedAt: "2019-06-12T19:00:51.566Z",
          },
          {
            type: CHECK_BOX,
            title: 'Do you offer a retirement pension plan?',
            apiName: 'chbPensionPlan',
            required: false,
            description: '',
            checked: false,
            hint: 'hint text',
            createdAt: "2019-06-12T18:55:05.393Z",
            updatedAt: "2019-06-12T19:00:51.566Z",
          },
          {
            type: CHECK_BOX,
            title: 'Do you give paid vacation?',
            apiName: 'chbPaidVacation',
            required: false,
            description: '',
            checked: false,
            setVisibleComponent: 'componentName',
            setRequiredComponent: 'paidVacationDetails',
            hint: 'hint text',
            createdAt: "2019-06-12T18:55:05.393Z",
            updatedAt: "2019-06-12T19:00:51.566Z",
          },
        ],
      },
      {
        type: INPUT_TEXT,
        title: 'Years in Business',
        apiName: 'yearsInBusiness',
        required: false,
        description: '',
        placeholder: 'Please type number of years',
        format: NUMBER_ONLY,
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
    ],
    buttonBack: true,
    buttonNext: true,
  },
  {
    id: "screen4",
    title: 'How do you want to pay for your policy?',
    apiName: 'paymentType',
    description: '',
    createdAt: "2019-06-12T18:55:05.393Z",
    updatedAt: "2019-06-12T19:00:51.566Z",
    components: [
      {
        type: RADIO_BUTTON_GROUP,
        apiName: 'radioButtonGroup1',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
        checkboxList: [
          {
            type: RADIO_BUTTON,
            title: 'I want to pay Newfront',
            apiName: 'payNewfront',
            required: false,
            description: 'You\'l pay Newfront instead of paying each insurance company separately',
            checked: true,
            hint: 'hint text',
            createdAt: "2019-06-12T18:55:05.393Z",
            updatedAt: "2019-06-12T19:00:51.566Z",
          },
          {
            type: RADIO_BUTTON,
            title: 'I want to pay the insurance company directly',
            apiName: 'payInsuranceComp',
            required: false,
            description: '',
            checked: false,
            createdAt: "2019-06-12T18:55:05.393Z",
            updatedAt: "2019-06-12T19:00:51.566Z",
            hint: 'hint text',
          },
        ],
      },
      {
        type: INPUT_TEXT,
        title: 'Years in Business',
        apiName: 'yearsInBusiness',
        required: false,
        description: '',
        placeholder: 'Please type number of years',
        format: NUMBER_ONLY,
      },
    ],
    buttonBack: true,
    buttonFinish: true,
  },
];

export const FarmInsuranceAPI = [
  {
    applicationTitle: 'Farm Insurance',
    applicationName: 'farmInsurance',
    createdAt: "2019-06-12T18:55:05.393Z",
    updatedAt: "2019-06-12T19:00:51.566Z",
  },
  {
    id: "screen1",
    title: 'Who is the primary contact for this policy',
    apiName: 'primaryContact',
    description: 'This person will receive all communications...',
    createdAt: "2019-06-12T18:55:05.393Z",
    updatedAt: "2019-06-12T19:00:51.566Z",
    components: [
      {
        type: INPUT_TEXT,
        apiName: 'fullName',
        title: 'Full Name',
        required: true,
        description: '',
        placeholder: 'Please type full name',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: TEXT_AREA,
        apiName: 'role',
        title: 'Role',
        required: false,
        description: '',
        placeholder: 'Please type role',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: PHONE_NUMBER,
        apiName: 'phoneNumber',
        title: 'Phone Number',
        required: true,
        description: '',
        placeholder: 'Please type phone number',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
    ],
    buttonNext: true,
  },
  {
    id: "screen2",
    title: 'Tell us about your company',
    apiName: 'companyInfo',
    description: '',
    createdAt: "2019-06-12T18:55:05.393Z",
    updatedAt: "2019-06-12T19:00:51.566Z",
    components: [
      {
        type: INPUT_TEXT,
        title: 'Company Name',
        apiName: 'companyName',
        required: true,
        description: '',
        placeholder: 'Please type full name',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: INPUT_TEXT,
        title: 'What is your Federal Employer Identification Number? (FEIN)',
        apiName: 'fein',
        required: true,
        description: '',
        placeholder: 'Please type your FEIN',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: INPUT_TEXT,
        title: 'Years in Business',
        apiName: 'yearsInBusiness',
        required: false,
        description: '',
        placeholder: 'Please type number of years',
        format: NUMBER_ONLY,
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: INPUT_TEXT,
        title: 'Number of Locations',
        apiName: 'numberOfLocations',
        required: false,
        description: '',
        placeholder: 'Please type number of locations',
        format: NUMBER_ONLY,
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: INPUT_TEXT,
        title: 'In which states do you operate',
        apiName: 'statesList',
        required: false,
        description: '',
        placeholder: 'Please type states names',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
    ],
    buttonBack: true,
    buttonNext: true,
  },
  {
    id: "screen3",
    title: 'Tell us about your employees',
    apiName: 'employeesInfo',
    description: '',
    createdAt: "2019-06-12T18:55:05.393Z",
    updatedAt: "2019-06-12T19:00:51.566Z",
    components: [
      {
        type: INPUT_TEXT,
        title: "What's the name of the clinic, physician, or ER used for work injuries?",
        apiName: 'providerName',
        required: false,
        description: '',
        placeholder: 'Please type name of providers',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
      {
        type: CHECK_BOX_GROUP,
        apiName: 'checkBoxGroup1',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
        checkboxList: [
          {
            type: CHECK_BOX,
            title: 'Do you provide group medical insurance?',
            apiName: 'chbMedicalInsurance',
            required: false,
            description: '',
            checked: false,
            hint: 'hint text',
            createdAt: "2019-06-12T18:55:05.393Z",
            updatedAt: "2019-06-12T19:00:51.566Z",
          },
          {
            type: CHECK_BOX,
            title: 'Do you offer a retirement pension plan?',
            apiName: 'chbPensionPlan',
            required: false,
            description: '',
            checked: false,
            hint: 'hint text',
            createdAt: "2019-06-12T18:55:05.393Z",
            updatedAt: "2019-06-12T19:00:51.566Z",
          },
          {
            type: CHECK_BOX,
            title: 'Do you give paid vacation?',
            apiName: 'chbPaidVacation',
            required: false,
            description: '',
            checked: false,
            setVisibleComponent: 'componentName',
            setRequiredComponent: 'paidVacationDetails',
            hint: 'hint text',
            createdAt: "2019-06-12T18:55:05.393Z",
            updatedAt: "2019-06-12T19:00:51.566Z",
          },
        ],
      },
      {
        type: INPUT_TEXT,
        title: 'Years in Business',
        apiName: 'yearsInBusiness',
        required: false,
        description: '',
        placeholder: 'Please type number of years',
        format: NUMBER_ONLY,
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
      },
    ],
    buttonBack: true,
    buttonNext: true,
  },
  {
    id: "screen4",
    title: 'How do you want to pay for your policy?',
    apiName: 'paymentType',
    description: '',
    createdAt: "2019-06-12T18:55:05.393Z",
    updatedAt: "2019-06-12T19:00:51.566Z",
    components: [
      {
        type: RADIO_BUTTON_GROUP,
        apiName: 'radioButtonGroup1',
        hint: 'hint text',
        createdAt: "2019-06-12T18:55:05.393Z",
        updatedAt: "2019-06-12T19:00:51.566Z",
        checkboxList: [
          {
            type: RADIO_BUTTON,
            title: 'I want to pay Newfront',
            apiName: 'payNewfront',
            required: false,
            description: 'You\'l pay Newfront instead of paying each insurance company separately',
            checked: true,
            hint: 'hint text',
            createdAt: "2019-06-12T18:55:05.393Z",
            updatedAt: "2019-06-12T19:00:51.566Z",
          },
          {
            type: RADIO_BUTTON,
            title: 'I want to pay the insurance company directly',
            apiName: 'payInsuranceComp',
            required: false,
            description: '',
            checked: false,
            createdAt: "2019-06-12T18:55:05.393Z",
            updatedAt: "2019-06-12T19:00:51.566Z",
            hint: 'hint text',
          },
        ],
      },
      {
        type: INPUT_TEXT,
        title: 'Years in Business',
        apiName: 'yearsInBusiness',
        required: false,
        description: '',
        placeholder: 'Please type number of years',
        format: NUMBER_ONLY,
      },
    ],
    buttonBack: true,
    buttonFinish: true,
  },
];