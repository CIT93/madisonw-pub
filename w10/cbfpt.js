 const determineHouseSizePts = (size = "small") => {
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
  
  
  
  const determineHouseHoldPts = (numberInHousehold = 3) => {
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

    export {determineHouseSizePts, determineHouseHoldPts}