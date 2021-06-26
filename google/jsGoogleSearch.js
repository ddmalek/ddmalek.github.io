function funkcjaSzukaj(){
    // document.getElementById("wrapper").style.display = "none";
    //document.getElementById("input_wyszukiwarki2").value = document.getElementById("input_wyszukiwarki").value;
    // document.getElementById("div_input_id2").style.display = "flex";
    //var dodajklase = document.getElementById("wrapper");
    //var dodajklase2 = document.getElementById("div_input_id2");
    var dodajklase4 = document.getElementsByClassName("dowylaczeniadlaresults");
    var zdejGoogle = document.getElementById("google_image");
    zdejGoogle.style.cssText="width:92px; height:30px; margin-left: 5px; cursor: pointer; position: absolute; top: 35px; left: 20px;";
    var div1_a_2_var = document.getElementById("id_results_div_1");
    div1_a_2_var.style.cssText="position: absolute; top: 25px; right: 15px;";
    document.getElementById("resultsSearch").style.display = "flex";
    // dodajklase.classList.add("results");
    // dodajklase2.classList.remove("results");
    for(i = 0; i < dodajklase4.length; i++){
        dodajklase4[i].classList.add("results");
    }

    var dodajklase5 = document.getElementById("doprzemieszczeniaform");
    var dodajklase6 = document.getElementsByClassName("div3_form_1_a");
    for(i = 0; i < dodajklase6.length; i++){
    dodajklase6[i].classList.add("doprzemieszczeniaformclass");
    }
    dodajklase5.classList.add("doprzemieszczeniaformclass");

    var dodajklase7 = document.getElementsByClassName("div3_form_1_a_1_a_lupa");
    var dodajklase8 = document.getElementById("spanlupaid");
    //dodajklase8.style.cssText=" color:#4285f4; width:24px; height:24px; margin-left: 5px; cursor: pointer;";
    dodajklase8.classList.add("lupka_transformacja");
   
    for(i = 0; i < dodajklase7.length; i++){
        dodajklase7[i].style.cssText = `color: blue !important; order:122;`;
    }

   
    

    
}

function funkcjaEnter(event){
    if(event.keyCode == 13){
        funkcjaSzukaj();
    }

}