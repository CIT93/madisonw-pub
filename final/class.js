 

class ACT {
  constructor(
    first,
    todaysDate,
    energyScale,
    decidedActivity,
    hunger
  ) {
    this.first = first,
    this.todaysDate = todaysDate;
    this.energyScale = energyScale;
    this.decidedActivity = decidedActivity;
    this.hunger = hunger
    this.calactivityPoints();
    this.calenergyPoints()
    this.calTotal();
  }
  calactivityPoints() {
    if (this.decidedActivity === "Drawing")  {
      this.activityPoints = 5
    } else if (this.decidedActivity === "Exercising") {
      this.activityPoints = 8
    } else if (this.decidedActivity === "Watching TV") {
      this.activityPoints = 3
    } else if (this.decidedActivity === "Sleeping") {
      this.activityPoints = 2
    } else if (this.decidedActivity === "Cleaning Up") {
      this.activityPoints = 7
    }
  }

  
  calenergyPoints() {
    if(this.hunger.checked)
      { this.energyPoints = this.energyScale / 2} 
    else {
    this.energyPoints = this.energyScale}
  }





  calTotal() {
    this.total =
      this.activityPoints + this.energyScale
  }
}


export {ACT}