const dbkkm = db.ref('db_kkm/').on('value', kkmSuccess, handleError)

let pk1 = 0;
let perk1 = 0;

let loop1;

function kkmSuccess(items1) {

    loop1 = items1.val();
    let i = 0;
    while (i < loop1.length) {
        if (loop1[i] != undefined) {
            pk1 += 1;
        }
        i++;
    }
    // console.log(items1.val()[0]['kkm']);
    // pk1 = items1.val().length;

    const kkm1 = items1.val()[0]['kkm'];
    const kkm2 = items1.val()[1]['kkm'];
    const kkm3 = items1.val()[2]['kkm'];
    const kkm4 = items1.val()[3]['kkm'];

    const kkmKuis1 = document.querySelector('.kkmKuis1');
    kkmKuis1.innerHTML = kkm1;
    const kkmK1 = document.querySelector('.KKM1');
    kkmK1.value = kkm1;

    const kkmKuis2 = document.querySelector('.kkmKuis2');
    kkmKuis2.innerHTML = kkm2;
    const kkmK2 = document.querySelector('.KKM2');
    kkmK2.value = kkm2;

    const kkmKuis3 = document.querySelector('.kkmKuis3');
    kkmKuis3.innerHTML = kkm3;
    const kkmK3 = document.querySelector('.KKM3');
    kkmK3.value = kkm3;

    const kkmEvaluasi = document.querySelector('.kkmEvaluasi');
    kkmEvaluasi.innerHTML = kkm4;
    const kkmK4 = document.querySelector('.KKM4');
    kkmK4.value = kkm4;
    // const pbk1 = document.querySelector('.pbk1');
    // pbk1.innerHTML = perk1;
}

function handleError(error) {
    console.log(error);
}

function setKKM1() {
    let KKM1 = document.getElementById('KKM1').value;
    var task = {
        id: 0,
        kkm: KKM1
    }
    let database = firebase.database().ref("db_kkm/" + 0);
    database.set(task);
}

function setKKM2() {
    let KKM2 = document.getElementById('KKM2').value;
    var task = {
        id: 1,
        kkm: KKM2
    }
    let database = firebase.database().ref("db_kkm/" + 1);
    database.set(task);
}

function setKKM3() {
    let KKM3 = document.getElementById('KKM3').value;
    var task = {
        id: 2,
        kkm: KKM3
    }
    let database = firebase.database().ref("db_kkm/" + 2);
    database.set(task);
}

function setKKM4() {
    let KKM4 = document.getElementById('KKM4').value;
    var task = {
        id: 3,
        kkm: KKM4
    }
    let database = firebase.database().ref("db_kkm/" + 3);
    database.set(task);
}