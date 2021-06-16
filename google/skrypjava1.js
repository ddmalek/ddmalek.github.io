function f_akt_przycisk_x() {
  var przyciskX = document.getElementById("przycisk_x_id");
  var input_search = document.getElementById("input_wyszukiwarki");
    if (input_search.value!="") {
        przyciskX.style.display = "flex";
        funkcja_cieni_inputa();
        
       } else {
           przyciskX.style.display = "none";
           funkcja_cieni_inputa();
       }
}

function funkcja_cieni_inputa(s) {
    var element4 = document.getElementById("div_input_id");
    var input_search = document.getElementById("input_wyszukiwarki");
    if(s==1){
        element4.classList.remove("styledynamiczne2");
        element4.classList.add("styledynamiczne1");
    }
    else{
        if(input_search === document.activeElement){
        }
        else{
            element4.classList.remove("styledynamiczne1");
            element4.classList.add("styledynamiczne2");
        }
    }
}

function funkcja_czyszczenia_inputa(){
    var t = document.getElementById("input_wyszukiwarki");
    t.value = "";
    t.focus();
    document.getElementById("przycisk_x_id").style.display = "none";
}