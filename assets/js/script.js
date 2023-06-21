let userlink = document.getElementById('namalihat');
// let signoutlink = document.getElementById('signoutlink');
let namas = sessionStorage.getItem('nama');
var currentUser = null;

// Function;
function getName() {
    if (namas == null) {
        Swal.fire({
            icon: 'info',
            title: 'Silahkan Login Terlebih Dahulu',
        }).then(() => {
            window.location = '../index.html';
        });
    } else {
        userlink.innerText = namas;
    }
}

getName();

function logout() {
    Swal.fire({
        title: 'Apakah Anda yakin ingin keluar?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Keluar Akun!',
    }).then((result) => {
        if ((result.isConfirmed)) {
            Swal.fire({
                icon: 'success',
                title: 'Berhasil Keluar',
                showConfirButton: false,
                Timer: 1500,
            }).then(function () {
                window.location = '/index.html';
                sessionStorage.removeItem('nama');
                sessionStorage.removeItem('nis');
            });
        }
    });
}

function stopVideo(y) {
    const videoHide = document.getElementById(y);
    videoHide.hidden = false
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}



function page12() {
    document.getElementById("btnkembali").classList.add('disabled');
    document.getElementById("btnlanjut").classList.remove('disabled');
    document.getElementById("page1").hidden = false;
    document.getElementById("page2").hidden = true;
    document.getElementById("lanjut").setAttribute("onClick", "javascript: page22();");
}

function page22() {
    document.getElementById("btnkembali").classList.remove('disabled');
    document.getElementById("btnlanjut").classList.add('disabled');
    document.getElementById("page1").hidden = true;
    document.getElementById("page2").hidden = false;
    document.getElementById("kembali").setAttribute("onClick", "javascript: page12();");
    document.getElementById("btnmaterilanjut").hidden = false;
}

function page1() {
    document.getElementById("btnkembali").classList.add('disabled');
    document.getElementById("btnlanjut").classList.remove('disabled');
    document.getElementById("page1").hidden = false;
    document.getElementById("page2").hidden = true;
    document.getElementById("page3").hidden = true;
    document.getElementById("lanjut").setAttribute("onClick", "javascript: page2();");
}

function page2() {
    document.getElementById("btnkembali").classList.remove('disabled');
    document.getElementById("btnlanjut").classList.remove('disabled');
    document.getElementById("page1").hidden = true;
    document.getElementById("page2").hidden = false;
    document.getElementById("page3").hidden = true;
    document.getElementById("kembali").setAttribute("onClick", "javascript: page1();");
    document.getElementById("lanjut").setAttribute("onClick", "javascript: page3();");
}

function page3() {
    document.getElementById("btnkembali").classList.remove('disabled');
    document.getElementById("btnlanjut").classList.add('disabled');
    document.getElementById("page1").hidden = true;
    document.getElementById("page2").hidden = true;
    document.getElementById("page3").hidden = false;
    document.getElementById("kembali").setAttribute("onClick", "javascript: page2();");
    document.getElementById("btnmaterilanjut").hidden = false;
}

const salah = '<span style="color : red;">Salah</span>'
const benar = '<span style="color : green;">Benar</span>'

let mencoba1_1 = document.getElementById('mencoba1_1');
let mencoba1_2 = document.getElementById('mencoba1_2');
let mencoba1_3 = document.getElementById('mencoba1_3');
let mencoba1_4 = document.getElementById('mencoba1_4');

