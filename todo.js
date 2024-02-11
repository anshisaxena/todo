const inputbox=document.getElementById("input-box");
const listcontain=document.getElementById("li-con");
function addtask(){
    if(inputbox.value==='')
    {
        alert("write something, it is blank!!");
    }
    
     else {
        let listitem=document.createElement("li");
        listitem.innerHTML=inputbox.value;
        listcontain.appendChild(listitem);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        listitem.appendChild(span);
    }
    inputbox.value='';
    savedata();

}
listcontain.addEventListener('click',function(e){
    if(e.target.tagName==='LI')
    {
        e.target.classList.toggle("check");
        
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        
        }
        savedata();
});
function savedata(){
    localStorage.setItem("data",listcontain.innerHTML);
}
function show(){
    listcontain.innerHTML=localStorage.getItem("data");
}
show();
inputbox.addEventListener('keyup',(e)=>{
    if(e.keyCode===13 && inputbox.value!='')
    {
        let listitem=document.createElement("li");
        listitem.innerHTML=inputbox.value;
        listcontain.appendChild(listitem);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        listitem.appendChild(span);
        inputbox.value='';
    }
})