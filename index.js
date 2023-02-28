
const counterDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment-btn");
const decrementButton = document.getElementById("decrement-btn");
const saveButton = document.getElementById("save-btn");
const saveEl = document.getElementById("save-el");
const totalEl = document.getElementById("total-el");
const resetButton = document.getElementById("reset-btn");

let count = 0;
let total=0;

// Increment fuction 
incrementButton.addEventListener("click", ()=>{
    count++;
    counterDisplay.innerText = count;
});

// decrement function
decrementButton.addEventListener("click", ()=>{
    if((total===0 && count===0 )|| count<=-(total)){
        alert("Opps! Not Possible");
        return;
    }
    count--;
    counterDisplay.innerText = count;
});

// save function
saveButton.addEventListener("click",()=>{
    let entry = count + " _ ";
    saveEl.textContent += entry;
    total +=count;
    count = 0;
    counterDisplay.innerText = count;    
    totalEl.innerText = total;
});

// reset function
resetButton.addEventListener("click",()=>{
    count =0;
    total=0;
    totalEl.innerText = 0;
    counterDisplay.innerText = 0;
    saveEl.textContent = "Previous Enteries: ";
})

