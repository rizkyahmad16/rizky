// const dbtoken = db.ref('db_token/').on('value', tokenSuccess, handleError)
const dbkkm = db.ref("db_kkm/").on("value", kkmSuccess, handleError);

let loop1;

let kkm1 = 0;

let tokenNew = 0;

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

function kkmSuccess(items1) {
  kkm1 = items1.val()[3]["kkm"];
}

// function tokenSuccess(items1) {
//     tokenNew = items1.val()[0]['token'];
//     let tokenAturan = document.getElementById('token');
//     tokenAturan.innerHTML = `${tokenNew}`;
// }

function handleError(error) {
  console.log(error);
}

let jawabB = [];

function formkuis() {
  document.getElementById("petunjukkuis").hidden = true;
  document.getElementById("soalkuis").hidden = false;

  listsoal1();
}

// function mulai1() {
//     let nama1 = document.getElementById('nama').value;
//     let kelas1 = document.getElementById('kelas').value;
//     let sekolah1 = document.getElementById('sekolah').value;
//     let token = document.getElementById('tokennew').value;

//     //Local Storage
//     localStorage.setItem("nama", nama1);
//     localStorage.setItem('kelas', kelas1);
//     localStorage.setItem('sekolah', sekolah1);

//     const errNama = document.getElementById('errNama');
//     const errKelas = document.getElementById('errKelas');
//     const errSekolah = document.getElementById('errSekolah');
//     const errToken = document.getElementById('errToken');
//     if ((nama1 == "") && (kelas1 == "") && (sekolah1 == "") && (token == "")) {
//         errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Nama harus diisi terlebih dahulu!
//                             </div>`;
//         errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih kelas terlebih dahulu!
//                             </div>`;
//         errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih Sekolah terlebih dahulu!
//                             </div>`;
//         errToken.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan isi Token terlebih dahulu!
//                             </div>`;
//     } else if ((nama1 == "") && (kelas1 == "") && (sekolah1 == "") && (parseInt(token) != parseInt(tokenNew))) {
//         errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Nama harus diisi terlebih dahulu!
//                             </div>`;
//         errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih kelas terlebih dahulu!
//                             </div>`;
//         errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih Sekolah terlebih dahulu!
//                             </div>`;
//         errToken.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Token Salah, silahkan masukkan ulang!
//                             </div>`;
//     } else if ((nama1 == "") && (kelas1 == "") && (token == "")) {
//         errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Nama harus diisi terlebih dahulu!
//                             </div>`;
//         errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih kelas terlebih dahulu!
//                             </div>`;
//         errToken.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan isi Token terlebih dahulu!
//                             </div>`;
//         errSekolah.innerHTML = '';
//     } else if ((nama1 == "") && (kelas1 == "") && (parseInt(token) != parseInt(tokenNew))) {
//         errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Nama harus diisi terlebih dahulu!
//                             </div>`;
//         errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih kelas terlebih dahulu!
//                             </div>`;
//         errToken.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Token Salah, silahkan masukkan ulang!
//                             </div>`;
//         errSekolah.innerHTML = '';
//     } else if ((nama1 == "") && (sekolah1 == "") && (token == "")) {
//         errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Nama harus diisi terlebih dahulu!
//                             </div>`;
//         errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih sekolah terlebih dahulu!
//                             </div>`;
//         errToken.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan isi Token terlebih dahulu!
//                             </div>`;
//         errKelas.innerHTML = '';
//     } else if ((nama1 == "") && (sekolah1 == "") && (parseInt(token) != parseInt(tokenNew))) {
//         errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Nama harus diisi terlebih dahulu!
//                             </div>`;
//         errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih sekolah terlebih dahulu!
//                             </div>`;
//         errToken.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Token Salah, silahkan masukkan ulang!
//                             </div>`;
//         errKelas.innerHTML = '';
//     } else if ((kelas1 == "") && (sekolah1 == "") && (token == "")) {
//         errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih kelas terlebih dahulu!
//                             </div>`;
//         errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih sekolah terlebih dahulu!
//                             </div>`;
//         errToken.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan isi Token terlebih dahulu!
//                             </div>`;
//         errNama.innerHTML = '';
//     } else if ((kelas1 == "") && (sekolah1 == "") && (parseInt(token) != parseInt(tokenNew))) {
//         errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih kelas terlebih dahulu!
//                             </div>`;
//         errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih sekolah terlebih dahulu!
//                             </div>`;
//         errToken.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Token Salah, silahkan masukkan ulang!
//                             </div>`;
//         errNama.innerHTML = '';
//     } else if ((nama1 == "") && (kelas1 == "") && (sekolah1 == "")) {
//         errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Nama harus diisi terlebih dahulu!
//                             </div>`;
//         errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih kelas terlebih dahulu!
//                             </div>`;
//         errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih sekolah terlebih dahulu!
//                             </div>`;
//         errToken.innerHTML = '';
//     } else if ((nama1 == "") && (kelas1 == "")) {
//         errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Nama harus diisi terlebih dahulu!
//                             </div>`;
//         errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih kelas terlebih dahulu!
//                             </div>`;
//         errSekolah.innerHTML = '';
//         errToken.innerHTML = '';
//     } else if ((nama1 == "") && (sekolah1 == "")) {
//         errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Nama harus diisi terlebih dahulu!
//                             </div>`;
//         errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih kelas terlebih dahulu!
//                             </div>`;
//         errKelas.innerHTML = '';
//         errToken.innerHTML = '';
//     } else if ((nama1 == "") && (token == "")) {
//         errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Nama harus diisi terlebih dahulu!
//                             </div>`;
//         errToken.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan isi Token terlebih dahulu!
//                             </div>`;
//         errKelas.innerHTML = '';
//         errSekolah.innerHTML = '';
//     } else if ((nama1 == "") && (parseInt(token) != parseInt(tokenNew))) {
//         errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Nama harus diisi terlebih dahulu!
//                             </div>`;
//         errToken.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Token Salah, silahkan masukkan ulang!
//                             </div>`;
//         errKelas.innerHTML = '';
//         errSekolah.innerHTML = '';
//     } else if ((sekolah1 == "") && (kelas1 == "")) {
//         errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Nama harus diisi terlebih dahulu!
//                             </div>`;
//         errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih kelas terlebih dahulu!
//                             </div>`;
//         errNama.innerHTML = '';
//         errToken.innerHTML = '';
//     } else if ((sekolah1 == "") && (token == "")) {
//         errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Nama harus diisi terlebih dahulu!
//                             </div>`;
//         errToken.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan isi Token terlebih dahulu!
//                             </div>`;
//         errNama.innerHTML = '';
//         errKelas.innerHTML = '';
//     } else if ((sekolah1 == "") && (parseInt(token) != parseInt(tokenNew))) {
//         errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Nama harus diisi terlebih dahulu!
//                             </div>`;
//         errToken.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Token Salah, silahkan masukkan ulang!
//                             </div>`;
//         errNama.innerHTML = '';
//         errKelas.innerHTML = '';
//     } else if ((kelas1 == "") && (token == "")) {
//         errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih kelas terlebih dahulu!
//                             </div>`;
//         errToken.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan isi Token terlebih dahulu!
//                             </div>`;
//         errNama.innerHTML = '';
//         errSekolah.innerHTML = '';
//     } else if ((kelas1 == "") && (parseInt(token) != parseInt(tokenNew))) {
//         errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih kelas terlebih dahulu!
//                             </div>`;
//         errToken.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Token Salah, silahkan masukkan ulang!
//                             </div>`;
//         errNama.innerHTML = '';
//         errSekolah.innerHTML = '';
//     } else if (nama1 == "") {
//         errNama.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Nama harus diisi terlebih dahulu!
//                             </div>`;
//         errKelas.innerHTML = '';
//         errSekolah.innerHTML = '';
//         errToken.innerHTML = '';
//     } else if (kelas1 == "") {
//         errKelas.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih kelas terlebih dahulu!
//                             </div>`;
//         errNama.innerHTML = '';
//         errSekolah.innerHTML = '';
//         errToken.innerHTML = '';
//     } else if (sekolah1 == "") {
//         errSekolah.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan pilih sekolah terlebih dahulu!
//                             </div>`;
//         errNama.innerHTML = '';
//         errKelas.innerHTML = '';
//         errToken.innerHTML = '';
//     } else if (token == "") {
//         errToken.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Silahkan isi Token terlebih dahulu!
//                             </div>`;
//         errNama.innerHTML = '';
//         errKelas.innerHTML = '';
//         errSekolah.innerHTML = '';
//     } else if (parseInt(token) != parseInt(tokenNew)) {
//         errToken.innerHTML = `<div class="alert alert-danger" role="alert" style="font-size: 12pt;">
//                                 Token Salah, silahkan masukkan ulang!
//                             </div>`;
//         errNama.innerHTML = '';
//         errKelas.innerHTML = '';
//         errSekolah.innerHTML = '';
//     } else {
//         const formkuis = document.getElementById('formkuis');
//         formkuis.hidden = true;

