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

import { getDatabase, ref, set, child, get, onValue, remove, update, query, orderByChild } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const db = getDatabase();

const usersRef = ref(db, "db_siswa/");
let deleteIDs = [];

// GET TOTAL SIZE
onValue(usersRef, (snapshot) => {
  let size = snapshot.size;
  $(".count").text(size);
  if (size == 0) {
    $("#selectAll").attr("disabled", true);
  } else {
    $("#selectAll").attr("disabled", false);
  }
});

//  Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getDatabase();
// const dbref = ref(db, "UserSiswa/");

const getDataSiswa = new Promise((resolve, reject) => {
  const antri = query(ref(db, "db_siswa/"));
  onValue(antri, (snapshot) => {
    const users = snapshot.val();
    resolve(users);
  });
});

let no = 0;

getDataSiswa.then((users) => {
    const tampilData = document.querySelector(".disini");
    console.log(users);
    for (let user in users) {
      no = no + 1;
    const tr = `
        <tr data-id=${user}>
        <td class="ukr1">${no}</td>
                                    <td class="ukr1">${users[user].nama}</td>
                                    <td class="ukr3">${users[user].nisn}</td>
                                    <td class="ukr1">${users[user].password}</td>
                                    <td class="ukr3">${users[user].sekolah}</td>
                                    <td class="ukr2">${users[user].kelas}</td>
                                    <td class="hps" onclick ="hapus(${users[user].nisn})"><button type="button" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
        </tr>
      `;
    tampilData.innerHTML += tr;
  }

  //filter kelas
  // onValue(ref(db, "kelas/"), (snapshot) => {
  //   // const edit = document.getElementById(".edit");
  //   // editkelas.innerHTML = `<option value="" selected="selected">-Pilih Kelas-</option>`;
  //   const filterkelas = document.getElementById("categoryFilter");
  //   filterkelas.innerHTML = `<option value="" selected="selected">Show All</option>`;
  //   const kelas = snapshot;
  //   kelas.forEach((kls) => {
  //     const kelasVal = kls.val();

  //     let kelas1 = `
  // <option value="${kelasVal.class}">${kelasVal.class}</option>
  // `;

  //     filterkelas.innerHTML += kelas1;
  //     // editkelas.innerHTML += kelas1;
  //   });
  // });

  
  $("#table_siswa").DataTable({
    lengthMenu: [
        [5, 10, 30, 50, -1],
        [5, 10, 30, 50, "all"],
    ],
});
});

function hapus(id) {
    $('#ModalHapus').modal('show');
    document.querySelector('.yakin').setAttribute('onclick', `deletetask(${id})`)
}

function deletetask(id) {
    var task = firebase.database().ref(datahasil + id);
    task.remove();
    tmp.innerHTML = "";
    $('#ModalHapus').modal('hide');
    mencari();
}


function hapussemua(id) {
    $('#ModalHapusAll').modal('show');
    document.querySelector('.yakinAll').setAttribute('onclick', `deletesemua(${id})`)
}

function deletesemua(id) {
    for (let i = 0; i < id.length; i++) {
        var task = firebase.database().ref(datahasil + id);
        task.remove();
    }
    tmp.innerHTML = "";
    mencari();
}

// download data
function downloadfile() {

    document.querySelector('.download');
    // download.addEventListener('click', function () {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');

    var table_html = table_div.outerHTML.replace(/ /g, '%20');

    var a = document.createElement('a');
    a.href = data_type + ', ' + table_html;
    a.download = `Nilai_${sekolahfix}_${kelasfix}.xls`;
    a.click();
   
}