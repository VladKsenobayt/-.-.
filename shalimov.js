jQuery(document).ready(function(){//Нашёл когда вчера готовился к контрольной 
    let ved_player= Math.floor(Math.random() * 2)+1;
let slovo=prompt("Игрок "+ved_player+", введите ваше слово.");
//alert("_".repeat(slovo.length))
let vuvod_txt = "-".repeat(slovo.length);
let numb_hod = 0;
jQuery(".vuvod").text(vuvod_txt);
jQuery(".poput").text("9 попыток осталось");
let bukv;
let new_game= false;
//slovo
//let vuvod = document.createElement("div");
//elem.class = 'vuvod';
//let vuvod = document.getElementById('vuvod');
//alert(vuvod);//<div class="vuvod" id="vuvod"></div>
//vuvod.innerHTML = vuvod_txt;

//javascript 
//console.log(mass_sh);
//.
//getNumber();
//alert(tek_sym+" выиграл");
//str.indexOf("2");//-1
let vhozhd;
function gdeoni(str, substr) {
    let listIdx = []
    let lastIndex = -1
    while ((lastIndex = str.indexOf(substr, lastIndex + 1)) !== -1) {
      listIdx.push(lastIndex)
    }
    return listIdx
  }
jQuery(".ichei").on("click", function(){
    //console.log(jQuery(".ichei")[1])
    if (numb_hod<9){
        let soderzh = jQuery(this).text();
    if(soderzh != "0") {//ПОМЕНЯТЬ!!!!!!
        jQuery(this).text("0");
        //mass_sh[parseInt(jQuery(this).attr('id'))]=tek_sym;
        bukv=jQuery(this).attr('id');
        if (slovo.indexOf(bukv)!=-1){
            //(slovo.split(bukv)).join(bukv);
            vuvod_txt=vuvod_txt.split('')
            vhozhd=gdeoni(slovo,bukv);
        //alert(slovo.split(bukv).length-1)
        for (i = 0; i < vhozhd.length; i++) {
        //    vuvod_txt=vuvod_txt.substr
            vuvod_txt[vhozhd[i]]=bukv;
        //    alert(vuvod_txt);
        }
        vuvod_txt=vuvod_txt.join('');
        //for (let i=0elem.split(elem[i]).length-1 > 1)
        } else {
            numb_hod+=1;
            jQuery(".poput").text(9-numb_hod+" попыток осталось");
        }
        
        
        //jQuery(".victory").css("display", "none");
        jQuery(".vuvod").text(vuvod_txt);
        //console.log(mass_sh);
        if (vuvod_txt.indexOf("-")==-1) {
            alert((ved_player%2+1)+" выиграл");
            numb_hod=9;
            new_game=prompt("Начать новую игру? (Да/нет).");
        } else if (numb_hod==9) {
            alert(ved_player+" выиграл");
            new_game=prompt("Начать новую игру? (Да/нет).");
        }
        if (new_game=="Да") {
            
            new_game= false;
            ved_player=(ved_player%2+1)
            slovo=prompt("Игрок "+ved_player+", введите ваше слово.");
            vuvod_txt = "-".repeat(slovo.length);
            numb_hod = 0;
            jQuery(".vuvod").text(vuvod_txt);//".ichei"
            //jQuery(".vuvod").text(jQuery(this).attr('id'));
            for (i = 0; i < 33; i++){
(jQuery(".ichei")[i]).text((jQuery(".ichei")[i]).attr('id'));
            }
            jQuery(".poput").text("9 попыток осталось");
        }

    } 
}
});
})