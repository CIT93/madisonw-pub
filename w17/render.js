import { FORM, TBL } from "./global.js"
import { saveLS } from "./storage.js"


const calculateAvg = (data) => {
  const reduceTotal = data.reduce((sum, ea) => sum + ea.total, 0)
  const tableRef = document.getElementById("table-id")
  let newTR = tableRef.insertRow(-1)
  let newTD = newTR.insertCell(0)
  let newTD_1 = newTR.insertCell(0)
  let newTD_2 = newTR.insertCell(0)
  //let newTD_3 = newTR.insertCell(0)
 // let newTD_4 = newTR.insertCell(0)
  let newLabl = document.createTextNode(`Average Footprint`)
  let newText = document.createTextNode(`${Math.floor(reduceTotal/data.length)}`)
  newTD_1.appendChild(newLabl)
  newTD.appendChild(newText)

}



const renderTblHeading = function(data){
    
    const table = document.createElement("table")
    table.setAttribute("id","table-id")
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    const headingTextArr = ["First","Last","Footprint Total","Actions"]

    headingTextArr.forEach(function(text){
      const th = document.createElement("th");
      th.textContent = text
      tr.appendChild(th)
    })
    thead.appendChild(tr)
    table.appendChild(thead)
    return table
   
  }

  const onUpdate = function(index, data){
    data.splice(index, 1 );
      saveLS(data)
      renderTbl(data)
  }





  const renderTblBtn = function(obj, index, data){
    const td = document.createElement("td")
    const btnEdit = document.createElement("button")
    const btnDel = document.createElement("button")
    btnEdit.textContent = "Edit"
    btnDel.textContent = "Del"
    td.appendChild(btnEdit)
    td.appendChild(btnDel)
    btnDel.addEventListener('click', function(e){
      console.log("hello")
      
      onUpdate(index, data)
    


    })
    btnEdit.addEventListener('click', function(e){
      FORM.firstName.value = obj.first
      FORM.lastName.value = obj.last
      FORM.housem.value = obj.houseMembers
      FORM.houses.value = obj.houseSize
      FORM.foodChoice.value = obj.foodChoice
      FORM.water.value = obj.waterConsumPoints.toString()
      FORM.purchases.value = obj.purchasePoints.toString()
      FORM.DWandWM.checked = obj.DWandWM
      FORM.Glass.checked = obj.recycle.Glass
      FORM.plastic.checked = obj.recycle.plastic
      FORM.Paper.checked = obj.recycle.Paper
      FORM.Alumnium.checked = obj.recycle.Alumnium
      FORM.Steel.checked = obj.recycle.Steel
      FORM.Foodwaste.checked = obj.recycle.Foodwaste
      FORM.waste.value = obj.wastePoints.toString()
      FORM.vehicle.value = obj.vehiclePoints
      FORM.publicT.value = obj.publicTPoints
      FORM.flights.value = obj.flightPoints
      onUpdate(index, data)
      
    })
    return td
    
  }

  
  const renderTblBody = data => {
    const tbody = document.createElement("tbody")
    data.forEach((obj, index) => {
      const tr = document.createElement("tr")
      const keys = ["first","last" ,"total"]
        keys.forEach(key => {
          const td = document.createElement("td")
          td.textContent = obj[key]
          tr.appendChild(td)
        })
      
      const td = renderTblBtn(obj, index, data )
      tr.appendChild(td)
      tbody.appendChild(tr)
    
    })
    return tbody
    
    
   
  }
   const renderTbl = function(data) {
    TBL.innerHTML = ""
    if(data.length !== 0 ){
      const table = renderTblHeading()
      const tbody = renderTblBody(data)
      table.appendChild(tbody)
      TBL.appendChild(table)
      calculateAvg(data)
    } 
   
  }

  export {renderTbl}

  // noting code along to the best of my abilty but something is wrong with results but I'm having a hard figuring out why.
  // Modules in javascript help put large scripts into chunks that can imported if needed. I have no questions.