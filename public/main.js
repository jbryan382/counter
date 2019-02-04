// Step 4
// Added variable to hold value
let counter = 0

// Step 1
const main = () => {
	document.querySelector('p').textContent = 0
}

// Step 3
const increaseCounter = () => {
	console.log('button clicked')
	// Step 5
	// Increase variable 'counter' by 1
	// Update the HTML with new value
	counter = counter + 1
	// or counter++ which is short hand for line 16
	console.log(counter)
	// Hey DOM, find the <p> and set your textContent = counter
	document.querySelector('p').textContent = counter
}

const resetCounter = () => {
	console.log('resetting counter')
	counter = 0
	console.log('reset counter to' + counter)
	document.querySelector('p').textContent = counter
}
document.addEventListener('DOMContentLoaded', main)
// Step 2
// Go to HTML (DOM), find the buton, add event listener, listen for click
// event. When click event occurs run the function increase counter.
document
	.querySelector('.addonebutton')
	.addEventListener('click', increaseCounter)
document.querySelector('.reset').addEventListener('click', resetCounter)
