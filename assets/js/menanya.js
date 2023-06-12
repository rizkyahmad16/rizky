let idnya = [];


let menanya = document.getElementById('menanya');


let tmp = document.querySelector('.disini');
tmp.innerHTML = "";
kelasnya = document.getElementById('kelas');
sekolahnya = document.getElementById('sekolah');
// sekolah = document.getElementById('sekolah');
let kelasfix = '';
let sekolahfix = '';

let cek11 = 0;
// datahasil = menanya.value;


function mencari() {
    datahasil = menanya.value;
    // console.log(datahasil);
    var task = firebase.database().ref(datahasil);

    tmp.innerHTML = "";
    if (kelasnya.value == "1") {
        kelasfix = "IV A";
    } else if (kelasnya.value == "2") {
        kelasfix = "IV B";
    } else if (kelasnya.value == "3") {
        kelasfix = "IV C";
    } else if (kelasnya.value == "4") {
        kelasfix = "IV D";
    } else if (kelasnya.value == "5") {
        kelasfix = "IV E";
    } else if (kelasnya.value == "6") {
        kelasfix = "IV F";
    }

    if (sekolahnya.value == "1") {
        sekolahfix = "SDN 1 Banjarmasin";
    }

    if ((kelasfix != '') && (sekolahfix != '')) {
        task.orderByChild("nama").on("child_added", function (data) {
            // task.on("child_added", function (data) {
            var taskvalue = data.val();

            if ((kelasfix == taskvalue.kelas) && (sekolahfix == taskvalue.sekolah)) {
                tmp.innerHTML += `<tr>
                                    <td class="ukr1" rowspan="4">${taskvalue.nama}</td>
                                    <td class="ukr3">1. ${taskvalue.menanya1_1}</td>
                                    <td class="ukr1">${taskvalue.jmenanya1_1}</td>
                                    <td class="ukr3" rowspan="4"><span id="nilai${taskvalue.id}">${taskvalue.nilai}</span> <a onclick="ubahnilai(${taskvalue.id})" class="btn btn-primary"><i class="fas fa-edit"></i></td>
                                    <td class="ukr2" rowspan="4">${taskvalue.hari}</td>
                                    <td class="ukr2" rowspan="4">${taskvalue.waktu}</td>
                                    <td class="hps" rowspan="4"><button type="button" class="btn btn-outline-danger" onclick ="hapus(${taskvalue.id})">Hapus</button></td>
                                </tr>
                                <tr>
                                <td class="ukr3">2. ${taskvalue.menanya1_2}</td>
                                <td class="ukr1">${taskvalue.jmenanya1_2}</td>
                                </tr>
                                <tr>
                                <td class="ukr3">3. ${taskvalue.menanya1_3}</td>
                                <td class="ukr1">${taskvalue.jmenanya1_3}</td>
                                </tr>
                                <tr>
                                <td class="ukr3">4. ${taskvalue.menanya1_4}</td>
                                <td class="ukr1">${taskvalue.jmenanya1_4}</td>
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
    } else {
        $('#ModalFilter').modal('show')
    }
}

window.onload = function () {
    kelasnya = document.getElementById('kelas');
    // sekolah = document.getElementById('sekolah');
    kuis = document.getElementById('kuis');
    kelasnya.value = value = "0";
    // sekolah.value = value = "0";
    // kuis.value = value = "kuis1/";
}



function hapus(id) {
    $('#ModalHapus').modal('show');
    document.querySelector('.yakin').setAttribute('onclick', `deletetask(${id})`)
}

function deletetask(id) {
    var task = firebase.database().ref(datahasil + id);
    task.remove();
    tmp.innerHTML = "";
    mencari();
    $('#ModalHapus').modal('hide');
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

function ubahnilai(id) {
    datahasil = menanya.value;
    var task = firebase.database().ref(datahasil);
    task.on('value', function (data) {
        task = data.val()
        // console.log(task[id]['nilai']);
        nilai = task[id]['nilai'];
        const nilaiinput = document.querySelector('.nilai');
        nilaiinput.value = nilai;
    });
    $('#ModalEdit').modal('show');
    document.querySelector('.yakin2').setAttribute('onclick', `edittask(${id})`)
}

function edittask(idnya) {
    datahasil = menanya.value;
    var task = firebase.database().ref(datahasil);
    task.on('value', function (data) {
        task = data.val()
        let namanya = task[idnya]['nama'];
        let sekolahnya = task[idnya]['sekolah'];
        let kelasnya = task[idnya]['kelas'];
        let menanya1_1nya = task[idnya]['menanya1_1'];
        let menanya1_2nya = task[idnya]['menanya1_2'];
        let menanya1_3nya = task[idnya]['menanya1_3'];
        let menanya1_4nya = task[idnya]['menanya1_4'];
        let jmenanya1_1nya = task[idnya]['jmenanya1_1'];
        let jmenanya1_2nya = task[idnya]['jmenanya1_2'];
        let jmenanya1_3nya = task[idnya]['jmenanya1_3'];
        let jmenanya1_4nya = task[idnya]['jmenanya1_4'];
        let waktunya = task[idnya]['waktu'];
        let harinya = task[idnya]['hari'];

        let nilainya = document.getElementById('nilai').value;


        var updatetask = {
            id: idnya,
            nama: namanya,
            sekolah: sekolahnya,
            kelas: kelasnya,
            menanya1_1: menanya1_1nya,
            menanya1_2: menanya1_2nya,
            menanya1_3: menanya1_3nya,
            menanya1_4: menanya1_4nya,
            jmenanya1_1: jmenanya1_1nya,
            jmenanya1_2: jmenanya1_2nya,
            jmenanya1_3: jmenanya1_3nya,
            jmenanya1_4: jmenanya1_4nya,
            nilai: nilainya,
            waktu: waktunya,
            hari: harinya
        }
        let database = firebase.database().ref(datahasil + idnya);
        database.set(updatetask);

        $('#ModalEdit').modal('hide');
        setTimeout(function () {
            const nilaiup = document.querySelector(`#nilai${idnya}`);
            nilaiup.innerHTML = nilainya;
        }, 1000);
    });
}

// download data
function downloadfile() {

    if (kelasnya.value == "1") {
        kelasfix = "IV A";
    } else if (kelasnya.value == "2") {
        kelasfix = "IV B";
    } else if (kelasnya.value == "3") {
        kelasfix = "IV C";
    } else if (kelasnya.value == "4") {
        kelasfix = "IV D";
    }

    if (sekolahnya.value == "1") {
        sekolahfix = "SDN 1 Banjarmasin";
    }

    document.querySelector('.download');
    // download.addEventListener('click', function () {
    var data_type = 'data:application/vnd.ms-excel';
    var table_div = document.getElementById('table_wrapper');

    if (table_div.rows.length <= 1) {
        $('#ModalDownload').modal('show')
    } else {
        var table_html = table_div.outerHTML.replace(/ /g, '%20');

        var a = document.createElement('a');
        a.href = data_type + ', ' + table_html;
        a.download = `Nilai_${sekolahfix}_${kelasfix}.xls`;
        a.click();
    }
}