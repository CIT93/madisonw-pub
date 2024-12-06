import { renderTbl } from "./table.js";
import { FORM, FNAMEEL, SUBMIT } from "./global.js";
import {saveLS, fulfillData} from "./store.js"
import { ACT } from "./class.js";








renderTbl(fulfillData)





FORM.addEventListener('submit', function(e){
  e.preventDefault()
if (FNAMEEL.value !== '')  {
  SUBMIT.textContent = ''

  const actObj = new ACT(
    FNAMEEL.value,
    e.target.todaysDate.value,
    parseInt(e.target.energyScale.value),
    e.target.decidedActivity.value,
    e.target.hunger.checked,
  );
  fulfillData.push(actObj)
  saveLS(fulfillData)
  renderTbl(fulfillData)
  FORM.reset()
} else {
  
  document.getElementById("submitError").textContent ="Form requires first name"
}



})


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



