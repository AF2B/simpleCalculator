//Insert param in display and return param num
let insert = (num)  => {document.querySelector(".display").innerHTML += num}

//Clean all display
let clean = () => {document.querySelector(".display").innerHTML = ""}

//Clean num in display one to one
let back = () => {
    display = document.querySelector(".display").innerHTML;
    document.querySelector(".display").innerHTML = display.substring(0, display.length - 1);
}

//Resolved operations in according to what pops up in display
let operations = () => {
    display = document.querySelector(".display").innerHTML;
    if (display) {
        document.querySelector(".display").innerHTML = eval(display);
    }else{
        document.querySelector(".display").innerHTML = "Nothing declared!";
    }
}

//Special rule, where it will perform the calculation with the logic of dividing the value by 100
let percentage = () => {
    display = document.querySelector(".display").innerHTML;
    document.querySelector(".display").innerHTML = display/100
}