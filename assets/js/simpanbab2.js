const dbmenanya2 = db.ref('db_menanya2/').on('value', menanya1Success, handleError)
let pk1 = 0;
var counter = 0;
function menanya1Success(items1) {
    pk1 = items1.val().length;
    counter = pk1;
}

const dbmengkomunikasikan2 = db.ref('db_mengkomunikasikan2/').on('value', mengkomunikasikan1Success, handleError)
let pk2 = 0;
var counter2 = 0;
function mengkomunikasikan1Success(items1) {
    pk2 = items1.val().length;
    counter2 = pk2;
}

function handleError(error) {
    console.log(error);
}

// ambil jamnya
window.setTimeout("waktu()", 1000);

function waktu() {
    var tanggal = new Date();
    setTimeout("waktu()", 1000);
    return (tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds());
}

// harinya
function hari() {
    tanggallengkap = new String();
    namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    tgl = new Date();
    hari = tgl.getDay();
    tanggal = tgl.getDate();
    bulan = tgl.getMonth();
    tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
    return (tanggallengkap);
}

// harinya
function hari() {
    tanggallengkap = new String();
    namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    tgl = new Date();
    hari = tgl.getDay();
    tanggal = tgl.getDate();
    bulan = tgl.getMonth();
    tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
    return (tanggallengkap);
}

// harinya
function hari2() {
    tanggallengkap = new String();
    namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    tgl = new Date();
    hari = tgl.getDay();
    tanggal = tgl.getDate();
    bulan = tgl.getMonth();
    tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
    return (tanggallengkap);
}

function createMenanya2(nama, nisn, sekolah, kelas, menanya2_1, jmenanya2_1, menanya2_2, jmenanya2_2, menanya2_3, jmenanya2_3, menanya2_4, jmenanya2_4, waktunya, hari) {
    var task = {
        id: counter,
        nama: nama,
        nisn: nisn,
        sekolah: sekolah,
        kelas: kelas,
        menanya1_1: menanya2_1,
        jmenanya1_1: jmenanya2_1,
        menanya1_2: menanya2_2,
        jmenanya1_2: jmenanya2_2,
        menanya1_3: menanya2_3,
        jmenanya1_3: jmenanya2_3,
        menanya1_4: menanya2_4,
        jmenanya1_4: jmenanya2_4,
        nilai: 0,
        waktu: waktunya,
        hari: hari,
    }
    let database = firebase.database().ref("db_menanya2/" + counter);
    database.set(task);
}

function menanya2() {
    const menanya2_1 = document.getElementById('menanya2_1');
    const menanya2_2 = document.getElementById('menanya2_2');
    const menanya2_3 = document.getElementById('menanya2_3');
    const menanya2_4 = document.getElementById('menanya2_4');
    const jmenanya2_1 = document.getElementById('jmenanya2_1');
    const jmenanya2_2 = document.getElementById('jmenanya2_2');
    const jmenanya2_3 = document.getElementById('jmenanya2_3');
    const jmenanya2_4 = document.getElementById('jmenanya2_4');

    if (
        menanya2_1.value == "" ||
        menanya2_2.value == "" ||
        menanya2_3.value == "" ||
        menanya2_4.value == "" ||
        jmenanya2_1.value == "" ||
        jmenanya2_2.value == "" ||
        jmenanya2_3.value == "" ||
        jmenanya2_4.value == ""
    ) {
        Swal.fire({
            icon: 'info',
            title: 'Silahkan Isi Semua Kolom Pertanyaan dan Jawaban',
        })
    } else {
        let harinya = hari();
        let waktunya = waktu();
        let nama = sessionStorage.getItem('nama');
        let nisn = sessionStorage.getItem('nisn');
        let sekolah = sessionStorage.getItem('sekolah');
        let kelas = sessionStorage.getItem('kelas');

        createMenanya2(nama, nisn, sekolah, kelas, menanya2_1.value, jmenanya2_1.value, menanya2_2.value, jmenanya2_2.value, menanya2_3.value, jmenanya2_3.value, menanya2_4.value, jmenanya2_4.value, waktunya, harinya);

        Swal.fire({
            icon: 'success',
            title: 'Data Berhasil di Kirim',
            showConfirButton: false,
            Timer: 1500,
        }).then(function () {
            const tabmencoba = document.getElementById('tabmencoba');
            tabmencoba.classList.add('active')
            const mencoba = document.getElementById('mencoba');
            mencoba.classList.add('active')
            mencoba.classList.add('show')

            const tabmenanya = document.getElementById('tabmenanya');
            tabmenanya.classList.remove('active')
            const menanya = document.getElementById('menanya');
            menanya.classList.remove('active')
            menanya.classList.remove('show')
        });
    }

}

function createMengkomunikasikan2(nama, nisn, sekolah, kelas, mengkomunikasikan2_1, mengkomunikasikan2_2, mengkomunikasikan2_3, waktunya, hari) {
    var task = {
        id: counter2,
        nama: nama,
        nisn: nisn,
        sekolah: sekolah,
        kelas: kelas,
        mengkomunikasikan1_1: mengkomunikasikan2_1,
        mengkomunikasikan1_2: mengkomunikasikan2_2,
        mengkomunikasikan1_3: mengkomunikasikan2_3,
        nilai: 0,
        waktu: waktunya,
        hari: hari,
    }
    let database = firebase.database().ref("db_mengkomunikasikan2/" + counter2);
    database.set(task);
}

function mengkomunikasikan2() {
    const mengkomunikasikan2_1 = document.getElementById('mengkomunikasikan2_1');
    const mengkomunikasikan2_2 = document.getElementById('mengkomunikasikan2_2');
    const mengkomunikasikan2_3 = document.getElementById('mengkomunikasikan2_3');


    if (
        mengkomunikasikan2_1.value == "" ||
        mengkomunikasikan2_2.value == "" ||
        mengkomunikasikan2_3.value == ""
    ) {
        Swal.fire({
            icon: 'info',
            title: 'Silahkan Isi Semua Kolom Pertanyaan dan Jawaban',
        })
    } else {
        let harinya = hari2();
        let waktunya = waktu();
        let nama = sessionStorage.getItem('nama');
        let nisn = sessionStorage.getItem('nisn');
        let sekolah = sessionStorage.getItem('sekolah');
        let kelas = sessionStorage.getItem('kelas');

        createMengkomunikasikan2(nama, nisn, sekolah, kelas, mengkomunikasikan2_1.value, mengkomunikasikan2_2.value, mengkomunikasikan2_3.value, waktunya, harinya);

        Swal.fire({
            icon: 'success',
            title: 'Data Berhasil di Kirim',
            showConfirButton: false,
            Timer: 1500,
        }).then(function () {
            window.location = 'kuis2.html';
        });
    }

}