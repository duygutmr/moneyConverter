
const _tl = document.getElementById('tl');
const _dollar = document.getElementById('dollar');
const _euro = document.getElementById('euro');
const _sterlin = document.getElementById('sterlin');
const _button = document.getElementById('convert');



function converter(){

    
    const total = (_tl.value / 6.58);
    _euro.innerHTML = total;

    const total2 = (_tl.value / 5.81);
    _dollar.innerHTML = total2;   


    const total3 = (_tl.value / 7.36);
    _sterlin.innerHTML = total3;
  
    const n = total.toFixed(2); 
    _dollar.innerHTML = n;  
    _euro.innerHTML = n;
    _sterlin.innerHTML = n;

}


_tl.addEventListener('keyup', num);
// else içindeki converter fonksiyonunu event listeneri iki defa yazmamak için yazdık.else yazmamızın sebebi de if kısmı stringi kontrol ediyor ve biz yalnızca sayı girildiğinde convert etsin istiyoruz.
// if kısmı string durumu else kısmı num kısmı.
function num(e) {
 const charCode = e.keyCode;
    if ((charCode < 48 || charCode > 57) && charCode !== 8 ) { 
        alert("lütfen sayı giriniz");
        _tl.value = "";
    } else {
        converter();
       
        return true;
    }

}