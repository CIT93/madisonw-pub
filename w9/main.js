import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cbfpt.js"
import { FORM, } from "./global.js";
import {saveLS, cfpData} from "./storage.js"

const firstNameEl = document.getElementById('firstName')

const lastNameEl = document.getElementById('lastName')

const submitEl = document.getElementById("submitError")


function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  const firstName = FORM.firstname.value
  const lastName = FORM.lastname.value
  cfpData.push( {
    fname: firstName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
    lname: lastName
  } )
}



renderTbl(cfpData)

firstNameEl.addEventListener('blur', validateField);
lastNameEl.addEventListener('blur', validateField);



FORM.addEventListener('submit', function(e){
  e.preventDefault()
  
  const firstName = FORM.firstname.value 
  const lastName = FORM.lastname.value
  const firstNameIsValid = firstNameEl.value !== ''
  const lastNameIsValid = lastNameEl.value !== ''
if (firstNameIsValid === true && lastNameIsValid === true)  {
  submitEl.textContent = ''
  const houseMembers = parseInt(FORM.housem.value)
  const houseSize = FORM.houses.value
  start(houseMembers,houseSize)
  saveLS(cfpData)
  renderTbl(cfpData)
  FORM.reset()
} else {
  
  document.getElementById("submitError").textContent ="Form requires first and last name"
}



})
// Function to validate a single field
function validateField (event) {
  const field = event.target.value;
  const fieldId = event.target.id;
  const fieldError = document.getElementById(`${fieldId}Error`);

  if (field === '') {
      fieldError.textContent = `${fieldId} is required`;
      event.target.classList.add('invalid');
  } else {
      fieldError.textContent = '';
      event.target.classList.remove('invalid');
  }

}