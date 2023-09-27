document.title = "project-js-6";
let date = new Date();
let color = "";
let div = document.getElementById("div");
if (date.getDay() === 0) {
    color = "red";
    div.innerHTML = "Sunday"; 
} else if (date.getDay() === 1) {
    color = "yellow";
    div.innerHTML = "Monday"; 
} else if (date.getDay() === 2) {
    color = "pink";
    div.innerHTML = "Tuesday"; 
} else if (date.getDay() === 3) {
    color = "green";
    div.innerHTML = "Wednesday"; 
} else if (date.getDay() === 4) {
    color = "orange";
    div.innerHTML = "Thursday"; 
} else if (date.getDay() === 5) {
    color = "blue";
    div.innerHTML = "Friday"; 
} else if (date.getDay() === 6) {
    color = "purple";
    div.innerHTML = "Saturday"; 
} else {
    color = "white";
    div.innerHTML = "No Day";
}
document.body.style.cssText = `
background-color: ${color};
margin: 0;
padding: 0;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-size: 40px;
`;
console.log("color ".toUpperCase() + color.toUpperCase() + " " + div.innerHTML.toUpperCase());
document.body.appendChild(div);