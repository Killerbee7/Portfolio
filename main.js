

let tablinks= document.getElementsByClassName("tab-links");

let tabcontents= document.getElementsByClassName("tab-contents");


function opentab(tabname){
    
  
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    document.getElementById(tabname).classList.add("active-tab");
    
}

let sidemenu= document.getElementById("sidemenu");


function openmenu(){
    sidemenu.style.right="0"
}

function closemenu(){
    sidemenu.style.right="-150px"
}

