const data = document.getElementById("input").value;
const input = document.getElementById("input");

function createTable(data) {
  // Tablo başlangıcı
  input.style.display = "none";
  createTableBtn.style.display = "none";
  let table =
    "<table><tr><th>ID</th><th>Ad</th><th>Konum</th><th>Uzmanlık</th></tr>";

  // Veri üzerinde dönerek tablo satırlarını oluştur
  data.map((item) => {
    const parts = item.split(" - ");
    const id = parts[0];
    const rest = parts[1].split(", ");
    const name = rest[0];
    const location = rest[1];
    const specialty = rest[2];

    // Her öğrenci için bir tablo satırı ekle
    table += `<tr>
                  <td>${id}</td>
                  <td>${name}</td>
                  <td>${location}</td>
                  <td>${specialty}</td>
                </tr>`;
  });

  // Tablo sonunu ekle
  table += "</table>";

  // Tabloyu HTML içinde göster
  document.getElementById("table-container").innerHTML = table;
}

const createTableBtn = document.getElementById("createTableBtn");

createTableBtn.addEventListener("click", () => {
  createTable(data);
});

console.log(data);

// Fonksiyonu veri ile çağır
