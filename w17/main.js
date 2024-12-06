import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cbfpt.js"
import { FORM, FNAMEEL, LNAMEEL, SUBMIT } from "./global.js";
import {saveLS, cfpData} from "./storage.js"
import { FP } from "./fp.js";




const start = function(...i) {
  const houseHoldPTS = determineHouseHoldPts(i[2]);
  const houseSizePTS = determineHouseSizePts(i[3]);
  const total = houseHoldPTS + houseSizePTS;
  const firstName = FORM.firstname.value
  const lastName = FORM.lastname.value
  cfpData.push( {
    fname: i[0],
    lname: i[1],
    houseM: i[2],
    houseS: i[3],
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
    
  } )
}



renderTbl(cfpData)

const determineRecycleItems = e => {
  const numberChecked = document.querySelectorAll('recycle:checked').length
  return {
    Glass: e.target.Glass.checked,
    plastic: e.target.plastic.checked,
    Paper: e.target.Paper.checked,
    Alumnium: e.target.Alumnium.checked,
    Steel: e.target.Steel.checked,
    Foodwaste: e.target.Foodwaste.checked,
    recyclePoints: (24 -(numberChecked * 4))
  }
}




FORM.addEventListener('submit', function(e){
  e.preventDefault()
  //const recycleObj = determineRecycleItems(e)
if (FNAMEEL.value !== '' && LNAMEEL.value !== '')  {
  SUBMIT.textContent = ''

  const fpObj = new FP(
    FNAMEEL.value,
    LNAMEEL.value,
    parseInt(e.target.housem.value),
    e.target.houses.value,
    e.target.foodChoice.value,
    e.target.foodSource.value,
    parseInt(e.target.water.value),
    e.target.DWandWM.checked,
    parseInt(e.target.purchases.value),
    parseInt(e.target.waste.value),
    determineRecycleItems(e),
    parseInt(e.target.vehicle.value), 
    parseInt(e.target.publicT.value), 
    parseInt(e.target.flights.value),
  );
  cfpData.push(fpObj)
  saveLS(cfpData)
  renderTbl(cfpData)
  FORM.reset()
} else {
  
  document.getElementById("submitError").textContent ="Form requires first and last name"
}



})

//const add2 = function(...a){
//  return 2 + a(3)
//}

//const result = add2(1, 2, 3, 4)
//spread argument

//IIFE

//const a = 3

//(function(a){
  //console.log("inside IIFE")
  //console.log(a)

//})(a)

// Function to validate a single field
const validateField = function(event) {
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


//const me = {
  ///name: "Madison",
  //hairColor: "Black",
 // location: "home",
  //introduce: function() {
    //console.log(`This is ${this.name} with ${this.hairColor} hair and in this ${this.location}`)
  //}

//}

//const you = {
  //name: "Jan",
  //hairColor: "Brown",
  //location: "home",
  //introduce: function() {
   // console.log(`This is ${this.name} with ${this.hairColor} hair and in this ${this.location}`)
  //}

//}

//me.introduce()
//you.introduce()

//class Human {
  //constructor(name, hairColor, location){
    //this.name = name
    //this.hairColor = hairColor
    //this.location = location
  //}
  //introduce() {
    //console.log(`This is ${this.name} with ${this.hairColor} hair and in this ${this.location}`)
  //}
//}

//const madison = new Human("Madison","Black", "Home")
//const jan = new Human("Jan","Brown", "Home")
//madison.introduce()
//jan.introduce()
//madison.hrv = 50