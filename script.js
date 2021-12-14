function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function printOutput (num){
  document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-vlaue").innerText=num;
    }
    else{
        document.getElementById("output-vlaue").innerText=getFormattedNumber(num);
    }
}
 function getFormattedNumber(num){
     var n=number(num);
     var value=n.toLocalestring("en")
     return value;
 }
 function reverseNunberFormat(num){
     return Number(num.replace(/,/g,''));
 }
 var operator= document.getElementsNyClassName("operator");
 for(var i =0;i<operator.length;i++){
     operator[i].addEventListener('click',function(){

     });
 }
 var Number= document.getElementsNyClassName("number");
 for(var i =0;i<number.length;i++){
     number[i].addEventListener('click',function(){
         var output=reverseNumberFormat(getOutput());
         if(output=NaN){//IF OUT PUT IS number//
            output=output+this.id;
            printOutput(output);
        }
     });
    }