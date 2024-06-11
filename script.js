let condition = true;
const smileys = ['😀', '😃', '😄', '😁', '😆'];
 const newelement = document.createElement("p")
    newelement.innerHTML = "i like pizza!";
    document.body.appendChild(newelement)
    console.log(newelement)
const buttonId = document.getElementById("buttonId");


    buttonId.addEventListener("mouseover", function() {
      
      // const musicTypes = document.getElementById ("musicTypes")  
      // musicTypes
      document.getElementById("creat_elementDIVId").textContent = "Denne teksten er endret med javaScript"

      // const musicTypes = document.selectForm.musicTypes;
      // console.log(`You have selected ${countSelected(musicTypes)} option(s).`); 
      const javaScriptElement = document.createElement("p")
      javaScriptElement.innerHTML = "nå er knappen trykt";
      document.body.appendChild(javaScriptElement)



      // document.body.appendChild(hei)
      // document.body.replaceChild(javaScriptElement,hei)
      console.log(javaScriptElement);
      // function countSelected(){
      // (selectObject)
      // for (let j = 0; j < 2; j++) {
      return javaScriptElement;
    });

 if (condition) {
  // for (let j = 0; j < 2; j++) {
      for (let i = 0; i < smileys.length; i++) {
          let p = document.createElement('p');
          
          p.textContent = smileys[i];
          console.log(p);
          document.querySelector('#creat_elementDIVId').appendChild(p);
      }
  } else {
    console.log(condition)
    console.log("Condition not met");

   



    


  }