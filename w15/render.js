import { FORM, TBL } from "./global.js"
import { saveLS } from "./storage.js"
import {total, avg} from "./average.js"

const renderTblHeading = function(data){
    
    const table = document.createElement("table")
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    const headingTextArr = ["Name","HouseHold","HouseSize","FoodChoice","Footprint","Actions"]

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
      FORM[1].value = obj.first
      FORM[2].value = obj.last
      FORM[3].value = obj.houseMembers
      FORM[4].value = obj.houseSize

      onUpdate(index, data)
      
    })
    return td
    
  }

  function averageRow(data){
const cell = document.createElement("td")
  }
  const renderTblBody = function(data){
    const tbody = document.createElement("tbody")
    data.forEach(function(obj, index){
      console.log(index)
      const tr = document.createElement("tr")
      for(const [key, value] of Object.entries(obj)){
        console.log (`key ${key} value ${value}`)
        if(key !== "last" && key !== "houseHoldPoints" && key !== "houseSizePoints" && key !== "foodChoicePoints"){
          const td = document.createElement("td")
          td.textContent = value
          tr.appendChild(td)
        } 
      }
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

    } 
   
  }

  export {renderTbl}

  // noting code along to the best of my abilty but something is wrong with results but I'm having a hard figuring out why.
  // Modules in javascript help put large scripts into chunks that can imported if needed. I have no questions.