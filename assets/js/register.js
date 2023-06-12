// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhiBjhSo4hu21ZDKSXaqzMGFhkeM40ARs",
    authDomain: "tumbuhan-4d90e.firebaseapp.com",
    projectId: "tumbuhan-4d90e",
    storageBucket: "tumbuhan-4d90e.appspot.com",
    messagingSenderId: "14762128591",
    appId: "1:14762128591:web:e664cf3de1d8c7db0bf3ba",
    measurementId: "G-LWWYJNYSJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const db = getDatabase();

// References
const nisn = document.getElementById("nisn");
const password = document.getElementById("password");
const nama = document.getElementById("nama");
const kelas = document.getElementById("kelas");
const sekolah = document.getElementById('sekolah');
const submit = document.getElementById("register");

// Validation
function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

function Validation() {
    let namaregex = /^[a-zA-Z\s]+$/;
    let nisnregex = /^[0-9\s]+$/;

    if (
        isEmptyOrSpaces(nama.value) ||
        isEmptyOrSpaces(nisn.value) ||
        isEmptyOrSpaces(kelas.value) ||
        isEmptyOrSpaces(password.value) ||
        isEmptyOrSpaces(sekolah.value)
    ) {
        // alert('Isi Semua Data');
        sweetAlert("Oops...", "Isi Semua Data", "info");
        return false;
    }

    if (!namaregex.test(nama.value)) {
        // alert('Nama hanya boleh huruf alphabet!');
        sweetAlert("Oops...", "Nama hanya boleh huruf alphabet!", "info");

        return false;
    }

    if (!nisnregex.test(nisn.value)) {
        // alert('NIS hanya boleh angka');
        sweetAlert("Oops...", "NISN hanya boleh angka", "info");
        return false;
    }

    return true;
}

// regis to user firebase
function RegisterUser() {
    if (!Validation()) {
        return;
    }

    const dbRef = ref(db);

    get(child(dbRef, "db_siswa/" + nisn.value)).then((snapshot) => {
        if (snapshot.exists()) {
            // alert('Akun sudah terdaftar!');
            sweetAlert("Oops...", "NISN Sudah Terdaftar Sebelumnya!", "info");

        } else {
            set(ref(db, "db_siswa/" + nisn.value), {
                nama: nama.value,
                nisn: nisn.value,
                kelas: kelas.value,
                sekolah: sekolah.value,
                password: password.value,
                // pass: encPass(),
            })
                .then(() => {
                    // alert('Akun Berhasil Dibuat');
                    sweetAlert("Yeeeee", "Akun Berhasil Dibuat!", "success");
                    window.location = "index.html";
                })

            // .catch((error) => {
            //     sweetAlert("Oops...", "Gagal!", "error");

            //     // alert('Gagal' + error);
            // });
        }
    });
}

// encription
// function encPass() {
//   var pass12 = CryptoJS.AES.encrypt(pass.value, pass.value);
//   return pass12.toString();
// }

// Assign in events
submit.addEventListener("click", RegisterUser);