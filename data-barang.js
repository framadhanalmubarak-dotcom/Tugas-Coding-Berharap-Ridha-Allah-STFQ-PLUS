let dataBarang = [];
tampilkanTabel(); 

$("#btnTambah").click(function () {
    const nama = $("#namaBarang").val();
    const harga = $("#harga").val();
    const jumlah = $("#jumlah").val();
    const kategori = $("#kategori").val();

    if (!nama || !harga || !jumlah) {
        alert("Data belum lengkap!");
        return;
    }

    const barang = { nama, harga, jumlah, kategori };
    dataBarang.push(barang);
    console.log(dataBarang);

    localStorage.setItem("dataBarang", JSON.stringify(dataBarang));        

    tampilkanTabel();
    hapusForm();
});

$("#btnHapus").click(function () {
    if (confirm("Yakin ingin menghapus semua data?")) {
        dataBarang = [];
        localStorage.removeItem("dataBarang");
        tampilkanTabel();
        hapusForm();
    }
});

function tampilkanTabel() {
  $("#tabelData").html("");

  dataBarang.forEach(item => {
    $("#tabelData").append(`
        <tr class='border border-gray-700'>
            <td class="p-2 border">${item.nama}</td>
            <td class="p-2 border">${item.harga}</td>
            <td class="p-2 border">${item.jumlah}</td>
            <td class="p-2 border">${item.kategori}</td>
        </tr>
    `);
  });
}

function hapusForm() {
    $("#namaBarang").val("");
    $("#harga").val("");
    $("#jumlah").val("");
    $("#kategori").val("peralatan olahraga");
}

window.onload = function() {
    const storedData = localStorage.getItem("dataBarang");
    if (storedData) {
        dataBarang = JSON.parse(storedData);
        tampilkanTabel();
    }
}