'use strict';


// Saving all HTML DOMS in javascript
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

console.clear()
// Assigning Counter to map page circles activation
let currentActive = 1;

next.addEventListener('click', () => {

    // upon clicking the counter progress further and moving the progress bar along
    currentActive++;
    if(currentActive > circles.length){
        // next.classList.remove('active')
        currentActive = circles.length
    }
    activeUpdate();
})

prev.addEventListener('click', () => {

    // upon clicking the counter digresses further moving the progress bar backwards.
    currentActive--;
    if(currentActive < 1){
        // next.classList.remove('active')
        currentActive = 1
    }
    activeUpdate();
})

function activeUpdate() {

    // Extremely important in order to note the progress active circles. 
    circles.forEach((circle, idx) => {
        // ass we click next each number is added active class which helps in identifying which classes are active.
        // Since idx is index and index starts at 0 the numbers and 0 don't match in this program. But if the numbers started from 0 then maybe problems would occur. YOU KNOW WHAT LET ME CHECK. 
        // Ok so even changing the counter doesn't interrupt this flawless program
        if(idx < currentActive){
            circle.classList.add('active')
            console.log(idx, currentActive)
        }
        // as we click prev the active class gets removed from existing number
        else{
            circle.classList.remove('active')
        }

    })

    // We are storing all the active classes in here at each functional calling and then styling it with progress bar
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%"

    // basically button stylings
    if(currentActive === 1){
        next.disabled = false;
        prev.disabled = true;
    } else if (currentActive === circles.length){
        next.disabled = true;
        prev.disabled = false;
    } else if (currentActive < circles.length){
        next.disabled = false;
        prev.disabled = false;
    }

}