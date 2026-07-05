function bukaUndangan(){ 
    const cover = document.getElementById("cover");

    cover.classList.add("fadeOut");

    document.getElementById("musik").play();

    setTimeout(() => {
        cover.style.display = "none";
        document.getElementById("undangan").style.display = "block";
    },1000);

}
const musik = document.getElementById("musik");

function toggleMusic(){

    if(musik.paused){

        musik.play();

    }else{

        musik.pause();

    }

}
    
const target = new Date(" july 19, 2026 08:00:00").getTime();

setInterval(function(){

let sekarang = new Date().getTime();

let selisih = target - sekarang;

let hari = Math.floor(selisih/(1000*60*60*24));

let jam = Math.floor((selisih%(1000*60*60*24))/(1000*60*60));

let menit = Math.floor((selisih%(1000*60*60))/60000);

let detik = Math.floor((selisih%(60000))/1000);

document.getElementById("hari").innerHTML = hari;
document.getElementById("jam").innerHTML = jam;
document.getElementById("menit").innerHTML = menit;
document.getElementById("detik").innerHTML = detik;

},1000);
function openLightbox(src){

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightbox-img").src = src;

}

function closeLightbox(){

    document.getElementById("lightbox").style.display = "none";

}
function copyRekening(){

    const rekening =
    document.getElementById("rekening").innerText;

    navigator.clipboard.writeText(rekening);

    alert("Nomor rekening berhasil disalin.");

}