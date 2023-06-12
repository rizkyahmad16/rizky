function proses_guru() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (username.value == "Guru" && password.value == "guru") {
        window.location.href = "guru/datasiswa.html";
    } else if (username.value == "Guru" && password.value != "guru") {
        sweetAlert("Oops...", "Password anda salah !!", "error");
    } else if (username.value == "" && password.value == "") {
        sweetAlert("Oops...", "NIP dan Password anda masih kosong, silahkan masukkan terlebih dahulu !!", "error");
    } else {
        sweetAlert("Oops...", "NIP dan Password anda salah !!", "error");
    }
}