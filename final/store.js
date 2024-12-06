

const saveLS = function(fulfillData) {
    const serializedArr = JSON.stringify(fulfillData)
    localStorage.setItem("fulfill", serializedArr)
}

const getLS = function() {
    const retrievedArr = localStorage.getItem("fulfill")
    if(retrievedArr !== null){
        return JSON.parse(retrievedArr)
    } else {
        return []
    }
}
const fulfillData = getLS();
export {fulfillData, saveLS, getLS}