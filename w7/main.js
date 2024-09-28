import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cbfpt.js"

const FORM = document.getElementById("form")
const OUTPUT = document.getElementById("output")

const cfpData = [];





 

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  const firstName = FORM.firstname.value
  const lastName = FORM.lastname.value
  cfpData.push( {
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
    fname: firstName,
    lname: lastName
  } )
}

function displayOutput(){
   for (obj of cfpData){
    const newH2 = document.createElement("h2");
    newH2.textContent = `${obj.fname} ${obj.lname}'s Carbon Footprint:${obj.cfpTotal}`;
     const newH3 = document.createElement("h3");
     newH3.textContent = 'Based on the number in and size of home'
     const newP = document.createElement("p");
     newP.textContent = `This number is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS} ),`; 
     newP.textContent += `and a ${obj.houseS} size of home (score:${obj.houseSPTS}).`;
     OUTPUT.appendChild(newH2)
     OUTPUT.appendChild(newH3)
     OUTPUT.appendChild(newP)
  }
 }



 

//I had tried to take from the heading code function as a basis but I think I do not fully understand some parts.

// I have little idea on what caused the error as it first came as the code was written with something (either table or td) being undefined. I think it potentially may be due to td being in the scope of function.
FORM.addEventListener('submit', function(e){
  e.preventDefault()
const firstName = FORM.firstname.value 
const lastName = FORM.lastname.value
const houseMembers = parseInt(FORM.housem.value)
const houseSize = FORM.houses.value
start(houseMembers,houseSize)
OUTPUT.innerHTML = ""
//displayOutput()
renderTbl(cfpData)
FORM.reset()
})

// it is the correct score for apartment for me but for the code example, what it needed was correct value names.

// We want to have correct data so we have to make sure the user gives good data.