var bag = "";
function press(num){
    bag=bag+num;
    document.getElementById("screen").innerText=bag;
}

function compute(){
    var x = document.getElementById("screen").innerText
    var y = eval(x)
    document.getElementById("screen").innerText = y;
}


function acClear(){
document.getElementById("screen").innerText="";
bag="";


}
function oneClear(){
             
    var str=document.getElementById("screen").innerText
      str = str.slice(0,-1)
  bag = document.getElementById("screen").innerText=str;
    
     
    
              
}

