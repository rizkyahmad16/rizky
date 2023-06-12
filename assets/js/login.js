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
const password = document.getElementById("password");
const username = document.getElementById("nisn");
const submit = document.getElementById("login");

// Validation
function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

function Validation() {
    // let namaregex = /^[a-zA-Z\s]+$/;
    let nisnregex = /^[0-9\s]+$/;

    if (
        isEmptyOrSpaces(username.value) ||
        isEmptyOrSpaces(password.value) 
        
    ) {
        // alert('Isi Semua Data');
        sweetAlert("Oops...", "Isi Semua Data", "info");
        return false;
    }

    if (!nisnregex.test(username.value)) {
        // alert('Nama hanya boleh huruf alphabet!');
        sweetAlert("Oops...", "NISN hanya boleh angka", "info");
        // sweetAlert("Oops...", "Nama hanya boleh huruf alphabet!", "info");

        return false;
    }

    // if (!nisnregex.test(password.value)) {
    //     // alert('NIS hanya boleh angka');
    //     sweetAlert("Oops...", "NISN hanya boleh angka", "info");
    //     return false;
    // }

    return true;
}

// Auntentifikasi
function AunthenticateUser() {

    if (!Validation()) {
        return;
    }

    const dbref = ref(db);

    get(child(dbref, "db_siswa/" + username.value)).then((snapshot) => {
        if (snapshot.exists()) {
            let usernamedb = snapshot.val().nisn;
            let passworddb = snapshot.val().password;
            let namadb = snapshot.val().nama;
            let kelasdb = snapshot.val().kelas;
            let sekolahdb = snapshot.val().sekolah;
            if (usernamedb == username.value && passworddb == password.value) {
                sessionStorage.setItem("nisn", usernamedb);
                sessionStorage.setItem("password", passworddb);
                sessionStorage.setItem("nama", namadb);
                sessionStorage.setItem("kelas", kelasdb);
                sessionStorage.setItem("sekolah", sekolahdb);
                sweetAlert("Yeeee", "Berhasil Login", "success");
                window.location.href = ('beranda.html');

            } else {
                sweetAlert("Oops...", "Username dan Password anda salah", "error");

            }
        } else {
            // alert('Anda belum terdaftar');
            sweetAlert("Oops...", "Akun anda Belum terdaftar", "error");

        }
    });
}


// Assign in events
submit.addEventListener("click", AunthenticateUser);