  //Letak JavaScript
     console.log("Latihan Javascript");

     let nama;
     function masukkan_nama(){
        nama = prompt("Masukkan nama anda: ");
        console.log("Halloo" + nama);
        document.getElementById("nama").innerHTML = "Hallo " + nama;

     }
     
   
     document.getElementById("pertanyaan").onclick = function (){
        //ini isinya 
    let jawab = confirm("Apa sudah sarapan?");
    if(jawab == true){
        console.log("Alhamdulliah sudah sarapan");
         document.getElementById("Jawaban").innerHTML = "Alhamdullilah sudah " + nama;
    } else {
        console.log("Sebentar lagi istirahar bisa sarapan");
         document.getElementById("Jawaban").innerHTML = "Sebentar lagi " + nama;
    }
    }
    
let default_theme=false; //putih
    document.getElementById("tema").onclick = function(){
        if(gelap == true){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
gelap = false;
    } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    gelap = true;

    }
    }


