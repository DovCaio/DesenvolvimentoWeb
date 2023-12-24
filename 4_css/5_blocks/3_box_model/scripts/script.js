
const dts = document.getElementsByTagName("dt");
const dds = document.getElementsByTagName("dd");



for (let i = 0; i < dds.length; i++){

    dds[i].style.display = "none";

}

for (let j = 0; j < dts.length; j++){

    
    dts[j].onmouseover = function(){
    
        dds[j].style.display = "block";

        dts[j].style.display = "none";
    
    }
    

}


for (let k = 0; k < dts.length; k++){

    
    dts[k].onmouseleave = function(){
    
        dds[k].style.display = "none";

        dts[k].style.display = "block";
    
    }


}