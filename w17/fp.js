class FP {
  constructor(
    first,
    last,
    houseMembers,
    houseSize,
    foodChoice,
    foodSource,
    waterConsum,
    DWandWM,
    purchases,
    waste,
    recycle, 
    vehicle,
    publicT,
    flights,
  ) {
    this.first = first,
    this.last = last,
    this.houseMembers = houseMembers;
    this.houseSize = houseSize;
    this.foodChoice = foodChoice;
    this.foodSource = foodSource;
    this.waterConsumPoints = waterConsum;
    this.purchasePoints = purchases
    this.wastePoints = waste
    this.DWandWM = DWandWM
    this.recycle = recycle
    this.vehiclePoints = vehicle;
    this.publicTPoints = publicT; 
    this.flightPoints = flights; 
    this.calhouseHoldPoints();
    this.calhouseSizePoints();
    this.calfoodChoicePoints();
    this.calfoodSourcePoints();
    this.calWaterPoints()
    
    this.calTotal();
  }
  calhouseHoldPoints() {
    if (this.houseMembers === 1) {
      this.houseHoldPoints = 14;
    } else if (this.houseMembers === 2) {
      this.houseHoldPoints = 12;
    } else if (this.houseMembers === 3) {
      this.houseHoldPoints = 10;
    } else if (this.houseMembers === 4) {
      this.houseHoldPoints = 8;
    } else if (this.houseMembers === 5) {
      this.houseHoldPoints = 6;
    } else if (this.houseMembers === 6) {
      this.houseHoldPoints = 4;
    } else if (this.houseMembers > 6) {
      this.houseHoldPoints = 2;
    }
  }

  calhouseSizePoints() {
    if (this.houseSize === "large") {
      this.houseSizePoints = 10;
    } else if (this.houseSize === "medium") {
      this.houseSizePoints = 7;
    } else if (this.houseSize === "small") {
      this.houseSizePoints = 4;
    } else if (this.houseSize === "apartment") {
      this.houseSizePoints = 2;
    }
  }
  calfoodChoicePoints() {
    if (this.foodChoice === "domestic meat on a daily basis") {
      this.foodChoicePoints = 10;
    } else if (this.foodChoice === "domestic meat a few times per week") {
      this.foodChoicePoints = 8;
    } else if (this.foodChoice === "vegetarian") {
      this.foodChoicePoints = 4;
    } else if (this.foodChoice === "vegan or only eat wild meat") {
      this.foodChoicePoints = 2;
    }
  }
  calfoodSourcePoints() {
    if (this.foodSource === "packed") {
      this.foodSourcePoints = 12;
    } else if (this.foodSource === "balanced") {
      this.foodSourcePoints = 6;
    } else if (this.foodSource === "local") {
      this.foodSourcePoints = 2;
    }
  }
calWaterPoints() {
  if(this.DWandWM.checked)
    { this.WaterPoints = this.waterConsumPoints * 2} 
  else {
  this.WaterPoints = this.waterConsumPoints}
}


calTransportPoints() {
  this.transportPoints = this.vehicle + this.publicT + this.flights
}


  calTotal() {
    this.total =
      this.houseHoldPoints +
      this.houseSizePoints +
      this.foodChoicePoints +
      this.foodSourcePoints +
      this.WaterPoints +
      this.purchasePoints +
      this.wastePoints +
      this.recycle.recyclePoints +
      this.vehiclePoints +
      this.publicTPoints +
      this.flightPoints
  }
}
export {FP}