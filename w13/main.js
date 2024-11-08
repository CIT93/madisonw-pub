const FORM = document.getElementById('form')
const OUT = document.getElementById('output')


function updateDOM(message, el) {
    const newEl = document.createElement(el)
    newEl.textContent = message
    OUT.appendChild(newEl)
}

const beginExercise = (exercise, repsNumber, time, fn ) => {
    return new Promise((resolve) => {
        fn(`It will take ${time}, based on your ${exercise} and your ${repsNumber} reps. "p"`)
    setTimeout(() => {
        resolve()
      fn(`Stop ${exercise}`, "h1")
    }, time * 1000)
    }

    )
    
}



FORM.addEventListener('submit', function(e){
e.preventDefault();
const exercise = e.target.exercise.value
const repsNumber = parseFloat(e.target.repsNumber.value)
const time = parseFloat(e.target.time.value)
beginExercise(exercise, repsNumber, time, updateDOM)

.catch((error) => {
   console.log(`Error has occured ${error}`)
}

)
FORM.reset()
})



