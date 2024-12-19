const buttonIyo = document.querySelector(".btn");
// const nama = document.querySelector("#inp");

buttonIyo.addEventListener("click", () => {
  let nama = document.querySelector("#inp").value;
  alert(`Hay ${nama}😊 
Salam Kenal yah!`);
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
