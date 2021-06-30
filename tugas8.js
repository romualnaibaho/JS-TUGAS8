function tampilkanObjek(Objek){
    console.log("Sebelum Objek Diubah :");
    console.log(Objek);

    Objek.nama = "Nilai Diubah";
    console.log("Setelah Objek Diubah :");
    console.log(Objek);
}

var Peserta = {
    nama : "Romual Naibaho",
    umur : "20 Tahun",
    status : "Mahasiswa Aktif",
    skills : ['html','css', 'javascript', 'php']
}

tampilkanObjek(Peserta);