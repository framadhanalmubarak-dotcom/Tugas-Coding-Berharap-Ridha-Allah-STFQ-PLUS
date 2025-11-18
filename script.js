$(document).ready(function () {
  const π = Math.PI;

  function formInput(bangun) {
    switch (bangun) {
      case "persegi":
        return `
          <h2 class="text-xl font-bold mb-4">Persegi</h2>
          <input id="s" type="number" placeholder="Sisi (cm)" class="border rounded p-2 w-1/2 mb-2"><br>
          <select id="pilihan" class="border rounded p-2 w-1/2 mb-4">
            <option value="luas">Hitung Luas</option>
            <option value="keliling">Hitung Keliling</option>
          </select><br>
          <button id="btnHitung" class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Hitung</button>
          <div id="hasil" class="mt-4"></div>
        `;
      case "persegipanjang":
        return `
          <h2 class="text-xl font-bold mb-4">Persegi Panjang</h2>
          <input id="p" type="number" placeholder="Panjang (cm)" class="border rounded p-2 w-1/2 mb-2"><br>
          <input id="l" type="number" placeholder="Lebar (cm)" class="border rounded p-2 w-1/2 mb-2"><br>
          <select id="pilihan" class="border rounded p-2 w-1/2 mb-4">
            <option value="luas">Hitung Luas</option>
            <option value="keliling">Hitung Keliling</option>
          </select><br>
          <button id="btnHitung" class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Hitung</button>
          <div id="hasil" class="mt-4"></div>
        `;
      case "lingkaran":
        return `
          <h2 class="text-xl font-bold mb-4">Lingkaran</h2>
          <input id="r" type="number" placeholder="Jari-jari (cm)" class="border rounded p-2 w-1/2 mb-2"><br>
          <select id="pilihan" class="border rounded p-2 w-1/2 mb-4">
            <option value="luas">Hitung Luas</option>
            <option value="keliling">Hitung Keliling</option>
          </select><br>
          <button id="btnHitung" class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Hitung</button>
          <div id="hasil" class="mt-4"></div>
        `;
      case "kubus":
        return `
          <h2 class="text-xl font-bold mb-4">Kubus</h2>
          <input id="sKubus" type="number" placeholder="Sisi (cm)" class="border rounded p-2 w-1/2 mb-2"><br>
          <select id="pilihan" class="border rounded p-2 w-1/2 mb-4">
            <option value="volume">Hitung volume</option>
            <option value="luas">Hitung Keliling permukaan</option>
            <option value="keliling">Hitung Keliling rusuk</option>
          </select><br>
          <button id="btnHitung" class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Hitung</button>
          <div id="hasil" class="mt-4"></div>
        `;
      case "balok":
        return `
          <h2 class="text-xl font-bold mb-4">balok</h2>
          <input id="pBalok" type="number" placeholder="Panjang (cm)" class="border rounded p-2 w-1/2 mb-2"><br>
          <input id="lBalok" type="number" placeholder="Lebar (cm)" class="border rounded p-2 w-1/2 mb-2"><br>
          <input id="tBalok" type="number" placeholder="Tinggi (cm)" class="border rounded p-2 w-1/2 mb-4"><br>
          <select id="pilihan" class="border rounded p-2 w-1/2 mb-4">
            <option value="volume">Hitung volume</option>
            <option value="luas">Hitung Luas Permukaan</option>
          </select><br>
          <button id="btnHitung" class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Hitung</button>
          <div id="hasil" class="mt-4"></div>
        `;
      case "tabung":
        return `
          <h2 class="text-xl font-bold mb-4">Tabung</h2>
          <input id="rTabung" type="number" placeholder="Jari-jari (cm)" class="border rounded p-2 w-1/2 mb-2"><br>
          <input id="tTabung" type="number" placeholder="Tinggi (cm)" class="border rounded p-2 w-1/2 mb-4"><br>
          <select id="pilihan" class="border rounded p-2 w-1/2 mb-4">
            <option value="volume">Hitung volume</option>
            <option value="luas">Hitung Luas Permukaan</option>
            <option value="keliling">Keliling Lingkaran Alas</option>
          </select><br>
          <button id="btnHitung" class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">Hitung</button>
          <div id="hasil" class="mt-4"></div>
        `;
    }
  }

  // Klik menu sidebar
  $("aside button").click(function () {
    const bangun = $(this).data("bangun");
    $("#content").html(formInput(bangun));

    // Mulai ngitung saat tombol diklik
    $("#btnHitung").click(function () {
      const pilihan = $("#pilihan").val();

      let hasil = 0;

      switch (bangun) {
        case "persegi":
          const s = parseFloat($("#s").val());
          hasil = pilihan === "luas" ? s * s : 4 * s;
          break;
        case "persegipanjang":
          const p = parseFloat($("#p").val());
          const l = parseFloat($("#l").val());
          hasil = pilihan === "luas" ? p * l : 2 * (p + l);
          break;
        case "lingkaran":
          const r = parseFloat($("#r").val());
          hasil = pilihan === "luas" ? π * r * r : 2 * π * r;
          break;
        case "kubus":
          const sKubus = parseFloat($("#sKubus").val());
          hasil =
            pilihan === "volume"
              ? sKubus ** 3
              : pilihan === "luas"
              ? 6 * sKubus * sKubus
              : 12 * sKubus;
          break;
        case "balok":
          const pBalok = parseFloat($("#pBalok").val());
          const lBalok = parseFloat($("#lBalok").val());
          const tBalok = parseFloat($("#tBalok").val());
          hasil =
            pilihan === "volume"
              ? pBalok * lBalok * tBalok
              : 2 * (pBalok * lBalok + pBalok * tBalok + lBalok * tBalok);
          break;
        case "tabung":
          const rTabung = parseFloat($("#rTabung").val());
          const tTabung = parseFloat($("#tTabung").val());

          hasil =
            pilihan === "volume"
              ? π * rTabung * rTabung * tTabung
              : pilihan === "luas"
              ? 2 * π * rTabung * (rTabung + tTabung)
              : 2 * π * rTabung;
          break;
      }

      if (!isNaN(hasil)) {
        $("#hasil").html(`
          <div class="bg-blue-100 p-3 rounded mt-3 text-left">
            <b>Hasil ${pilihan}:</b> ${hasil} cm${
          pilihan === "luas" ? "²" : pilihan === "volume" ? "³" : ""
        }
          </div>
        `);
      } else {
        $("#hasil").html(
          '<div class="text-red-600 font-semibold mt-3">Isi semua nilai dengan benar!</div>'
        );
      }
    });
  });
});