//         const soalkuis = document.getElementById('soalkuis');
//         soalkuis.hidden = false;

//         listsoal1();
//     }
// }

function listsoal1() {
  let noSoal = 1;

  function getSoal(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(xhr.response);
        } else if (XPathEvaluator.status === 404) {
          error();
        }
      }
    };
    xhr.open("get", url);
    xhr.send();
  }

  getSoal(
    "../assets/banksoal/evaluasi.json",
    (results) => {
      const listSoalJson = JSON.parse(results);
      let soal = "";
      let soalRand = [];
      let soalRandom = [];
      let i = 0;

      while (i < listSoalJson.length) {
        let rand = Math.floor(Math.random() * listSoalJson.length);
        soalRand[i] = listSoalJson[rand];
        soalRandom = Array.from(new Set(soalRand));
        i = soalRandom.length;
      }

      soalRandom.forEach((s) => {
        soal += tampilSoal(s);
      });

      const listSoal = document.querySelector(".list-soal");
      listSoal.innerHTML = soal;

      document.getElementById("id1").hidden = false;
      document.getElementById("id2").hidden = true;
      document.getElementById("id3").hidden = true;
      document.getElementById("id4").hidden = true;
      document.getElementById("id5").hidden = true;
      document.getElementById("id6").hidden = true;
      document.getElementById("id7").hidden = true;
      document.getElementById("id8").hidden = true;
      document.getElementById("id9").hidden = true;
      document.getElementById("id10").hidden = true;
      document.getElementById("id11").hidden = true;
      document.getElementById("id12").hidden = true;
      document.getElementById("id13").hidden = true;
      document.getElementById("id14").hidden = true;
      document.getElementById("id15").hidden = true;
      document.getElementById("id16").hidden = true;
      document.getElementById("id17").hidden = true;
      document.getElementById("id18").hidden = true;
      document.getElementById("id19").hidden = true;
      document.getElementById("id20").hidden = true;
    },
    () => { }
  );

  countDownDate = new Date().getTime();
  //waktu 15 menit
  countDownDate += 1801000;

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Perhitungan waktu untuk menit dan detik
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("waktu").innerHTML = minutes + ":" + seconds;

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("waktu").innerHTML = "Waktu Selesai";
      nilaiwktu = 1;
      cekKuis1TO();
    }
  }, 1000);

  let idx = 0;
  function tampilSoal(s) {
    jawabB[idx++] = s.jawaban;
    return `<div id="id${idx}">
                <form>
                <p>${noSoal++}. ${s.soal}</p>
                <input type="radio" id="jA${s.id
      }" onclick="cek${idx}(this.value);" name="jawab${s.id
      }" value="A">
                <label for="A">${s.a}</label><br>
                <input type="radio" id="jB${s.id
      }" onclick="cek${idx}(this.value);" name="jawab${s.id
      }" value="B">
                <label for="B">${s.b}</label><br>
                <input type="radio" id="jC${s.id
      }" onclick="cek${idx}(this.value);" name="jawab${s.id
      }" value="C">
                <label for="C">${s.c}</label><br>
                <input type="radio" id="jD${s.id
      }" onclick="cek${idx}(this.value);" name="jawab${s.id
      }" value="D">
                <label for="D">${s.d}</label><br>
                </form>
                </div>`;
  }
}

