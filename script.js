const buttonIyo = document.querySelector(".btn");
const sayHay = document.querySelector(".say-hay");
const box = document.querySelector(".box");
const cardMess = document.querySelector(".card-mess");
cardMess.style.display = "none";

buttonIyo.addEventListener("click", () => {
  box.style.display = "none";
  let nama = document.querySelector("#inp").value;
  sayHay.innerHTML = `Hay ${nama}!`;
  cardMess.classList.add("animasi");
  cardMess.style.display = "inline-block";
  event.preventDefault();
});

// Halaman Send
// const container = document.querySelector(".container");
// const sodi = document.querySelector(".sodi");

// container.addEventListener("click", (con) => {
//   if (con.target.className == "sodi") {
//     console.log("Btn-sodi");
//   } else if (con.target.className == "btn_pesan") {
//     console.log("Btn-Pesan");
//   } else {
//     console.log("Tidak ada tombol yg di tekan");
//   }
// });
