const showInput = document.getElementById('input');
const clickTone = new Audio('buttonclick.mp3');
const equaltone = new Audio('equaltone.mp3')

function appendToInput(input){
    clickTone.play()
    showInput.value += input
};

function del(){
    clickTone.play()
    showInput.value = showInput.value.slice(0, -1);
}

function clearAll(){
    clickTone.play()
    showInput.value = ""
};

function calculate(){
    equaltone.play()
   try{
    let ans= eval(showInput.value);
    showInput.value = ans
   }
   catch(error){
    showInput.value = "syntax error"
   }
    
    
}