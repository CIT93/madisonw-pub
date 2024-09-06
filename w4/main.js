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
  
  return houseSizePoints
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
    } else {
        console.log("no update to points")
    }
    
    return houseHoldPoints
  }


console.log("global scope")
//let carbonFootprintPoints = 0;

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total])
}


start (5,"apartment");
start (4,"large");
start (3,"medium");
start (2,"small");
start (8,"large");
start (6,"medium");
start (1,"apartment");
start (7,"small");
start (9,"large");
start (7,"medium");

displayOutput()