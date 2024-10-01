const TBL =  document.getElementById("tab-data")


function renderTblHeading(data){
    TBL.innerHTML = ""
    const table = document.createElement("table")
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    //const headingTextArr = ["Name","HouseHold","HouseSize","Footprint","Actions"]
    const headingTextArr = ["Name","Footprint"]
    headingTextArr.forEach(function(text){
      const th = document.createElement("th");
      th.textContent = text
      tr.appendChild(th)
      console.log(tr)
    })
    thead.appendChild(tr)
    table.appendChild(thead)
    return table
   
  }
  
  function renderTbl(data) {
    const table = renderTblHeading()
    const tbody = document.createElement("tbody")
    
    //const trTextArr = [fname,houseM,houseS,cfptotal]
    data.forEach(function(obj){
      const tr = document.createElement("tr")
      const tdName = document.createElement("td")
      tdName.textContent = obj.fname
      const tdTotal = document.createElement("td")
      tdTotal.textContent = obj.cfpTotal
      
      tr.appendChild(tdName)
      tr.appendChild(tdTotal)
      tbody.appendChild(tr)
    })
    //const td = document.createElement("td")
    //const btnEdit = document.createElement("button")
    //const btnDel = document.createElement("button")
    //btnEdit.textContent = "Edit"
    //btnDel.textContent = "Del"
    //td.appendChild(btnEdit)
    //td.appendChild(btnDel)
    //tr.appendChild(td)
    //tbody.appendChild(tr)
    table.appendChild(tbody)
    TBL.appendChild(table)
   
  }

  export {renderTbl}

  // Modules in javascript help put large scripts into chunks that can imported if needed. I have no questions.