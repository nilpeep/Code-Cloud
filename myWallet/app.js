// selectors

const eklebtn = document.getElementById("ekle-btn");

const gelirInput = document.getElementById("gelir-input");

const ekleFormu = document.getElementById("ekleme-formu");

// variables

let gelirler = 0;

// hesap tablosu

const gelirinizTd = document.getElementById("geliriniz");

const giderinizTd = document.getElementById("gideriniz");

const kalanTd = document.getElementById("kalan");

//harcama formu

const harcamaFormu = document.getElementById("harcama-formu");

const harcamaAlaniInput = document.getElementById("harcama-alani");

const tarihInput = document.getElementById("tarih");

const miktarInput = document.getElementById("miktar");

// harcama tablosu

const harcamaBody = document.getElementById("harcama-body");

const temizleBtn = document.getElementById("temizle-btn");

// ekle formu

eklebtn.addEventListener("click", (e) => {
  e.preventDefault();

  gelirler = gelirler + Number(gelirInput.value);
  console.log(gelirler);

  localStorage.setItem("gelirler", gelirler);

  gelirinizTd.innerText = gelirler;

  ekleFormu.reset();
});

window.addEventListener("load", () => {
  gelirler = Number(localStorage.getItem("gelirler")) || 0;
  gelirinizTd.innerText = gelirler;
});

harcamaFormu.addEventListener("submit", (e) => {
  e.preventDefault(); // reloadi engeller

  const yeniHarcamaGirisi = {};
});