function mencoba1() {
    if ((mencoba1_1.value == '') || (mencoba1_2.value == '') || (mencoba1_3.value == '') || (mencoba1_4.value == '')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {

        if (mencoba1_1.value.toLowerCase() == 'bunga') {
            mencoba1_1.classList.add('warna-success');
        } else {
            mencoba1_1.classList.add('warna-danger');
        }

        if (mencoba1_2.value.toLowerCase() == 'daun') {
            mencoba1_2.classList.add('warna-success');
        } else {
            mencoba1_2.classList.add('warna-danger');
        }

        if (mencoba1_3.value.toLowerCase() == 'akar') {
            mencoba1_3.classList.add('warna-success');
        } else {
            mencoba1_3.classList.add('warna-danger');
        }

        if (mencoba1_4.value.toLowerCase() == 'batang') {
            mencoba1_4.classList.add('warna-success');
        } else {
            mencoba1_4.classList.add('warna-danger');
        }


        if ((mencoba1_1.value.toLowerCase() == 'bunga') && (mencoba1_2.value.toLowerCase() == 'daun') && (mencoba1_3.value.toLowerCase() == 'akar') && (mencoba1_4.value.toLowerCase() == 'batang')) {
            const ketmencoba1 = document.getElementById('ketmencoba1');
            ketmencoba1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${benar}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        dari gambar di samping kita dapat mengetahui bahwa nomor 1. bunga, 2. daun, 3. akar dan 4. batang
                        </div>`;
        } else {
            const ketmencoba1 = document.getElementById('ketmencoba1');
            ketmencoba1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${salah}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        Silahkan jawab ulang
                        </div>`;
        }
        mencoba1_1.disabled = true;
        mencoba1_2.disabled = true;
        mencoba1_3.disabled = true;
        mencoba1_4.disabled = true;
    }
}

function resetmencoba1() {
    ketmencoba1.innerHTML = "";
    mencoba1_1.value = "";
    mencoba1_2.value = "";
    mencoba1_3.value = "";
    mencoba1_4.value = "";
    mencoba1_1.disabled = false;
    mencoba1_2.disabled = false;
    mencoba1_3.disabled = false;
    mencoba1_4.disabled = false;
    mencoba1_1.classList.remove('warna-danger');
    mencoba1_1.classList.remove('warna-success');
    mencoba1_2.classList.remove('warna-danger');
    mencoba1_2.classList.remove('warna-success');
    mencoba1_3.classList.remove('warna-danger');
    mencoba1_3.classList.remove('warna-success');
    mencoba1_4.classList.remove('warna-danger');
    mencoba1_4.classList.remove('warna-success');
}



let menalar1_1 = document.getElementById('menalar1_1');
let menalar1_2 = document.getElementById('menalar1_2');
let menalar1_3 = document.getElementById('menalar1_3');
let menalar1_4 = document.getElementById('menalar1_4');

function menalar1() {
    if ((menalar1_1.children[0] == null) || (menalar1_2.children[0] == null) || (menalar1_3.children[0] == null) || (menalar1_4.children[0] == null)) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {

        if (menalar1_1.children[0] == Daun) {
            menalar1_1.classList.add('warna-success');
        } else {
            menalar1_1.classList.add('warna-danger');
        }

        if (menalar1_2.children[0] == Bunga) {
            menalar1_2.classList.add('warna-success');
        } else {
            menalar1_2.classList.add('warna-danger');
        }

        if (menalar1_3.children[0] == Batang) {
            menalar1_3.classList.add('warna-success');
        } else {
            menalar1_3.classList.add('warna-danger');
        }

        if (menalar1_4.children[0] == Akar) {
            menalar1_4.classList.add('warna-success');
        } else {
            menalar1_4.classList.add('warna-danger');
        }


        if ((menalar1_1.children[0] == Daun) || (menalar1_2.children[0] == Bunga) || (menalar1_3.children[0] == Batang) || (menalar1_4.children[0] == Akar)) {
            const ketmenalar1 = document.getElementById('ketmenalar1');
            ketmenalar1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${benar}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        karena tumbuhan teratai berfungsi untuk menangkap cahaya matahari dan mengubahnya menjadi energi melalui fotosintesis adalah Daun <br>
                        tumbuhan teratai yang berbentuk berwarnawarni yang berfungsi untuk menarik serangga untuk mengantarkan biji adalah Bunga <br>
                        Tumbuhan teratai yang berfungsi untuk mendukung daun, bunga, dan buah-buahan adalah Batang <br>
                        tumbuhan teratai berfungsi untuk menyerap air dan nutrisi dari tanah adalah Akar
                        </div>`;
        } else {
            const ketmenalar1 = document.getElementById('ketmenalar1');
            ketmenalar1.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${salah}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        Silahkan jawab ulang
                        </div>`;
        }
    }

}

let mencoba2_1 = document.getElementById('mencoba2_1');
let mencoba2_2 = document.getElementById('mencoba2_2');
let mencoba2_3 = document.getElementById('mencoba2_3');
let mencoba2_4 = document.getElementById('mencoba2_4');
let mencoba2_5 = document.getElementById('mencoba2_5');

function mencoba2() {
    if ((mencoba2_1.value == '-Pilih Jawaban-') || (mencoba2_2.value == '-Pilih Jawaban-') || (mencoba2_3.value == '-Pilih Jawaban-') || (mencoba2_4.value == '-Pilih Jawaban-') || (mencoba2_5.value == '-Pilih Jawaban-')) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {

        if (mencoba2_1.value.toLowerCase() == 'akar') {
            mencoba2_1.classList.add('warna-success');
        } else {
            mencoba2_1.classList.add('warna-danger');
        }

        if (mencoba2_2.value.toLowerCase() == 'batang') {
            mencoba2_2.classList.add('warna-success');
        } else {
            mencoba2_2.classList.add('warna-danger');
        }

        if (mencoba2_3.value.toLowerCase() == 'daun') {
            mencoba2_3.classList.add('warna-success');
        } else {
            mencoba2_3.classList.add('warna-danger');
        }

        if (mencoba2_4.value.toLowerCase() == 'bunga') {
            mencoba2_4.classList.add('warna-success');
        } else {
            mencoba2_4.classList.add('warna-danger');
        }

        if (mencoba2_5.value.toLowerCase() == 'matahari') {
            mencoba2_5.classList.add('warna-success');
        } else {
            mencoba2_5.classList.add('warna-danger');
        }


        if ((mencoba2_1.value.toLowerCase() == 'bunga') && (mencoba2_2.value.toLowerCase() == 'daun') && (mencoba2_3.value.toLowerCase() == 'akar') && (mencoba2_4.value.toLowerCase() == 'batang') && (mencoba2_5.value.toLowerCase() == 'daun')) {
            const ketmencoba2 = document.getElementById('ketmencoba2');
            ketmencoba2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${benar}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        // dari gambar di samping kita dapat mengetahui bahwa nomor 1. bunga, 2. daun, 3. akar dan 4. batang
                        </div>`;
        } else {
            const ketmencoba2 = document.getElementById('ketmencoba2');
            ketmencoba2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${salah}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        Silahkan jawab ulang
                        </div>`;
        }
        mencoba2_1.disabled = true;
        mencoba2_2.disabled = true;
        mencoba2_3.disabled = true;
        mencoba2_4.disabled = true;
        mencoba2_5.disabled = true;
//         // Get all options within <select id='foo'>...</select>
// var op = document.getElementById("mencoba2_1").getElementsByTagName("option");
// for (var i = 0; i < op.length; i++) {
//   // lowercase comparison for case-insensitivity
//   (op[i].value.toLowerCase() == "akar") 
//     ? op[i].disabled = true 
//     : op[i].disabled = false ;
// }
    }
}

function resetmencoba2() {
    ketmencoba2.innerHTML = "";
    mencoba2_1.value = `-Pilih Jawaban-`;
    mencoba2_2.value = "-Pilih Jawaban-";
    mencoba2_3.value = "-Pilih Jawaban-";
    mencoba2_4.value = "-Pilih Jawaban-";
    mencoba2_5.value = "-Pilih Jawaban-";
    mencoba2_1.disabled = false;
    mencoba2_2.disabled = false;
    mencoba2_3.disabled = false;
    mencoba2_4.disabled = false;
    mencoba2_5.disabled = false;
    mencoba2_1.classList.remove('warna-danger');
    mencoba2_1.classList.remove('warna-success');
    mencoba2_2.classList.remove('warna-danger');
    mencoba2_2.classList.remove('warna-success');
    mencoba2_3.classList.remove('warna-danger');
    mencoba2_3.classList.remove('warna-success');
    mencoba2_4.classList.remove('warna-danger');
    mencoba2_4.classList.remove('warna-success');
    mencoba2_5.classList.remove('warna-danger');
    mencoba2_5.classList.remove('warna-success');
}

let menalar2_1 = document.getElementById('menalar2_1');
let menalar2_2 = document.getElementById('menalar2_2');
let menalar2_3 = document.getElementById('menalar2_3');
let menalar2_4 = document.getElementById('menalar2_4');
let menalar2_5 = document.getElementById('menalar2_5');

function menalar2() {
    if ((menalar2_1.value.toLowerCase() == "") || (menalar2_2.value.toLowerCase() == "") || (menalar2_3.value.toLowerCase() == "") || (menalar2_4.value.toLowerCase() == "") || (menalar2_5.value.toLowerCase() == "")) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {

        if (menalar2_1.value.toLowerCase() == "fotosintesis") {
            menalar2_1.classList.add('warna-success');
        } else {
            menalar2_1.classList.add('warna-danger');
        }

        if (menalar2_2.value.toLowerCase() == 'matahari') {
            menalar2_2.classList.add('warna-success');
        } else {
            menalar2_2.classList.add('warna-danger');
        }

        if (menalar2_3.value.toLowerCase() == 'eichhornia crassipes') {
            menalar2_3.classList.add('warna-success');
        } else {
            menalar2_3.classList.add('warna-danger');
        }

        if (menalar2_4.value.toLowerCase() == 'rawa') {
            menalar2_4.classList.add('warna-success');
        } else {
            menalar2_4.classList.add('warna-danger');
        }

        if (menalar2_5.value.toLowerCase() == 'ungu') {
            menalar2_5.classList.add('warna-success');
        } else {
            menalar2_5.classList.add('warna-danger');
        }


        if ((menalar2_1.value.toLowerCase() == "fotosintesis") || (menalar2_2.value.toLowerCase() == 'eichhornia crassipes') || (menalar2_3.value.toLowerCase() == 'rawa') || (menalar2_4.value.toLowerCase() == 'ungu')) {
            const ketmenalar2 = document.getElementById('ketmenalar2');
            ketmenalar2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${benar}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        Fotosintesis adalah proses biokimia yang menghasilkan gula dan oksigen dari karbondioksida dan air, menggunakan energi Matahari
 Proses ini merupakan salah satu mekanisme yang digunakan tumbuhan dan organisme lain untuk menghasilkan energi yang dibutuhkan untuk pertumbuhan. Eceng Gondok atau Eichhornia Crassipes
 adalah tumbuhan air tawar yang termasuk dalam famili Pontederiaceae. Ini adalah salah satu tumbuhan terkenal di seluruh dunia karena beradaptasi dengan habitat yang beragam. Eceng gondok tumbuh di air Rawa
, air payau, dan habitat laut. Bagian atas daunnya berwarna hijau tua, sementara bagian dalam berwarna kecoklatan. Bunga dari tumbuhan ini berwarna Ungu
 dan berukuran kecil. Eceng gondok memiliki tingkat pertumbuhan yang cepat dan dapat menutupi kolam, lonjakan, dan sungai. Ini dapat menyebabkan kerugian ekonomi dan ekologi yang signifikan. Tumbuhan ini juga dapat menyebabkan kerusakan serius pada habitat ikan dan jamur.
                        </div>`;
        } else {
            const ketmenalar2 = document.getElementById('ketmenalar2');
            ketmenalar2.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${salah}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        Silahkan jawab ulang
                        </div>`;
        }

        menalar2_1.disabled = true;
        menalar2_2.disabled = true;
        menalar2_3.disabled = true;
        menalar2_4.disabled = true;
        menalar2_5.disabled = true;
    }

}

function resetmenalar2() {
    ketmenalar2.innerHTML = "";
    menalar2_1.value = "";
    menalar2_2.value = "";
    menalar2_3.value = "";
    menalar2_4.value = "";
    menalar2_5.value = "";
    menalar2_1.disabled = false;
    menalar2_2.disabled = false;
    menalar2_3.disabled = false;
    menalar2_4.disabled = false;
    menalar2_5.disabled = false;
    menalar2_1.classList.remove('warna-danger');
    menalar2_1.classList.remove('warna-success');
    menalar2_2.classList.remove('warna-danger');
    menalar2_2.classList.remove('warna-success');
    menalar2_3.classList.remove('warna-danger');
    menalar2_3.classList.remove('warna-success');
    menalar2_4.classList.remove('warna-danger');
    menalar2_4.classList.remove('warna-success');
    menalar2_5.classList.remove('warna-danger');
    menalar2_5.classList.remove('warna-success');
}

let mencoba3_1 = document.getElementById('mencoba3_1');
let mencoba3_2 = document.getElementById('mencoba3_2');
let mencoba3_3 = document.getElementById('mencoba3_3');
let mencoba3_4 = document.getElementById('mencoba3_4');
let mencoba3_5 = document.getElementById('mencoba3_5');
let mencoba3_6 = document.getElementById('mencoba3_6');

function mencoba3() {
    if ((mencoba3_1.children[0] == null) || (mencoba3_2.children[0] == null) || (mencoba3_3.children[0] == null) || (mencoba3_4.children[0] == null) || (mencoba3_5.children[0] == null) || (mencoba3_6.children[0] == null)) {
        sweetAlert(
            "Oops...",
            "Jawaban masih ada yang kosong",
            "error"
        );
    } else {

        if (mencoba3_1.children[0] == Akar) {
            mencoba3_1.classList.add('warna-success');
        } else {
            mencoba3_1.classList.add('warna-danger');
        }

        if (mencoba3_2.children[0] == Batang) {
            mencoba3_2.classList.add('warna-success');
        } else {
            mencoba3_2.classList.add('warna-danger');
        }

        if (mencoba3_3.children[0] == Daun) {
            mencoba3_3.classList.add('warna-success');
        } else {
            mencoba3_3.classList.add('warna-danger');
        }

        if (mencoba3_4.children[0] == Bunga) {
            mencoba3_4.classList.add('warna-success');
        } else {
            mencoba3_4.classList.add('warna-danger');
        }

        if (mencoba3_5.children[0] == Malai) {
            mencoba3_5.classList.add('warna-success');
        } else {
            mencoba3_5.classList.add('warna-danger');
        }

        if (mencoba3_6.children[0] == Buah) {
            mencoba3_6.classList.add('warna-success');
        } else {
            mencoba3_6.classList.add('warna-danger');
        }


        if ((mencoba3_1.children[0] == Akar) || (mencoba3_2.children[0] == Batang) || (mencoba3_3.children[0] == Daun) || (mencoba3_4.children[0] == Bunga) || (mencoba3_5.children[0] == Malai) || (mencoba3_6.children[0] == Buah)) {
            const ketmencoba3 = document.getElementById('ketmencoba3');
            ketmencoba3.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${benar}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        karena tumbuhan teratai berfungsi untuk menangkap cahaya matahari dan mengubahnya menjadi energi melalui fotosintesis adalah Daun <br>
                        tumbuhan teratai yang berbentuk berwarnawarni yang berfungsi untuk menarik serangga untuk mengantarkan biji adalah Bunga <br>
                        Tumbuhan teratai yang berfungsi untuk mendukung daun, bunga, dan buah-buahan adalah Biji <br>
                        tumbuhan teratai berfungsi untuk menyerap air dan nutrisi dari tanah adalah Akar
                        </div>`;
        } else {
            const ketmencoba3 = document.getElementById('ketmencoba3');
            ketmencoba3.innerHTML = `<div class="pembahasan mt-3 mr-3 p-3">
                        Jawaban Anda ${salah}<br>
                        <div class="pembahasan2">
                        <u>Pembahasan :</u>
                        </div>
                        Silahkan jawab ulang
                        </div>`;
        }
    }

}


let bmenalar3_1 = document.getElementById('Bmenalar3_1');
let bmenalar3_2 = document.getElementById('Bmenalar3_2');
let bmenalar3_3 = document.getElementById('Bmenalar3_3');
let bmenalar3_4 = document.getElementById('Bmenalar3_4');
let smenalar3_1 = document.getElementById('Smenalar3_1');
let smenalar3_2 = document.getElementById('Smenalar3_2');
let smenalar3_3 = document.getElementById('Smenalar3_3');
let smenalar3_4 = document.getElementById('Smenalar3_4');

function bmenalar3_11() {
    const ketmenalar3_1 = document.getElementById('ketmenalar3_1');
    ketmenalar3_1.innerHTML = `${benar}`;
    bmenalar3_1.disabled = true;
    smenalar3_1.disabled = true;
}

function smenalar3_11() {
    const ketmenalar3_1 = document.getElementById('ketmenalar3_1');
    ketmenalar3_1.innerHTML = `${salah}`;
    bmenalar3_1.disabled = true;
    smenalar3_1.disabled = true;
}

function bmenalar3_21() {
    const ketmenalar3_2 = document.getElementById('ketmenalar3_2');
    ketmenalar3_2.innerHTML = `${benar}`;
    bmenalar3_2.disabled = true;
    smenalar3_2.disabled = true;
}

function smenalar3_21() {
    const ketmenalar3_2 = document.getElementById('ketmenalar3_2');
    ketmenalar3_2.innerHTML = `${salah}`;
    bmenalar3_2.disabled = true;
    smenalar3_2.disabled = true;
}

function bmenalar3_31() {
    const ketmenalar3_3 = document.getElementById('ketmenalar3_3');
    ketmenalar3_3.innerHTML = `${benar}`;
    bmenalar3_3.disabled = true;
    smenalar3_3.disabled = true;
}

function smenalar3_31() {
    const ketmenalar3_3 = document.getElementById('ketmenalar3_3');
    ketmenalar3_3.innerHTML = `${salah}`;
    bmenalar3_3.disabled = true;
    smenalar3_3.disabled = true;
}

function bmenalar3_41() {
    const ketmenalar3_4 = document.getElementById('ketmenalar3_4');
    ketmenalar3_4.innerHTML = `${benar}`;
    bmenalar3_4.disabled = true;
    smenalar3_4.disabled = true;
}

function smenalar3_41() {
    const ketmenalar3_4 = document.getElementById('ketmenalar3_4');
    ketmenalar3_4.innerHTML = `${salah}`;
    bmenalar3_4.disabled = true;
    smenalar3_4.disabled = true;
}

function resetmenalar3() {
    bmenalar3_1.disabled = false;
    smenalar3_1.disabled = false;
    bmenalar3_2.disabled = false;
    smenalar3_2.disabled = false;
    bmenalar3_3.disabled = false;
    smenalar3_3.disabled = false;
    bmenalar3_4.disabled = false;
    smenalar3_4.disabled = false;
    bmenalar3_1.checked = false;
    smenalar3_1.checked = false;
    bmenalar3_2.checked = false;
    smenalar3_2.checked = false;
    bmenalar3_3.checked = false;
    smenalar3_3.checked = false;
    bmenalar3_4.checked = false;
    smenalar3_4.checked = false;
    ketmenalar3_1.innerHTML = ``;
    ketmenalar3_2.innerHTML = ``;
    ketmenalar3_3.innerHTML = ``;
    ketmenalar3_4.innerHTML = ``;

}