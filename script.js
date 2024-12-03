document.addEventListener("DOMContentLoaded", () => {
    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");
    const enterButton = document.getElementById("enter-button");
  
    // Saat tombol diklik, lakukan transisi ke konten utama
    enterButton.addEventListener("click", () => {
      introScreen.style.opacity = "0";
      introScreen.style.transition = "opacity 1s ease-in-out";
  
      // Sembunyikan layar selamat datang setelah transisi
      setTimeout(() => {
        introScreen.style.display = "none";
        mainContent.classList.add("visible");
      }, 1000);
    });

    enterButton.addEventListener("click", () => {
        introScreen.style.opacity = "0"; // Hilangkan layar intro
        introScreen.style.transition = "opacity 1s ease-in-out";
      
        setTimeout(() => {
          introScreen.style.display = "none"; // Sembunyikan layar intro sepenuhnya
          mainContent.classList.add("visible"); // Tampilkan konten utama
          document.body.style.overflow = "auto"; // Aktifkan scroll
        }, 1000); // Waktu yang sama dengan durasi transisi
    });      
});
  