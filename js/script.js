function geriDon() {
    window.history.back();
}

function toastGoster(mesaj) {
    const toast = document.getElementById("toast");
    toast.innerText = mesaj;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

function kopyala(button) {
    const text = button.closest(".soz-card").querySelector(".soz-text").innerText;
    navigator.clipboard.writeText(text);

    // Kopyalama sayacı
    let sayi = localStorage.getItem(text) || 0;
    sayi++;
    localStorage.setItem(text, sayi);

    toastGoster("Söz kopyalandı ✔");
}

function paylas(button) {
    const text = button.closest(".soz-card").querySelector(".soz-text").innerText;

    if (navigator.share) {
        navigator.share({ title: "SözDeposu", text: text });
    } else {
        toastGoster("Paylaşım desteklenmiyor");
    }
}

function rastgeleSoz() {
    const sozler = document.querySelectorAll(".soz-text");
    if (sozler.length === 0) return;

    const random = Math.floor(Math.random() * sozler.length);
    sozler[random].scrollIntoView({ behavior: "smooth", block: "center" });

    toastGoster("Rastgele söz seçildi 🎯");
}
function rastgeleSoz() {

    const sozler = document.querySelectorAll(".soz-text");
    if (sozler.length === 0) return;

    const random = Math.floor(Math.random() * sozler.length);
    const secilen = sozler[random].innerText;

    const alan = document.getElementById("rastgeleAlan");

    alan.innerText = secilen;
    alan.classList.add("show");

    toastGoster("Rastgele söz getirildi 🎯");
}