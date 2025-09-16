const inputGiven=document.querySelector("#a");
const buttonGiven=document.querySelector("#aa");
buttonGiven.addEventListener("click",table);
function table(){
    const number=inputGiven.value;
    for(let i=1;i<=10;i++){
        console.log(number*i);
    }
    inputGiven.value="";
}