console.log("hello from inside the main.js file");

//let myVar;

const myVar = "madison";
const myVarType = typeof(myVar);
console.log("myVarType" + myVarType);
console.log(`myVarType" ${myVarType}`);



function runNow () {
    if(myVarType === "number") {
        console.log(`will 14 this line run?`)
    } else {
        console.log(`will 16 this line will run`)
    }    
}

runNow();
runNow();