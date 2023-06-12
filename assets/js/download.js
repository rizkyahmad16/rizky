var namaS = localStorage.getItem('nama');
var kelasS = localStorage.getItem('kelas');
var sekolahS = localStorage.getItem('sekolah');

function downloadrangkum(){
    // Pilih elemen tempat faktur kami ditampilkan. 
    const  element = document.getElementById("download"); 
    // Pilih elemen dan simpan PDF untuk pengguna kami. 
    html2pdf() 
      .from(element) 
      .save(`${namaS}_${kelasS}_${sekolahS}_Rangkuman`); 
}