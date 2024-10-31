const FORM = document.getElementById("form")

const beginExercise = (exercise, repsNumber, time ) => {
    const output = document.getElementById("output")
    output.textContent = `It will take ${time}, based on your ${exercise} and your ${repsNumber} reps.`
}

FORM.addEventListener('submit', function(e){
e.preventDefault();
const exercise = form.exercise.value
const repsNumber = form.repsNumber.value
const time = form.time.value
beginExercise(exercise, repsNumber, time)


setTimeout(() => {
    output.textContent = "Stop Workout! Go take a break!🥤:D"
}, time * 4000)


})


