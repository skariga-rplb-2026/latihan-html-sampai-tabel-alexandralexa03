let skorUser = 0;
let skorCom = 0;

function main(pilihan_user){
    const komputer = ["batu", "gunting", "kertas"];
    const random = Math.floor(Math.random() * komputer.length);
    let pilihan_komputer = komputer[random];

    document.getElementById('pil_user').src = "img/" + pilihan_user + ".png";
    document.getElementById('pil_com').src = "img/" + pilihan_komputer + ".png";

    if(pilihan_user === pilihan_komputer){
        document.getElementById("hasil").innerHTML = "SERI";
    } 
    else if (
        (pilihan_user === "kertas" && pilihan_komputer === "batu") ||
        (pilihan_user === "batu" && pilihan_komputer === "gunting") ||
        (pilihan_user === "gunting" && pilihan_komputer === "kertas")
    ){
        skorUser++;
        document.getElementById("hasil").innerHTML = "MENANG";
    } 
    else {
        skorCom++;
        document.getElementById("hasil").innerHTML = "KALAH";
    }

    document.getElementById("skorUSR").innerHTML = "Score User : " + skorUser;
    document.getElementById("skorCOM").innerHTML = "Score COM : " + skorCom;
}
