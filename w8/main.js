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
    fname: firstName,
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
    //lname: lastName
  } )
}





 


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

