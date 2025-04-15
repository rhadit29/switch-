let daftarPlat = ['B 7812 ZXC', 'B 1457 MNO', 'B 9034 HJK', 'B 2269 QWE'];
let tanggalHariIni = 20;

daftarPlat.forEach(function(plat) {
    // Ambil bagian angka dari plat (contoh: '7812')
    let nomor = plat.split(' ')[1];
    let digitTerakhir = nomor.slice(-1); // ambil digit terakhir

    // Tentukan jenis plat berdasarkan digit terakhir
    let jenisPlat;
    switch (digitTerakhir) {
        case '0':
        case '2':
        case '4':
        case '6':
        case '8':
            jenisPlat = 'GENAP';
            break;
        case '1':
        case '3':
        case '5':
        case '7':
        case '9':
            jenisPlat = 'GANJIL';
            break;
        default:
            jenisPlat = 'TIDAK DIKETAHUI';
    }

    // Tentukan apakah tanggal hari ini ganjil atau genap
    let jenisTanggal = (tanggalHariIni % 2 === 0) ? 'GENAP' : 'GANJIL';

    // Cek apakah plat boleh melintas
    let statusMelintas = (jenisPlat === jenisTanggal) ? 'BOLEH' : 'TIDAK BOLEH';

    // Tampilkan hasil
    console.log(`${plat} merupakan plat ${jenisPlat}. Maka kendaraan ${statusMelintas} melintas karena tanggal hari ini ${tanggalHariIni} (${jenisTanggal})`);
});