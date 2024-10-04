const TBL =  document.getElementById("tab-data")
const FORM = document.getElementById("form")

function renderTblHeading(data){
    
    const table = document.createElement("table")
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    const headingTextArr = ["Name","HouseHold","HouseSize","Footprint","Actions"]

    headingTextArr.forEach(function(text){
      const th = document.createElement("th");
      th.textContent = text
      tr.appendChild(th)
    })
    thead.appendChild(tr)
    table.appendChild(thead)
    return table
   
  }
  function renderTblBtn(obj, index, data){
    const td = document.createElement("td")
    const btnEdit = document.createElement("button")
    const btnDel = document.createElement("button")
    btnEdit.textContent = "Edit"
    btnDel.textContent = "Del"
    td.appendChild(btnEdit)
    td.appendChild(btnDel)
    btnDel.addEventListener('click', function(e){
      console.log("hello")
      
      data.splice(index, 1);
      renderTbl(data)
      
    


    })
    btnEdit.addEventListener('click', function(e){
      FORM[1].value = obj.fname
      FORM[2].value = obj.lname
      FORM[3].value = obj.houseM
      FORM[4].value = obj.houseS

      data.splice(index, 1);
      renderTbl(data)
    })
    return td
    
  }
  function renderTblBody (data){
    const tbody = document.createElement("tbody")
    data.forEach(function(obj, index){
      console.log(index)
      const tr = document.createElement("tr")
      for(const [key, value] of Object.entries(obj)){
        console.log (`key ${key} value ${value}`)
        if(key !== "lname" && key !== "houseMPTS" && key !== "houseSPTS"){
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
   function renderTbl(data) {
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