let kuis1_1 = "";
let kuis1_2 = "";
let kuis1_3 = "";
let kuis1_4 = "";
let kuis1_5 = "";
let kuis1_6 = "";
let kuis1_7 = "";
let kuis1_8 = "";
let kuis1_9 = "";
let kuis1_10 = "";
let kuis1_11 = "";
let kuis1_12 = "";
let kuis1_13 = "";
let kuis1_14 = "";
let kuis1_15 = "";
let kuis1_16 = "";
let kuis1_17 = "";
let kuis1_18 = "";
let kuis1_19 = "";
let kuis1_20 = "";

let nilai = 0;
function cek1(pilih) {
  kuis1_1 = pilih;
  document.getElementById("soal1").classList.add("text-white", "btn-primary");
  document.getElementById("soal1").classList.remove("btn-outline-primary");
}
function cek2(pilih) {
  kuis1_2 = pilih;
  document.getElementById("soal2").classList.add("text-white", "btn-primary");
  document.getElementById("soal2").classList.remove("btn-outline-primary");
}
function cek3(pilih) {
  kuis1_3 = pilih;
  document.getElementById("soal3").classList.add("text-white", "btn-primary");
  document.getElementById("soal3").classList.remove("btn-outline-primary");
}
function cek4(pilih) {
  kuis1_4 = pilih;
  document.getElementById("soal4").classList.add("text-white", "btn-primary");
  document.getElementById("soal4").classList.remove("btn-outline-primary");
}
function cek5(pilih) {
  kuis1_5 = pilih;
  document.getElementById("soal5").classList.add("text-white", "btn-primary");
  document.getElementById("soal5").classList.remove("btn-outline-primary");
}

