const cfpData = [];


function determineHouseSizePts (size) {
  let houseSizePoints = 0;
  if (size === "large")  {
    houseSizePoints = 10
  } else if (size === "medium") {
    houseSizePoints = 7
  } else if (size === "small") {
    houseSizePoints = 4
  } else if (size === "apartment") {
    houseSizePoints = 2
  } 
  return houseSizePoints;
}



function determineHouseHoldPts(numberInHousehold) {
    console.log("Inside the function")
    let houseHoldPoints = 0
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
      houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
      houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
      houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
      houseHoldPoints = 6;
    } else if(numberInHousehold === 6) {
      houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
      houseHoldPoints = 2;
    } 
    return houseHoldPoints
  }




function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total])
}

function displayOutput(){
  for (arr of cfpData){
    console.log(arr)
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${arr[4]}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = 'Based on the number in and size of home'
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${arr[0]} (score: ${arr[3]}),`; 
    newP.textContent += `and a ${arr[1]} size of home (score:${arr[2]}).`;
    output.appendChild(newH2)
    output.appendChild(newH3)
    output.appendChild(newP)
  }
}



start (5,"apartment");
start (4,"large");
start (3,"medium");
start (2,"small");
start (8,"large");
start (6,"apartment");
start (1,"large");
start (7,"small");
start (2,"apartment");
start (10,"large");
start (1,"medium");

displayOutput()