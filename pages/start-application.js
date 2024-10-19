import Image from 'next/image';
import { useState } from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import Button from '../components/Button';
import Checkbox from '../components/Checkbox';

import Heading from '../components/Heading';
import Input from '../components/Input';
import Radio from '../components/Radio';
import Select from '../components/Select';
import SEO from '../components/SEO';

const countries = [
  "",
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Arctic Ocean",
  "Aruba",
  "Ashmore and Cartier Islands",
  "Atlantic Ocean",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Baker Island",
  "Bangladesh",
  "Barbados",
  "Bassas da India",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Christmas Island",
  "Clipperton Island",
  "Cocos Islands",
  "Colombia",
  "Comoros",
  "Cook Islands",
  "Coral Sea Islands",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Democratic Republic of the Congo",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Europa Island",
  "Falkland Islands (Islas Malvinas)",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Guiana",
  "French Polynesia",
  "French Southern and Antarctic Lands",
  "Gabon",
  "Gambia",
  "Gaza Strip",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Glorioso Islands",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island and McDonald Islands",
  "Honduras",
  "Hong Kong",
  "Howland Island",
  "Hungary",
  "Iceland",
  "India",
  "Indian Ocean",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Jan Mayen",
  "Japan",
  "Jarvis Island",
  "Jersey",
  "Johnston Atoll",
  "Jordan",
  "Juan de Nova Island",
  "Kazakhstan",
  "Kenya",
  "Kingman Reef",
  "Kiribati",
  "Kerguelen Archipelago",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Midway Islands",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Navassa Island",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "North Korea",
  "North Sea",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pacific Ocean",
  "Pakistan",
  "Palau",
  "Palmyra Atoll",
  "Panama",
  "Papua New Guinea",
  "Paracel Islands",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn Islands",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Republic of the Congo",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Korea",
  "Spain",
  "Spratly Islands",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tromelin Island",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "USA",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Viet Nam",
  "Virgin Islands",
  "Wake Island",
  "Wallis and Futuna",
  "West Bank",
  "Western Sahara",
  "Yemen",
  "Yugoslavia",
  "Zambia",
  "Zimbabwe"
]


