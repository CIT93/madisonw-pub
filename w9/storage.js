const cfpData = getLS();

function saveLS(cfpData) {
    const serializedArr = JSON.stringify(cfpData)
    localStorage.setItem("cfp", serializedArr)
}

function getLS() {
    const retrievedArr = localStorage.getItem("cfp")
    if(retrievedArr !== null){
        return JSON.parse(retrievedArr)
    } else {
        return []
    }
}

export {cfpData, saveLS, getLS}