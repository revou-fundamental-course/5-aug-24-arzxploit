var usia = document.getElementById("usia");
var tinggi = document.getElementById("tinggi");
var berat = document.getElementById("berat");
var laki = document.getElementById("l");
var perempuan = document.getElementById("p");
var form = document.getElementById("meform");
var resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modal-text");
var modal = document.getElementById("me-modal");
var span = document.getElementsByClassName("close")[0];


function resetForm(){
    document.getElementById("meform").reset();
    document.querySelector(".comment").innerHTML = "N/A";
    document.querySelector("#result").innerHTML = "00.00";
    
}


 
function calculate(){

    if(usia.value=='' || tinggi.value=='' || berat.value=='' || (laki.checked==false && perempuan.checked==false)){
        modal.style.display = "block";
        modalText.innerHTML = 'All fields are required';

    }else{
        countBmi();
    } 
}

function countBmi(){
    var p = [usia.value, tinggi.value, berat.value];
    if(laki.checked){
        p.push("Laki-laki");
    }else if(perempuan.checked){
        p.push("Perempuan");
    }
    
    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
    
    var result =  '';
    if(bmi<18.5){
        result = "kurang"; 
    }else if(18.5<=bmi&&bmi<=24.9){
        result = "normal (ideal)";
    }else if(25<=bmi&&bmi<=29.9){
        result = "berlebih (gemuk)";
    }else if(30<=bmi&&bmi<=34.9){
        result = "obesitas";
    }else if(35<=bmi){
        result = "obesitas extrem";
    }


resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `Berat badanmu <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);

}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}