let sneha=document.getElementById("one")
let hari=document.getElementById("para")


let count=0
function inc(){
    count+=1;
    sneha.textContent=count;
}
function save(){
    hari.textContent+=count+"-";
    count=0
    sneha.textContent=count;
}