export default function Page() {

  const [ step, setStep ] = useState(1);
  const [ error, setError ] = useState([]);
  const [ form, setForm ] = useState({
      "your-last-name": "",
      "your-firstname": "",
      "your-surname": "",
      "your-dob": "",
      "your-gender": "",
      "your-ethnicity": "",
      "your-nationality": "",
      "file-cv": "",
      "your-street": "",
      "your-city": "",
      "your-postal-code": "",
      "your-email": "",
      "your-phone-number": "",
      "applying-for-bachelor-in": "",
      "applying-for-master-in": "",
      "seeking-financial-aid": "",
      "hearing-about-ase": "",
      "your-previous-education": "",
      "your-city-of-previous-education": "",
      "your-state-of-previous-education": "",
      "your-country-of-previous-education": "",
      "your-postcode-of-previous-education": "",
      "date-education-started": "",
      "date-education-ended": "",
      "your-Degree": "",
      "your-grade-point-average": "",
      "your-previous-education2": "",
      "your-city-of-previous-education2": "",
      "your-state-of-previous-education2": "",
      "your-country-of-previous-education2": "",
      "your-postcode-of-previous-education2": "",
      "date-education-started2": "",
      "date-education-ended2": "",
      "your-Degree2": "",
      "your-grade-point-average2": "",
      "your-previous-education3": "",
      "your-city-of-previous-education3": "",
      "your-state-of-previous-education3": "",
      "your-country-of-previous-education3": "",
      "your-postcode-of-previous-education3": "",
      "date-education-started3": "",
      "date-education-ended3": "",
      "your-Degree3": "",
      "your-grade-point-average3": "",
      "carrier-goals": "",
      "file-transcripts": "",
      "application-checklist": ""
  });

  const notRequired = [
    "your-previous-education2",
    "your-city-of-previous-education2",
    "your-state-of-previous-education2",
    "your-country-of-previous-education2",
    "your-postcode-of-previous-education2",
    "date-education-started2",
    "date-education-ended2",
    "your-Degree2",
    "your-grade-point-average2",
    "your-previous-education3",
    "your-city-of-previous-education3",
    "your-state-of-previous-education3",
    "your-country-of-previous-education3",
    "your-postcode-of-previous-education3",
    "date-education-started3",
    "date-education-ended3",
    "your-Degree3",
    "your-grade-point-average3",
    'hearing-about-ase',
  ];

  const lastStepField = [
    'your-phone-number',
    'seeking-financial-aid',
    'your-grade-point-average',
    "carrier-goals",
    "file-transcripts",
    "application-checklist",
  ];

  const handleForm = (e) => {
    (e.target.value === "") 
    && !notRequired.includes(e.target.name) 
    && !error.includes(e.target.name) 
    && setError([...error, e.target.name]);

    if(e.target.value) setError(error.filter(err => err !== e.target.name));
    setForm({...form, [e.target.name]: e.target.value})
  }

  const validateForm = (index) => {

    console.log('index', index);

    let formErrors = [];

    for(let property in form){
      if(notRequired.includes(property)) continue;

      if(form[property] === ""){ 
        formErrors = [ ...formErrors, property ];
      };

      console.log(lastStepField[step-1]);
      if(lastStepField[step-1] === property) break;
    }

    if(formErrors.length > 0) return setError(formErrors);
    setStep(index);
  }

  return (
    <>

      <SEO
        title="Start Application"
        description="Apply into ASE"
        image="/static/img/financial-aid.jpg"
      />

      <section className='sticky top-0 lg:py-20 lg:px-16 py-12 px-5 max-w-6xl mx-auto overflow-auto text-sm h-[100vh]'>

        <div className='sticky top-0 grid grid-cols-1 lg:grid-cols-12 items-start gap-8 max-w-5xl mx-auto'>

          <div className='hidden lg:col-span-1 lg:flex flex-col gap-2 sticky top-0'>

            {[1,2,3,4,5,6].map((index) => (
              <div className='flex flex-col items-center h-24' key={index}>

                <div className=''>
                  <div onClick={() => validateForm(index)} className={`relative grid place-content-center w-12 h-12 text-2xl text-white font-bold outline-2 ${index >= step ? 'outline-dashed' : 'outline' } ${index <= step ? 'outline-app-dark' : 'outline-neutral-400' } outline-offset-4 ${index <= step ? 'bg-app-dark' : 'bg-neutral-400'} rounded-full`}>{index}</div>
                </div>
                {index !== 6 && <div className={`w-[2px] h-full  ${index < step ? 'bg-app-dark' : 'bg-neutral-400'} translate-y-1`}></div>}

              </div>
            ))}

          </div>

          <div className='lg:col-span-11 space-y-8'>

            <div className='flex justify-between items-center'>
              <div className='relative w-24 h-24'>
                <Image 
                  src="/static/img/logo.png"
                  layout='fill'
                  objectFit='contain'
                  objectPosition='center'
                  alt='logo'
                />
              </div>

              <div className='text-2xl uppercase font-bold'>
                Application Form
              </div>
            </div>

            <div className='space-y-2'>
              <Heading className="!text-left !text-app-dark">Step {step}</Heading>
              <p className=''>Fields with (<span className='text-red-600'>*</span>) are required.</p>
            </div>

            {<div className={`space-y-8 ${step !== 1 ? 'hidden' : 'block'}`}>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <p className='text-xl font-bold lg:col-span-3'>Personal Information</p>

                <Input
                  error={error} 
                  name="your-firstname"
                  label="First Name"
                  onChange={handleForm}
                  required
                />

                <Input
                  error={error} 
                  name="your-last-name"
                  label="Last Name"
                  onChange={handleForm}
                  required
                />

                <Input
                  error={error} 
                  name="your-surname"
                  label="Other Names"
                  onChange={handleForm}
                  required
                />

                <Input
                  error={error} 
                  name="your-dob"
                  type="date"
                  label="Date of Birth"
                  onChange={handleForm}
                  required
                />

                <Radio
                  error={error} 
                  name="your-gender"
                  label="Gender"
                  radioOpts={["Male", "Female"]}
                  onChange={handleForm}
                  required
                />

                <Input
                  error={error} 
                  name="your-ethnicity"
                  label="Ethnicity"
                  onChange={handleForm}
                  required
                />

                <Select 
                  error={error}
                  name="your-nationality"
                  label="Nationality"
                  options={countries}
                  onChange={handleForm}
                  required
                />

                <Input
                  error={error} 
                  name="file-cv"
                  type="file"
                  label="Attach your CV/Resume"
                  onChange={handleForm}
                  required
                />
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <p className='text-xl font-bold lg:col-span-3'>Mailing Address</p>

                <Input
                  error={error} 
                  name="your-street"
                  label="Street Address"
                  onChange={handleForm}
                  required
                />

                <Input
                  error={error} 
                  name="your-city"
                  label="City"
                  onChange={handleForm}
                  required
                />

                <Input
                  error={error} 
                  name="your-postal-code"
                  label="Postal Code"
                  onChange={handleForm}
                  required
                />

              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <p className='text-xl font-bold lg:col-span-3'>Contact Information</p>

                <Input
                  error={error} 
                  name="your-email"
                  label="Email"
                  type="email"
                  onChange={handleForm}
                  required
                />

                <Input
                  error={error} 
                  name="your-phone-number"
                  label="Phone"
                  onChange={handleForm}
                  required
                />

              </div>

            </div>}


            {<div className={`space-y-8 ${step !== 2 ? 'hidden' : 'block'}`}>

              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <p className='text-xl font-bold lg:col-span-2'>Personal Information</p>

                <Radio
                  error={error} 
                  name="applying-for-bachelor-in"
                  dir="col"
                  radioOpts={[
                    "None",
                    "Statistics Economics",
                    "Statistics – Computer Science",
                    "Management – Marketing",
                    "Finance – Accounting",
                  ]}
                  label="Applying for Bachelor"
                  onChange={handleForm}
                  required
                />

                <Radio
                  error={error} 
                  name="applying-for-master-in"
                  dir="col"
                  radioOpts={[
                    "None",
                    "Mathematics, Economics and Statistics",
                    "Business Administration",
                  ]}
                  label="Applying for Masters"
                  onChange={handleForm}
                  required
                />

                <Radio
                  error={error} 
                  name="seeking-financial-aid"
                  dir="col"
                  radioOpts={[
                    "Yes",
                    "No",
                  ]}
                  label="Do you need assistance to find housing?"
                  onChange={handleForm}
                  required
                />
                
                <Checkbox
                  error={error} 
                  name="hearing-about-ase"
                  dir="col"
                  options={[
                    "Website/ Site Web",
                    "Direct Email/ Email Direct",
                    "Facebook",
                    "Poster",
                    "ASE Information Session",
                    "Friend or Contact",
                    "Other",
                  ]}
                  label="How did you hear about us?"
                  onChange={handleForm}
                  multiple
                />

              </div>

            </div>}

            {<div className={`space-y-8 ${step !== 3 ? 'hidden' : 'block'}`}>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <p className='text-xl font-bold lg:col-span-3'>Educational Background</p>

                <div className='lg:col-span-2'>
                  <Input
                    error={error} 
                    name="your-previous-education"
                    label="University, College or Educational Institution"
                    onChange={handleForm}
                    required
                  />
                </div>

                <p className='text-xl font-bold lg:col-span-3'>Institution Address </p>
                <Input
                  error={error} 
                  name="your-city-of-previous-education"
                  label="City"
                  onChange={handleForm}
                  required
                />

                <Input
                  error={error} 
                  name="your-state-of-previous-education"
                  label="State/Province/Region"
                  onChange={handleForm}
                  required
                />

                <Select 
                  error={error}
                  name="your-country-of-previous-education"
                  label="Country"
                  options={countries}
                  onChange={handleForm}
                  required
                />

                <Input
                  error={error} 
                  name="your-postcode-of-previous-education"
                  label="Postal Code"
                  onChange={handleForm}
                  required
                />
                
                <div className='lg:col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4'>
                  <p className='text-xs font-bold lg:col-span-3'>Years Attended</p>
                  <Input
                    error={error} 
                    name="date-education-started"
                    type="date"
                    label="From"
                    onChange={handleForm}
                    required
                  />

                  <Input
                    error={error} 
                    name="date-education-ended"
                    type="date"
                    label="To"
                    onChange={handleForm}
                    required
                  />
                </div>

                <div className='lg:col-start-1 lg:col-span-2'>
                  <Input
                    error={error} 
                    name="your-Degree"
                    label="Degree"
                    onChange={handleForm}
                    required
                  />
                </div>

                <Input
                  error={error} 
                  name=""
                  type="date"
                  label="Date degree expected or received"
                  onChange={handleForm}
                  required
                />

                <Input
                  error={error} 
                  name="your-grade-point-average"
                  type="number"
                  max="4"
                  label="Current Grade Point Average (4 Points)"
                  onChange={handleForm}
                  required
                />

              </div>

            </div>}

            {<div className={`space-y-8 ${step !== 4 ? 'hidden' : 'block'}`}>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <p className='text-xl font-bold lg:col-span-3'>Educational Background 2 (Optional)</p>

                <div className='lg:col-span-2'>
                  <Input
                    error={error} 
                    name="your-previous-education2"
                    label="Name of Educational Institution 2"
                    onChange={handleForm}
                    
                  />
                </div>

                <p className='text-xl font-bold lg:col-span-3'>Institution Address </p>
                <Input
                  error={error} 
                  name="your-city-of-previous-education2"
                  label="City"
                  onChange={handleForm}
                  
                />

                <Input
                  error={error} 
                  name="your-state-of-previous-education2"
                  label="State/Province/Region"
                  onChange={handleForm}
                  
                />

                <Select 
                  error={error}
                  name="your-country-of-previous-education2"
                  label="Country"
                  options={countries}
                  onChange={handleForm}
                  
                />

                <Input
                  error={error} 
                  name="your-postcode-of-previous-education2"
                  label="Postal Code"
                  onChange={handleForm}
                  
                />
                
                <div className='lg:col-span-3 grid lg:grid-cols-3 gap-x-8 gap-y-4'>
                  <p className='text-xs font-bold lg:col-span-3'>Years Attended</p>
                  <Input
                    error={error} 
                    name="date-education-started2"
                    type="date"
                    label="From"
                    onChange={handleForm}

                  />

                  <Input
                    error={error} 
                    name="date-education-ended2"
                    type="date"
                    label="To"
                    onChange={handleForm}
                  />
                </div>

                <div className='lg:col-start-1 lg:col-span-2'>
                  <Input
                    error={error} 
                    name="your-Degree2"
                    label="Degree"
                    onChange={handleForm}
                  />
                </div>

                <Input
                  error={error} 
                  name=""
                  type="date"
                  label="Date degree expected or received"
                  onChange={handleForm}
                />

                <Input
                  error={error} 
                  name="your-grade-point-average2"
                  type="number"
                  max="4"
                  label="Current Grade Point Average (4 Points)"
                  onChange={handleForm}
                />

              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <p className='text-xl font-bold lg:col-span-3'>Educational Background 3 (Optional)</p>

                <div className='lg:col-span-2'>
                  <Input
                    error={error} 
                    name="your-previous-education3"
                    label="Name of Educational Institution 3"
                    onChange={handleForm}
                    
                  />
                </div>

                <p className='text-xl font-bold lg:col-span-3'>Institution Address </p>
                <Input
                  error={error} 
                  name="your-city-of-previous-education3"
                  label="City"
                  onChange={handleForm}
                  
                />

                <Input
                  error={error} 
                  name="your-state-of-previous-education3"
                  label="State/Province/Region"
                  onChange={handleForm}
                  
                />

                <Select 
                  error={error}
                  name="your-country-of-previous-education3"
                  label="Country"
                  options={countries}
                  onChange={handleForm}
                />

                <Input
                  error={error} 
                  name="your-postcode-of-previous-education3"
                  label="Postal Code"
                  onChange={handleForm}
                  
                />
                
                <div className='lg:col-span-3 grid lg:grid-cols-3 gap-x-8 gap-y-4'>
                  <p className='text-xs font-bold lg:col-span-3'>Years Attended</p>
                  <Input
                    error={error} 
                    name="date-education-started3"
                    type="date"
                    label="From"
                    onChange={handleForm}

                  />

                  <Input
                    error={error} 
                    name="date-education-ended3"
                    type="date"
                    label="To"
                    onChange={handleForm}
                  />
                </div>

                <div className='lg:col-start-1 lg:col-span-2'>
                  <Input
                    error={error} 
                    name="your-Degree3"
                    label="Degree"
                    onChange={handleForm}
                  />
                </div>

                <Input
                  error={error} 
                  name=""
                  type="date"
                  label="Date degree expected or received"
                  onChange={handleForm}
                />

                <Input
                  error={error} 
                  name="your-grade-point-average3"
                  type="number"
                  max="4"
                  label="Current Grade Point Average (4 Points)"
                  onChange={handleForm}
                />

                
                <p className='text-xl font-bold lg:col-span-3'>Career Goals</p>
                <div className='lg:col-span-2'>
                  <Checkbox
                    error={error} 
                    name="carrier-goals"
                    dir="col"
                    options={[
                      "International Institutions",
                      "Research; academic",
                      "Public sector ; Government",
                      "Private sector ; Entrepreneurship",
                      "Other ",
                    ]}
                    label="Career goals"
                    onChange={handleForm}
                    multiple
                    required
                  />
                </div>

              </div>

            </div>}

            {<div className={`space-y-8 ${step !== 5 ? 'hidden' : 'block'}`}>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <p className='text-xl font-bold lg:col-span-3'>Please attach official university or college transcript(s)</p>

                <Input
                  error={error} 
                  name="file-transcripts"
                  type="file"
                  label="Attach your CV/Resume"
                  onChange={handleForm}
                  required
                />
              </div>

            </div>}

            {<div className={`space-y-8 ${step !== 6 ? 'hidden' : 'block'}`}>

              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <p className='text-xl font-bold lg:col-span-3'>Application Checklist</p>

                <div className='lg:col-span-2'>
                  <Checkbox
                    error={error} 
                    name="application-checklist"
                    dir="col"
                    options={[
                      "CV OR RESUME",
                      "OFFICIAL TRANSCRIPTS",
                    ]}
                    label="Documents Uploaded"
                    onChange={handleForm}
                    multiple
                    required
                  />
                </div>
              </div>

              <p className='font-bold lg:col-span-3'>
                The Bachelor is accredited by the Ivorian Government. / La Licence est accréditée par le gouvernement ivoirien
              </p>
              <p className='font-bold lg:col-span-3'>
                The Master is jointly offered together with IMSP / Le Master est offert en double diplomation avec l’IMSP
              </p>

            </div>}


            <div className='flex gap-4 py-4'>
              {step > 1 && <div className='w-28 text-center font-bold text-white bg-app-dark py-3 px-5 rounded-sm' onClick={() => setStep(step-1)}>Previous</div>}
              {step < 6 && <div className='w-28 text-center font-bold text-white bg-app-dark py-3 px-5 rounded-sm' onClick={() => validateForm(step+1)}>Next</div>}
              {step === 6 && <div className='w-28 text-center font-bold text-white bg-app-dark py-3 px-5 rounded-sm ml-auto'>Submit</div>}
            </div>
          </div>

        </div>

      </section>

    </>
  )
}
