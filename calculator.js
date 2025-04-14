const showInput = document.getElementById('input');
const clickTone = new Audio('buttonclick.mp3');
const equaltone = new Audio('equaltone.mp3')

//funtion to show input on the display
function appendToInput(input){
    clickTone.play()
    showInput.value += input
};
// function to delete from back
function del(){
    clickTone.play()
    showInput.value = showInput.value.slice(0, -1);
}
//function to clear screen
function clearAll(){
    clickTone.play()
    showInput.value = ""
};
// function to perform calculations
function calculate(){
    equaltone.play()
   try{
    let ans= eval(showInput.value);
    showInput.value = ans
   }
   catch(error){
    showInput.value = "syntax error"
    setTimeout(
    () => {
        showInput.value = ''
    }, 1000
   )
   }
   
    
}
// keyboard integration
document.addEventListener('keydown',keyPress);

function keyPress(event){
    let key = event.key;

    if(/[\d\+\%\-\*\/\.]/.test(key)){
        appendToInput(key);
    }
    if(key === 'Enter'){
        event.preventDefault()
        calculate()
    }
    if(key === 'Backspace'){
        del()
    }
}
