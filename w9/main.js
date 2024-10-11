import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cbfpt.js"
import { FORM, lastnameV, firstnameV } from "./global.js";
import {saveLS, cfpData} from "./storage.js"




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

firstnameV.addEventListener('blur', validateField);
lastnameV.addEventListener('blur', validateField);



 







FORM.addEventListener('submit', function(e){
  e.preventDefault()
  const firstNameIsValid = firstnameV.value !== ''
  const lastNameIsValid = lastnameV.value !== ''
  const firstName = FORM.firstname.value 
  const lastName = FORM.lastname.value
if (firstNameIsValid === true && lastNameIsValid === true)  {
  const houseMembers = parseInt(FORM.housem.value)
  const houseSize = FORM.houses.value
  start(houseMembers,houseSize)
  saveLS(cfpData)
  renderTbl(cfpData)
}

FORM.reset()

})
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