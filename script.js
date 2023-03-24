let paraGraph = document.getElementById("para1");
let count = 0;
let savedEntries = document.getElementById("savedd")


function incr(){
    count += 1
    paraGraph.innerHTML=count
}
function decr(){
    if(count < 1){
        paraGraph.innerHTML=0
    }else{
        count -= 1
        paraGraph.innerHTML=count
    }
}



function savep(){
    let countStr = count + "-"
    savedEntries.innerHTML += countStr
    count = 0
}

function rst(){
    paraGraph.innerHTML=0
    count = 0
    savedEntries.innerHTML = ""
}