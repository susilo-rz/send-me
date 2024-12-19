const container = document.querySelector(".container");
const mainCard = document.getElementById("main_card");
const cardSodi = document.getElementById("card_sodi");
const cardPesan = document.getElementById("card_pesan");

cardSodi.style.display = "none";
cardPesan.style.display = "none";

// Card Utama
container.addEventListener("click", (con) => {
  if (con.target.className == "btn_sodi") {
    con.target.parentElement.parentElement.parentElement.style.display = "none";
    cardSodi.classList.add("animasi");
    cardSodi.style.display = "inline-block";
  } else if (con.target.className == "btn_pesan") {
    con.target.parentElement.parentElement.parentElement.style.display = "none";
    cardPesan.classList.add("animasi");
    cardPesan.style.display = "inline-block";
    // Button Iyo ra
  } else if (con.target.className == "btn_iyo1") {
    const inpSodi = document.querySelectorAll("textarea")[0].value;

    const phoneNumber = "6287756691918"; // Ganti dengan nomor tujuan
    const encodedMessage = encodeURIComponent(inpSodi); // Pastikan pesan ter-encode dengan benar
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect langsung ke WhatsApp
    window.location.href = whatsappURL;
  } else if (con.target.className == "btn_iyo2") {
    const inpPesan = document.querySelectorAll("textarea")[1].value;
    const phoneNumber = "6287756691918"; // Ganti dengan nomor tujuan
    const encodedMessage = encodeURIComponent(inpPesan); // Pastikan pesan ter-encode dengan benar
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Redirect langsung ke WhatsApp
    window.location.href = whatsappURL;
    // Tombol Back
  } else if (con.target.className == "btn_back1") {
    con.target.parentElement.parentElement.parentElement.style.display = "none";
    mainCard.classList.add("animasi");
    mainCard.style.display = "inline-block";
  } else if (con.target.className == "btn_back2") {
    con.target.parentElement.parentElement.parentElement.style.display = "none";
    mainCard.classList.add("animasi");
    mainCard.style.display = "inline-block";
  }
});
