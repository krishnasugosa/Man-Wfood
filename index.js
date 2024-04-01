const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const count1 = document.getElementById('count1');
const count2 = document.getElementById('count2');
const eye = document.getElementById('eye');
const badan = document.getElementById('badan');
const kaki = document.getElementById('kaki');

let hitung1 = 0;
let hitung2 = 0;


btn1.onclick = function () {
    hitung1++;
    count1.textContent = hitung1;
    if (hitung1 > hitung2) {
        eye.style.borderBottom = '5px solid';
        badan.style.width = 300 + "px";
        badan.style.borderRadius = 30 + "px";
        kaki.style.width = 300 + "px";
        kaki.style.borderTopLeftRadius = 30 + "px";
        kaki.style.borderTopRightRadius = 30 + "px";
    } else if (hitung1 === hitung2) {
        eye.style.borderBottom = '2px solid';
        badan.style.width = 200 + "px";
        badan.style.borderRadius = 30 + "px";
        kaki.style.width = 200 + "px";
        kaki.style.borderTopLeftRadius = 30 + "px";
        kaki.style.borderTopRightRadius = 30 + "px";
    }

    document.addEventListener('DOMContentLoaded', init());
    function init() {
        let query = window.matchMedia('(max-width: 600px)')

        if (query.matches) {
            if (hitung1 > hitung2) {
                eye.style.borderBottom = '5px solid';
                badan.style.width = 200 + "px";
                badan.style.borderRadius = 30 + "px";
                kaki.style.width = 200 + "px";
                kaki.style.borderTopLeftRadius = 30 + "px";
                kaki.style.borderTopRightRadius = 30 + "px";
            } else if (hitung1 === hitung2) {
                eye.style.borderBottom = '2px solid';
                badan.style.width = 120 + "px";
                badan.style.borderRadius = 30 + "px";
                kaki.style.width = 120 + "px";
                kaki.style.borderTopLeftRadius = 30 + "px";
                kaki.style.borderTopRightRadius = 30 + "px";
            }
        } else {
               //////////////
        }
    }
}

btn2.onclick = function () {
    hitung2++;
    count2.textContent = hitung2;
    if (hitung2 > hitung1) {
        eye.style.borderBottom = '1px solid';
        badan.style.width = 100 + "px";
        badan.style.borderRadius = 0 + "px";
        kaki.style.width = 100 + "px";
        kaki.style.borderTopLeftRadius = 0 + "px";
        kaki.style.borderTopRightRadius = 0 + "px";
    } else if (hitung1 === hitung2) {
        eye.style.borderBottom = '2px solid';
        badan.style.width = 200 + "px";
        badan.style.borderRadius = 30 + "px";
        kaki.style.width = 200 + "px";
        kaki.style.borderTopLeftRadius = 30 + "px";
        kaki.style.borderTopRightRadius = 30 + "px";
    }
    document.addEventListener('DOMContentLoaded', init());
    function init() {
        let query = window.matchMedia('(max-width: 600px)')

        if (query.matches) {
            if (hitung2 > hitung1) {
                eye.style.borderBottom = '1px solid';
                badan.style.width = 100 + "px";
                badan.style.borderRadius = 0 + "px";
                kaki.style.width = 100 + "px";
                kaki.style.borderTopLeftRadius = 0 + "px";
                kaki.style.borderTopRightRadius = 0 + "px";
            } else if (hitung1 === hitung2) {
                eye.style.borderBottom = '2px solid';
                badan.style.width = 120 + "px";
                badan.style.borderRadius = 30 + "px";
                kaki.style.width = 120 + "px";
                kaki.style.borderTopLeftRadius = 30 + "px";
                kaki.style.borderTopRightRadius = 30 + "px";
            }
        } else {
            /////////////
        }
    }
}