const newelement = document.createElement("p")
newelement.innerHTML = "i like pizza!";
newelement.id = "myp"
document.body.appendChild(newelement)
console.log(newelement)



const buttonId = document.getElementById("buttonId");
buttonId.addEventListener("click", (countSelected) => {
  // const musicTypes = document.getElementById ("musicTypes")  
  // musicTypes
document.getElementById("creat_elementDIVId").textContent = "Denne teksten er endret med javaScript"

// const musicTypes = document.selectForm.musicTypes;
// console.log(`You have selected ${countSelected(musicTypes)} option(s).`); 
const javaScriptElement = document.createElement("p")
javaScriptElement.innerHTML = "nå er knappen trykt";
javaScriptElement.id = "myp"
document.body.appendChild(javaScriptElement)
// document.body.appendChild(hei)
// document.body.replaceChild(javaScriptElement,hei)
console.log (javaScriptElement)
function countSelected(){
(selectObject)
for (let j = 0; j < 2; j++) {
for (let x = 0; x < selectObject.javaScriptElement.length; x++){
  if (selectObject.javaScriptElement[x].selected){
    numberSelected++; 
  }
}return numberSelected;

}}})




