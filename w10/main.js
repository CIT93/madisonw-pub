import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cbfpt.js"
import { FORM, FNAMEEL, LNAMEEL, SUBMIT } from "./global.js";
import {saveLS, cfpData} from "./storage.js"




const start = (...i) => {
  const houseHoldPTS = determineHouseHoldPts(i[2]);
  const houseSizePTS = determineHouseSizePts(i[3]);
  const total = houseHoldPTS + houseSizePTS;
  const firstName = FORM.firstname.value
  const lastName = FORM.lastname.value
  cfpData.push( {
    fname: i[0],
    houseM: i[2],
    houseS: i[3],
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
    lname: i[1]
  } )
}



renderTbl(cfpData)





FORM.addEventListener('submit', e =>{
  e.preventDefault()
  
  
if (FNAMEEL.value !== '' && LNAMEEL.value !== '')  {
  SUBMIT.textContent = ''
  
  start(FNAMEEL.value,LNAMEEL.value, parseInt(FORM.housem.value),FORM.houses.value)
  saveLS(cfpData)
  renderTbl(cfpData)
  FORM.reset()
} else {
  
  document.getElementById("submitError").textContent ="Form requires first and last name"
}



})
//rest operator
//const add2 = function(...a){
 // return 2 + a(3)
//
//}

//const result = add2(1, 2, 3, 4)

//arrow function
//const add2 = (a) => 2 + a

//const result = add2(100)


//IIFE

//const a = 3

//(function(a){
  //console.log("inside IIFE")
 // console.log(a)

//})(a)

// Function to validate a single field
const validateField = (event) =>{
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
FNAMEEL.addEventListener('blur', validateField);
LNAMEEL.addEventListener('blur', validateField);