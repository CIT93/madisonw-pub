import { FORM, TBL } from "./global.js"
import { saveLS } from "./store.js"






const renderTblHeading = function(data){
    
    const table = document.createElement("table")
    table.setAttribute("id","table-id")
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    const headingTextArr = ["First","Day","Activity","Fulfill. Score","Actions"]

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
      
      
      onUpdate(index, data)
    


    })
    btnEdit.addEventListener('click', function(e){
      FORM.firstName.value = obj.first
      FORM.todaysDate.value = obj.todaysDate
      FORM.decidedActivity.value = obj.decidedActivity
      FORM.energyScale.value = obj.energyScale
      
      
      onUpdate(index, data)
      
    })
    return td
    
  }

  
  const renderTblBody = data => {
    const tbody = document.createElement("tbody")
    data.forEach((obj, index) => {
      const tr = document.createElement("tr")
      const keys = ["first","todaysDate","decidedActivity","total"]
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
      
    } 
   
  }

  export {renderTbl}

  