let idnya = [];


let kuisnya = document.getElementById('kuis');


let tmp = document.querySelector('.disini');
tmp.innerHTML = "";
kelasnya = document.getElementById('kelas');
sekolahnya = document.getElementById('sekolah');
// sekolah = document.getElementById('sekolah');
let kelasfix = '';
let sekolahfix = '';

let cek11 = 0;
// datahasil = kuisnya.value;


function mencari() {
    datahasil = kuisnya.value;
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
                                    <td class="ukr1">${taskvalue.nama}</td>
                                    <td class="ukr3">${taskvalue.kelas}</td>
                                    <td class="ukr1">${taskvalue.sekolah}</td>
                                    <td class="ukr3">${taskvalue.nilai}</td>
                                    <td class="ukr2">${taskvalue.hari}</td>
                                    <td class="ukr2">${taskvalue.waktu}</td>
                                    <td class="hps" onclick ="hapus(${taskvalue.id})"><button type="button" class="btn btn-outline-danger">Hapus</button></td>
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

// download data
function downloadfile() {

    if (kelasnya.value == "1") {
        kelasfix = "XI A";
    } else if (kelasnya.value == "2") {
        kelasfix = "XI B";
    } else if (kelasnya.value == "3") {
        kelasfix = "XI C";
    } else if (kelasnya.value == "4") {
        kelasfix = "XI D";
    } else if (kelasnya.value == "5") {
        kelasfix = "VI E";
    } else if (kelasnya.value == "6") {
        kelasfix = "VI F";
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