//const historyMap = new Map(JSON.parse(document.getElementById("historyMapValues").value).sort());
const pilarDataId = document.getElementById("pilarDataByCompany");
const pilarDataAllCompanies = document.getElementById("pilarDataListOfAllCompanys");
console.log(pilarDataId);
console.log(pilarDataAllCompanies);

function pilarcategory(percent100, category1=12, category2=14, category3=20, category4=5, category5=8, category6=9, category7=15) {
    var pilarborderid= document.getElementById("pilar-border-id");
    pilarborderid.querySelectorAll('*').forEach(n => n.remove());
    var hundredpercent = percent100;
    var percent = aktualpercent;
    for (var i = 0; i < hundredpercent ; i++) {
        colorid = "normal";
        var opacityhere = (50+i)/100;
        console.log("hallo")
        console.log(parseInt(category1/7));
        if (i < percent){
            if (i%2) {
                if(i <= parseInt(category1)){
                    color = "red"
                }
                else if(i > (parseInt(category1/7)) & i <= (parseInt(category2/7))){
                    color = "#FF7F50"
                }
                else if(i > (parseInt(category2/7)) & i <= (parseInt(category3/7))){
                    color = "#FF8C00"
                }
                else if(i > (parseInt(category3/7)) & i <= (parseInt(category4/7))){
                    color = "#FFA500"
                }
                else if(i > (parseInt(category4/7)) & i <= (parseInt(category5/7))){
                    color = "#FFD700"
                }
                else if(i > (parseInt(category5/7)) & i <= (parseInt(category6/7))){
                    color = "#FFFF00"
                }
                else if(i > (parseInt(category6/7)) & i <= (parseInt(category7/7))){
                    color = "#9ACD32";
                    colorid = "green";
                }
                /*
                else if(i > 70 & i <= 80){
                    color = "#9ACD32"
                }               
                //                
                else {
                    color = "#003199"
                }
                */
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