function cek6(pilih) {
  kuis1_6 = pilih;
  document.getElementById("soal6").classList.add("text-white", "btn-primary");
  document.getElementById("soal6").classList.remove("btn-outline-primary");
}
function cek7(pilih) {
  kuis1_7 = pilih;
  document.getElementById("soal7").classList.add("text-white", "btn-primary");
  document.getElementById("soal7").classList.remove("btn-outline-primary");
}
function cek8(pilih) {
  kuis1_8 = pilih;
  document.getElementById("soal8").classList.add("text-white", "btn-primary");
  document.getElementById("soal8").classList.remove("btn-outline-primary");
}
function cek9(pilih) {
  kuis1_9 = pilih;
  document.getElementById("soal9").classList.add("text-white", "btn-primary");
  document.getElementById("soal9").classList.remove("btn-outline-primary");
}
function cek10(pilih) {
  kuis1_10 = pilih;
  document.getElementById("soal10").classList.add("text-white", "btn-primary");
  document.getElementById("soal10").classList.remove("btn-outline-primary");
}
function cek11(pilih) {
  kuis1_11 = pilih;
  document.getElementById("soal11").classList.add('text-white', 'btn-primary');
  document.getElementById("soal11").classList.remove('btn-outline-primary');
}
function cek12(pilih) {
  kuis1_12 = pilih;
  document.getElementById("soal12").classList.add('text-white', 'btn-primary');
  document.getElementById("soal12").classList.remove('btn-outline-primary');
}
function cek13(pilih) {
  kuis1_13 = pilih;
  document.getElementById("soal13").classList.add('text-white', 'btn-primary');
  document.getElementById("soal13").classList.remove('btn-outline-primary');
}
function cek14(pilih) {
  kuis1_14 = pilih;
  document.getElementById("soal14").classList.add('text-white', 'btn-primary');
  document.getElementById("soal14").classList.remove('btn-outline-primary');
}
function cek15(pilih) {
  kuis1_15 = pilih;
  document.getElementById("soal15").classList.add('text-white', 'btn-primary');
  document.getElementById("soal15").classList.remove('btn-outline-primary');
}
function cek16(pilih) {
  kuis1_16 = pilih;
  document.getElementById("soal16").classList.add('text-white', 'btn-primary');
  document.getElementById("soal16").classList.remove('btn-outline-primary');
}
function cek17(pilih) {
  kuis1_17 = pilih;
  document.getElementById("soal17").classList.add('text-white', 'btn-primary');
  document.getElementById("soal17").classList.remove('btn-outline-primary');
}
function cek18(pilih) {
  kuis1_18 = pilih;
  document.getElementById("soal18").classList.add('text-white', 'btn-primary');
  document.getElementById("soal18").classList.remove('btn-outline-primary');
}
function cek19(pilih) {
  kuis1_19 = pilih;
  document.getElementById("soal19").classList.add('text-white', 'btn-primary');
  document.getElementById("soal19").classList.remove('btn-outline-primary');
}
function cek20(pilih) {
  kuis1_20 = pilih;
  document.getElementById("soal20").classList.add('text-white', 'btn-primary');
  document.getElementById("soal20").classList.remove('btn-outline-primary');
}

$(function () {
  setInterval(cek, 1000);
});

let kuis1 = [];
function cek() {
  kuis1 = [kuis1_1, kuis1_2, kuis1_3, kuis1_4, kuis1_5, kuis1_6, kuis1_7, kuis1_8, kuis1_9, kuis1_10, kuis1_11, kuis1_12, kuis1_13, kuis1_14, kuis1_15, kuis1_16, kuis1_17, kuis1_18, kuis1_19, kuis1_20];
}

