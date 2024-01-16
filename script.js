const ipbox = document.getElementById("ip");
const listcontainer = document.getElementById("listcontainer");
function addtask(){
    if(ipbox.value === ""){
        alert(" please enter valid task");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=ipbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    ipbox.value="";
    savedata();
}
// ALWAYS WRITE TAGNAME IN CAPITAL OR ELSE EROOORRRRRRR
listcontainer.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            savedata();
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            savedata();
        }
    }, false);

    function savedata(){
        localStorage.setItem("data",listcontainer.innerHTML);
    }
 
  function showdata(){
    listcontainer.innerHTML = localStorage.getItem("data")
  }  

  showdata();
