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


 function displayOutObj(obj) {
   console.log(obj)
   const output = document.getElementById("output");
   const newH2 = document.createElement("h2");
   newH2.textContent = `Carbon Footprint = ${obj.cfpTotal}`;
   //const newH3 = document.createElement("h3");
   //newH3.textContent = 'Based on the number in and size of home'
   //const newP = document.createElement("p");
   //newP.textContent = `This number is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS}),`; 
   //newP.textContent += `and a ${obj.houseS} size of home (score:${obj.houseSPTS}).`;
   output.appendChild(newH2)
   //output.appendChild(newH3)
   //output.appendChild(newP)
 }

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePTS = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push( {
    houseM: houseHoldMembers,
    houseS: houseSize,
    houseMPTS: houseHoldPTS,
    houseSPTS: houseSizePTS,
    cfpTotal: total,
  } )
}

function displayOutput(){
   for (obj of cfpData){
   console.log(obj)
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.cfpTotal}`;
     const newH3 = document.createElement("h3");
     newH3.textContent = 'Based on the number in and size of home'
     const newP = document.createElement("p");
     newP.textContent = `This number is based on the number of people in the house of ${obj.houseM} (score: ${obj.houseMPTS} ),`; 
     newP.textContent += `and a ${obj.houseS} size of home (score:${obj.houseSPTS}).`;
     output.appendChild(newH2)
     output.appendChild(newH3)
     output.appendChild(newP)
  }
 }

//function displayOutput () {
  //for (let i = 0; i < cfpData.length; i++) {
    //console.log(i);
    //const output = document.getElementById("output");
    //const newH2 = document.createElement("h2");
    //newH2.textContent = `Carbon Footprint = ${cfpData[i][4]}`;
    //const newH3 = document.createElement("h3");
    //newH3.textContent = 'Based on the number in and size of home'
    //const newP = document.createElement("p");
    //newP.textContent = `This number is based on the number of people in the house of ${cfpData[i][0]} (score: ${cfpData[i][3]}),`; 
    //newP.textContent += ` and a ${cfpData[i][1]} size of home (score:${cfpData[i][2]}).`;
    //output.appendChild(newH2)
    //output.appendChild(newH3)
    //output.appendChild(newP)

  //}
//}

start (5,"apartment");
start (4,"large");
start (3,"medium");
start (2,"small");
start (8,"large");


displayOutput()
