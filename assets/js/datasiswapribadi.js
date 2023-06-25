// let userlink = document.getElementById('namalihat');
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
        // userlink.innerText = namas;
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

let idnya = [];

let nama = sessionStorage.getItem('nama');
let nisn = sessionStorage.getItem('nisn');
let sekolah = sessionStorage.getItem('sekolah');
let kelas = sessionStorage.getItem('kelas');

const namasiswa = document.getElementById('namasiswa');
const nisnsiswa = document.getElementById('nisnsiswa');
const kelassiswa = document.getElementById('kelassiswa');
const sekolahsiswa = document.getElementById('sekolahsiswa');

namasiswa.innerHTML = nama;
nisnsiswa.innerHTML = nisn;
kelassiswa.innerHTML = kelas;
sekolahsiswa.innerHTML = sekolah;


let kuis1 = "db_kuis1/";


let tmp = document.querySelector('.disini');
tmp.innerHTML = "";

let cek11 = 0;
// datahasil = kuis1.value;

datahasil = kuis1;
    // console.log(datahasil);
    var task = firebase.database().ref(datahasil);

    let no = 0;
    tmp.innerHTML = "";

    task.orderByChild("nama").on("child_added", function (data) {
        // task.on("child_added", function (data) {
        var taskvalue = data.val();
        
        if ((taskvalue.nama == nama) && (taskvalue.sekolah == sekolah) && (taskvalue.kelas == kelas)) {
            no = no + 1;
            tmp.innerHTML += `<tr class="text-center">
                                <td class="ukr3">${no}</td>
                                <td class="ukr3">${taskvalue.nilai}</td>
                            </tr>`;
            idnya.push(taskvalue.id);
        }

        // if (cek11 == 0) {
        //     let ssps = document.querySelector('.center');
        //     ssps.innerHTML += '';
        //     ssps.innerHTML += `<button type="button" class="btn btn-danger deleted"><i class="fas fa-user-minus"></i>&nbsp;&nbsp;Hapus Semua Data</button>`;
        //     cek11 += 1;

        //     let klikkkk = document.querySelector('.deleted');
        //     klikkkk.addEventListener('click', function () {
        //         hapussemua(idnya);
        //     })
        // }

    });
    
    let kuis2 = "db_kuis2/";


let tmp2 = document.querySelector('.disini2');
tmp2.innerHTML = "";

let cek2 = 0;
// datahasil = kuis2.value;

datahasil = kuis2;
    // console.log(datahasil);
    var task = firebase.database().ref(datahasil);

    let no2 = 0;
    tmp2.innerHTML = "";

    task.orderByChild("nama").on("child_added", function (data) {
        // task.on("child_added", function (data) {
        var taskvalue = data.val();
        
        if ((taskvalue.nama == nama) && (taskvalue.sekolah == sekolah) && (taskvalue.kelas == kelas)) {
            no2 = no2 + 1;
            tmp2.innerHTML += `<tr class="text-center">
                                <td class="ukr3">${no2}</td>
                                <td class="ukr3">${taskvalue.nilai}</td>
                            </tr>`;
            idnya.push(taskvalue.id);
        }

        // if (cek11 == 0) {
        //     let ssps = document.querySelector('.center');
        //     ssps.innerHTML += '';
        //     ssps.innerHTML += `<button type="button" class="btn btn-danger deleted"><i class="fas fa-user-minus"></i>&nbsp;&nbsp;Hapus Semua Data</button>`;
        //     cek11 += 1;

        //     let klikkkk = document.querySelector('.deleted');
        //     klikkkk.addEventListener('click', function () {
        //         hapussemua(idnya);
        //     })
        // }

    });
    
    let kuis3 = "db_kuis3/";


let tmp3 = document.querySelector('.disini3');
tmp3.innerHTML = "";

let cek3 = 0;
// datahasil = kuis3.value;

datahasil = kuis3;
    // console.log(datahasil);
    var task = firebase.database().ref(datahasil);

    let no3 = 0;
    tmp3.innerHTML = "";

    task.orderByChild("nama").on("child_added", function (data) {
        // task.on("child_added", function (data) {
        var taskvalue = data.val();
        
        if ((taskvalue.nama == nama) && (taskvalue.sekolah == sekolah) && (taskvalue.kelas == kelas)) {
            no3 = no3 + 1;
            tmp3.innerHTML += `<tr class="text-center">
                                <td class="ukr3">${no3}</td>
                                <td class="ukr3">${taskvalue.nilai}</td>
                            </tr>`;
            idnya.push(taskvalue.id);
        }

        // if (cek11 == 0) {
        //     let ssps = document.querySelector('.center');
        //     ssps.innerHTML += '';
        //     ssps.innerHTML += `<button type="button" class="btn btn-danger deleted"><i class="fas fa-user-minus"></i>&nbsp;&nbsp;Hapus Semua Data</button>`;
        //     cek11 += 1;

        //     let klikkkk = document.querySelector('.deleted');
        //     klikkkk.addEventListener('click', function () {
        //         hapussemua(idnya);
        //     })
        // }

    });
    
    
    let kuis5 = "db_evaluasi/";


let tmp5 = document.querySelector('.disini5');
tmp5.innerHTML = "";

let cek5 = 0;
// datahasil = kuis5.value;

datahasil = kuis5;
    // console.log(datahasil);
    var task = firebase.database().ref(datahasil);

    let no5 = 0;
    tmp5.innerHTML = "";

    task.orderByChild("nama").on("child_added", function (data) {
        // task.on("child_added", function (data) {
        var taskvalue = data.val();
        
        if ((taskvalue.nama == nama) && (taskvalue.sekolah == sekolah) && (taskvalue.kelas == kelas)) {
            no5 = no5 + 1;
            tmp5.innerHTML += `<tr class="text-center">
                                <td class="ukr3">${no5}</td>
                                <td class="ukr3">${taskvalue.nilai}</td>
                            </tr>`;
            idnya.push(taskvalue.id);
        }

        // if (cek11 == 0) {
        //     let ssps = document.querySelector('.center');
        //     ssps.innerHTML += '';
        //     ssps.innerHTML += `<button type="button" class="btn btn-danger deleted"><i class="fas fa-user-minus"></i>&nbsp;&nbsp;Hapus Semua Data</button>`;
        //     cek11 += 1;

        //     let klikkkk = document.querySelector('.deleted');
        //     klikkkk.addEventListener('click', function () {
        //         hapussemua(idnya);
        //     })
        // }

    });
    