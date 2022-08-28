const toDisplay = document.querySelector(".disp");



const input = document.querySelectorAll(".btn");
for(var i = 0; i < elements.lenght; i += 1) {
    toDisplay(i);
}

    
const output = () => {
    toDisplay.innerHTML += input;
};

output ();


//<button id="myBtn">Try it</button>
//
//<p id="demo">
//
//<script>
//const element = document.getElementById("myBtn");
//element.addEventListener("click", myFunction);
//
//function myFunction() {
//  document.getElementById("demo").innerHTML = "Hello World";
//}