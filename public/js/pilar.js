//const historyMap = new Map(JSON.parse(document.getElementById("historyMapValues").value).sort());
const pilarDataId = document.getElementById("pilarDataByCompany");
const pilarDataAllCompanies = document.getElementById("pilarDataListOfAllCompanys");
console.log(pilarDataId);
console.log(pilarDataAllCompanies);
console.log("halle");

function pilargeneral(percent100, aktualpercent) {
    console.log("LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOL");
    console.log(pilarDataId);
    //console.log(JSON.parse(document.getElementById("pilarDataByCompany")));
    console.log(pilarDataAllCompanies);
    console.log("halle");
    var pilarborderid= document.getElementById("pilar-border-id");
    pilarborderid.querySelectorAll('*').forEach(n => n.remove());
    var hundredpercent = percent100;
    var percent = aktualpercent;
    for (var i = 0; i < hundredpercent ; i++) {
        colorid = "normal";
        var opacityhere = (50+i)/100;
        if (i < percent){
            if (i%2) {
                if(i <= 10){
                    color = "red"
                }
                else if(i > 10 & i <= 20){
                    color = "#FF7F50"
                }
                else if(i > 20 & i <= 30){
                    color = "#FF8C00"
                }
                else if(i > 30 & i <= 40){
                    color = "#FFA500"
                }
                else if(i > 40 & i <= 50){
                    color = "#FFD700"
                }
                else if(i > 50 & i <= 60){
                    color = "#FFFF00"
                }
                else if(i > 60 & i <= 70){
                    color = "#9ACD32";
                    colorid = "green";
                }
                else if(i > 70 & i <= 80){
                    color = "#9ACD32"
                }               
                //                
                else {
                    color = "#003199"
                }
                var divtoadd = document.createElement("div");
                var div_attribute = divtoadd.setAttribute("class", "pilar-case "+colorid+"");
                var div_attribute = divtoadd.setAttribute("style", "background-color: "+color+"; opacity: "+1+";");
                var div_attribute = divtoadd.setAttribute("id", "pilar-case-"+i+"");
                document.getElementById('pilar-border-id').appendChild(divtoadd);
                //<span class="tooltiptext">Tooltip text</span>
                /*
                var spantoadd = document.createElement("span");
                var span_attribute = spantoadd.setAttribute("class", "tooltiptext");
                var span_attribute = spantoadd.setAttribute("id", "pilar-case-"+i+"");
                var span_attribute = spantoadd.createTextNode("This is a span element.");
                document.getElementById('pilar-case-'+i+'').appendChild(divtoadd);
                */

            }
            else {
                var divtoadd = document.createElement("div");
                var div_attribute = divtoadd.setAttribute("class", "pilar-case-black");
                var div_attribute = divtoadd.setAttribute("style", "background-color: black; opacity: "+1+";");
                var div_attribute = divtoadd.setAttribute("id", "pilar-case-"+i+"");
                document.getElementById('pilar-border-id').appendChild(divtoadd);             
            }
        }
        else {
            if (i%2){
                opacityhere = 2
                var divtoadd = document.createElement("div");
                var div_attribute = divtoadd.setAttribute("class", "pilar-case");
                var div_attribute = divtoadd.setAttribute("style", "background-color: #747474; opacity: "+opacityhere+";"); // 747474
                var div_attribute = divtoadd.setAttribute("id", "pilar-case-"+i+"");
                document.getElementById('pilar-border-id').appendChild(divtoadd);
                
            }
            else {
                opacityhere = 2
                var divtoadd = document.createElement("div");
                var div_attribute = divtoadd.setAttribute("class", "pilar-case-black");
                var div_attribute = divtoadd.setAttribute("style", "background-color: black;");
                var div_attribute = divtoadd.setAttribute("id", "pilar-case-"+i+"");
                document.getElementById('pilar-border-id').appendChild(divtoadd);
            }
        }
        
    }

}

function refillcolor() {
    var hundredpercent = 100;
    var percent = document.getElementById('npt-field-two').value;
    //percent = 30;
    for (var i = 0; i < percent ; i++) {
        var opacityhere = (50+i)/100;
        if (i < percent){
            var divtoadd = document.getElementById("pilar-case-"+i+"");
            var div_attribute = divtoadd.setAttribute("style", "background-color: red;");
        }
    }
}