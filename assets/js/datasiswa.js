let idnya = [];


let kuisnya = 'db_siswa/';


let tmp = document.querySelector('.disini');
tmp.innerHTML = "";
kelasnya = document.getElementById('kelas');
sekolahnya = document.getElementById('sekolah');
// sekolah = document.getElementById('sekolah');
let kelasfix = '';
let sekolahfix = '';

let cek11 = 0;
// datahasil = kuisnya.value;

/*datatable*/
$("#table_siswa").DataTable({
    lengthMenu: [
        [5, 10, 30, -1],
        [5, 10, 30, "all"],
    ],
});


function mencari() {
    datahasil = kuisnya;
    // console.log(datahasil);
    var task = firebase.database().ref(datahasil);

    tmp.innerHTML = "";
    if (kelasnya.value == "1") {
        kelasfix = "IV A";
    } else if (kelasnya.value == "2") {
        kelasfix = "IV B";
    } else if (kelasnya.value == "3") {
        kelasfix = "IV C";
    }

    if (sekolahnya.value == "1") {
        sekolahfix = "SDN 1 Banjarmasin";
    }

    if ((kelasfix != '') && (sekolahfix != '')) {
        let no = 0;
        task.orderByChild("nama").on("child_added", function (data) {
            // task.on("child_added", function (data) {
            no = no + 1;
            var taskvalue = data.val();

            if ((kelasfix == taskvalue.kelas) && (sekolahfix == taskvalue.sekolah)) {
                tmp.innerHTML += `<tr>
                                    <td class="ukr1">${no}</td>
                                    <td class="ukr1">${taskvalue.nama}</td>
                                    <td class="ukr3">${taskvalue.nisn}</td>
                                    <td class="ukr1">${taskvalue.password}</td>
                                    <td class="ukr3">${taskvalue.sekolah}</td>
                                    <td class="ukr2">${taskvalue.kelas}</td>
                                    <td class="hps" onclick ="hapus(${taskvalue.nisn})"><button type="button" class="btn btn-danger"><i class="fas fa-trash"></i></button></td>
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

    if (kelasnya.value == "1") {
        kelasfix = "XI MIPA 1";
    } else if (kelasnya.value == "2") {
        kelasfix = "XI MIPA 2";
    } else if (kelasnya.value == "3") {
        kelasfix = "XI MIPA 3";

    }
    if (sekolahnya.value == "1") {
        sekolahfix = "SMAN 1 Alalak";
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