function cekKuis1TO() {
  const soalkuis = document.getElementById("soalkuis");
  soalkuis.hidden = true;
  const hasilkuis = document.getElementById("hasilkuis");
  hasilkuis.hidden = false;
  for (let a = 0; a < jawabB.length; a++) {
    if (kuis1[a] == jawabB[a]) {
      nilai = nilai + 5;
    }
  }

  localStorage.setItem("nkuis1", nilai);
  var namaS = localStorage.getItem("nama");
  var kelasS = localStorage.getItem("kelas");
  var sekolahS = localStorage.getItem("sekolah");
  let harinya = hari();
  let waktunya = waktu();
  if (nilai < kkm1) {
    const namaHTL = document.getElementById("namaHTL");
    namaHTL.innerHTML = namaS;
    const kelasHTL = document.getElementById("kelasHTL");
    kelasHTL.innerHTML = kelasS;
    const sekolahHTL = document.getElementById("sekolahHTL");
    sekolahHTL.innerHTML = sekolahS;
    const nilaiHTL = document.getElementById("nilaiHTL");
    nilaiHTL.innerHTML = nilai;
    const waktuHTL = document.getElementById("waktuHTL");
    waktuHTL.innerHTML = waktunya;
    const tanggalHTL = document.getElementById("tanggalHTL");
    tanggalHTL.innerHTML = harinya;
    const hasilTL = document.getElementById("hasilTL");
    hasilTL.hidden = false;
    const hasilL = document.getElementById("hasilL");
    hasilL.hidden = true;
  } else {
    const namaHL = document.getElementById("namaHL");
    namaHL.innerHTML = namaS;
    const kelasHL = document.getElementById("kelasHL");
    kelasHL.innerHTML = kelasS;
    const sekolahHL = document.getElementById("sekolahHL");
    sekolahHL.innerHTML = sekolahS;
    const nilaiHL = document.getElementById("nilaiHL");
    nilaiHL.innerHTML = nilai;
    const waktuHTL = document.getElementById("waktuHL");
    waktuHTL.innerHTML = waktunya;
    const tanggalHTL = document.getElementById("tanggalHL");
    tanggalHTL.innerHTML = harinya;
    const hasilTL = document.getElementById("hasilTL");
    hasilTL.hidden = true;
    const hasilL = document.getElementById("hasilL");
    hasilL.hidden = false;
  }

  

  createTask(sekolahS, namaS, kelasS, nilai, waktunya, harinya);
}

function dialogSubmit() {
  $("#ModalSubmit1").modal("show");
}

function cekKuis1() {
  if ((kuis1_1 == "") || (kuis1_2 == "") || (kuis1_3 == "") || (kuis1_4 == "") || (kuis1_5 == "") || (kuis1_6 == "") || (kuis1_7 == "") || (kuis1_8 == "") || (kuis1_9 == "") || (kuis1_10 == "") || (kuis1_11 == "") || (kuis1_12 == "") || (kuis1_13 == "") || (kuis1_14 == "") || (kuis1_15 == "") || (kuis1_16 == "") || (kuis1_17 == "") || (kuis1_18 == "") || (kuis1_19 == "") || (kuis1_20 == "")) {
    $('#ModalKuisKosong').modal('show')
    $('#ModalSubmit1').modal('hide')
  } else {
    $("#ModalSubmit1").modal("hide");
    for (let a = 0; a < jawabB.length; a++) {
      if (kuis1[a] == jawabB[a]) {
        const soalkuis = document.getElementById("soalkuis");
        soalkuis.hidden = true;
        const hasilkuis = document.getElementById("hasilkuis");
        hasilkuis.hidden = false;
        nilai = nilai + 5;
      }
    }

    localStorage.setItem("nkuis1", nilai);
    var namaS = localStorage.getItem("nama");
    var kelasS = localStorage.getItem("kelas");
    var sekolahS = localStorage.getItem("sekolah");
    let harinya = hari();
    let waktunya = waktu();
    if (nilai < kkm1) {
      const namaHTL = document.getElementById("namaHTL");
      namaHTL.innerHTML = namaS;
      const kelasHTL = document.getElementById("kelasHTL");
      kelasHTL.innerHTML = kelasS;
      const sekolahHTL = document.getElementById("sekolahHTL");
      sekolahHTL.innerHTML = sekolahS;
      const nilaiHTL = document.getElementById("nilaiHTL");
      nilaiHTL.innerHTML = nilai;
      const waktuHTL = document.getElementById("waktuHTL");
      waktuHTL.innerHTML = waktunya;
      const tanggalHTL = document.getElementById("tanggalHTL");
      tanggalHTL.innerHTML = harinya;
      const hasilTL = document.getElementById("hasilTL");
      hasilTL.hidden = false;
      const hasilL = document.getElementById("hasilL");
      hasilL.hidden = true;
    } else {
      const namaHL = document.getElementById("namaHL");
      namaHL.innerHTML = namaS;
      const kelasHL = document.getElementById("kelasHL");
      kelasHL.innerHTML = kelasS;
      const sekolahHL = document.getElementById("sekolahHL");
      sekolahHL.innerHTML = sekolahS;
      const nilaiHL = document.getElementById("nilaiHL");
      nilaiHL.innerHTML = nilai;
      const waktuHTL = document.getElementById("waktuHL");
      waktuHTL.innerHTML = waktunya;
      const tanggalHTL = document.getElementById("tanggalHL");
      tanggalHTL.innerHTML = harinya;
      const hasilTL = document.getElementById("hasilTL");
      hasilTL.hidden = true;
      const hasilL = document.getElementById("hasilL");
      hasilL.hidden = false;
    }

    

    createTask(sekolahS, namaS, kelasS, nilai, waktunya, harinya);
  }
}

let indeks = document.getElementById("indeks");
indeks.innerHTML = 1;

function soal1() {
  indeks.innerHTML = 1;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("soalPrev").hidden = true;
  document.getElementById("id1").hidden = false;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal2();");
}

function soal2() {
  indeks.innerHTML = 2;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = false;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal1();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal3();");
}

function soal3() {
  indeks.innerHTML = 3;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = false;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal2();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal4();");
}

function soal4() {
  indeks.innerHTML = 4;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = false;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal3();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal5();");
}

function soal5() {
  indeks.innerHTML = 5;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = false;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal4();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal6();");
}

function soal6() {
  indeks.innerHTML = 6;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = false;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal5();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal7();");
}

function soal7() {
  indeks.innerHTML = 7;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = false;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal6();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal8();");
}

function soal8() {
  indeks.innerHTML = 8;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = false;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal7();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal9();");
}

function soal9() {
  indeks.innerHTML = 9;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = false;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal8();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal10();");
}

function soal10() {
  indeks.innerHTML = 10;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = false;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal9();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal11();");
}

function soal11() {
  indeks.innerHTML = 11;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = false;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal10();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal12();");
}

function soal12() {
  indeks.innerHTML = 12;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = false;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal11();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal13();");
}

function soal13() {
  indeks.innerHTML = 13;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = false;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal12();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal14();");
}

function soal14() {
  indeks.innerHTML = 14;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = false;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal13();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal15();");
}

function soal15() {
  indeks.innerHTML = 15;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = false;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal14();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal16();");
}

function soal16() {
  indeks.innerHTML = 16;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = false;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal15();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal17();");
}

function soal17() {
  indeks.innerHTML = 17;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = false;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal16();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal18();");
}

function soal18() {
  indeks.innerHTML = 18;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = false;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal17();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal19();");
}

function soal19() {
  indeks.innerHTML = 19;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = false;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = false;
  document.getElementById("id20").hidden = true;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal18();");
  document.getElementById("soalNext").setAttribute("onClick", "javascript: soal20();");
}

function soal20() {
  indeks.innerHTML = 20;
  document.getElementById("soalPrev").hidden = false;
  document.getElementById("soalNext").hidden = true;
  document.getElementById("id1").hidden = true;
  document.getElementById("id2").hidden = true;
  document.getElementById("id3").hidden = true;
  document.getElementById("id4").hidden = true;
  document.getElementById("id5").hidden = true;
  document.getElementById("id6").hidden = true;
  document.getElementById("id7").hidden = true;
  document.getElementById("id8").hidden = true;
  document.getElementById("id9").hidden = true;
  document.getElementById("id10").hidden = true;
  document.getElementById("id11").hidden = true;
  document.getElementById("id12").hidden = true;
  document.getElementById("id13").hidden = true;
  document.getElementById("id14").hidden = true;
  document.getElementById("id15").hidden = true;
  document.getElementById("id16").hidden = true;
  document.getElementById("id17").hidden = true;
  document.getElementById("id18").hidden = true;
  document.getElementById("id19").hidden = true;
  document.getElementById("id20").hidden = false;
  document.getElementById("soalPrev").setAttribute("onClick", "javascript: soal19();");
}